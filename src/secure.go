package src

import (
	"bytes"
	"crypto/rand"
	"crypto/rsa"
	"crypto/tls"
	"crypto/x509"
	"crypto/x509/pkix"
	"encoding/pem"
	"log"
	"math/big"
	"net"
	"os"
	"path/filepath"
	"time"
)

var (
	// Cert is a self signed certificate
	Cert *tls.Certificate
	// CertPool contains the self signed certificate
	CertPool *x509.CertPool
	// wd
	wd = ""
	// PrivateCertFile : where the cert file found
	PrivateCertFile string = filepath.Join(wd, "insecure", "server.crt")
	// KeyPEMFile : where the server key found
	KeyPEMFile string = filepath.Join(wd, "insecure", "server.key")
)

func init() {
	wd, _ = os.Getwd()
	var err error
	// Cert, err = tls.X509KeyPair([]byte(certPEM), []byte(keyPEM))
	Cert, err = GetCurrCert()
	// log.Println("try create new")
	if err != nil {
		log.Println("try create new")
		Cert, err = GenCurrCert()
	}
	CertPool = x509.NewCertPool()
	CertPool.AddCert(Cert.Leaf)
}

func GetCurrCert() (*tls.Certificate, error) {
	tmpcert, err := tls.LoadX509KeyPair(PrivateCertFile, KeyPEMFile)
	if err != nil {
		log.Println("Failed to parse key pair:", err)
		return nil, err
	}
	tmpcert.Leaf, err = x509.ParseCertificate(tmpcert.Certificate[0])
	if err != nil {
		log.Println("Failed to parse certificate:", err)
		return nil, err
	}
	return &tmpcert, nil
}

func GenCurrCert() (*tls.Certificate, error) {
	ca := &x509.Certificate{
		SerialNumber: big.NewInt(2019),
		Subject: pkix.Name{
			Organization:  []string{"Company, INC."},
			Country:       []string{"US"},
			Province:      []string{""},
			Locality:      []string{"San Francisco"},
			StreetAddress: []string{"Golden Gate Bridge"},
			PostalCode:    []string{"94016"},
		},
		NotBefore:             time.Now(),
		NotAfter:              time.Now().AddDate(10, 0, 0),
		IsCA:                  true,
		ExtKeyUsage:           []x509.ExtKeyUsage{x509.ExtKeyUsageClientAuth, x509.ExtKeyUsageServerAuth},
		KeyUsage:              x509.KeyUsageDigitalSignature | x509.KeyUsageCertSign,
		BasicConstraintsValid: true,
	}

	// create our private and public key
	caPrivKey, err := rsa.GenerateKey(rand.Reader, 4096)
	if err != nil {
		return nil, err
	}

	// create the CA
	caBytes, err := x509.CreateCertificate(rand.Reader, ca, ca, &caPrivKey.PublicKey, caPrivKey)
	if err != nil {
		return nil, err
	}

	// pem encode
	caPEM := new(bytes.Buffer)
	pem.Encode(caPEM, &pem.Block{
		Type:  "CERTIFICATE",
		Bytes: caBytes,
	})

	caPrivKeyPEM := new(bytes.Buffer)
	pem.Encode(caPrivKeyPEM, &pem.Block{
		Type:  "RSA PRIVATE KEY",
		Bytes: x509.MarshalPKCS1PrivateKey(caPrivKey),
	})

	// set up our server certificate
	cert := &x509.Certificate{
		SerialNumber: big.NewInt(2019),
		Subject: pkix.Name{
			Organization:  []string{"Company, INC."},
			Country:       []string{"US"},
			Province:      []string{""},
			Locality:      []string{"San Francisco"},
			StreetAddress: []string{"Golden Gate Bridge"},
			PostalCode:    []string{"94016"},
		},
		IPAddresses:  []net.IP{net.IPv4(127, 0, 0, 1), net.IPv6loopback},
		NotBefore:    time.Now(),
		NotAfter:     time.Now().AddDate(10, 0, 0),
		SubjectKeyId: []byte{1, 2, 3, 4, 6},
		ExtKeyUsage:  []x509.ExtKeyUsage{x509.ExtKeyUsageClientAuth, x509.ExtKeyUsageServerAuth},
		KeyUsage:     x509.KeyUsageDigitalSignature,
	}

	certPrivKey, err := rsa.GenerateKey(rand.Reader, 4096)
	if err != nil {
		return nil, err
	}

	certBytes, err := x509.CreateCertificate(rand.Reader, cert, ca, &certPrivKey.PublicKey, caPrivKey)
	if err != nil {
		return nil, err
	}

	certPEM := pem.EncodeToMemory(&pem.Block{
		Type:  "CERTIFICATE",
		Bytes: certBytes,
	})
	f, _ := os.OpenFile(PrivateCertFile, os.O_WRONLY|os.O_CREATE, 0666)
	f.Write(certPEM)
	f.Close()

	certPrivKeyPEM := pem.EncodeToMemory(&pem.Block{
		Type:  "RSA PRIVATE KEY",
		Bytes: x509.MarshalPKCS1PrivateKey(certPrivKey),
	})
	f, _ = os.OpenFile(KeyPEMFile, os.O_WRONLY|os.O_CREATE, 0666)
	f.Write(certPrivKeyPEM)
	f.Close()

	serverCert, err := tls.X509KeyPair(certPEM, certPrivKeyPEM)
	if err != nil {
		return nil, err
	}
	serverCert.Leaf, err = x509.ParseCertificate(serverCert.Certificate[0])
	if err != nil {
		log.Println("Failed to parse certificate:", err)
		return nil, err
	}

	return &serverCert, nil
}
