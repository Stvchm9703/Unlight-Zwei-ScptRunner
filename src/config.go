package src

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"

	"github.com/BurntSushi/toml"
	"gopkg.in/yaml.v2"
)

// ConfTmp : System Configuration object
type ConfTmp struct {
	APIServer CfAPIServer `toml:"api_server" json:"api_server" yaml:"api_server"`
	Database  CfTDatabase `toml:"database" json:"database" yaml:"database"`
}

type CfAPIServer struct {
	ConnType     string `toml:"conn_type" json:"conn_type" yaml:"conn_type"`
	IP           string `toml:"ip" json:"ip" yaml:"ip"`
	Port         int    `toml:"port" json:"port" yaml:"port"`
	MaxPoolSize  int    `toml:"max_pool_size" json:"max_pool_size" yaml:"max_pool_size"`
	APIReferType string `toml:"api_refer_type" json:"api_refer_type" yaml:"api_refer_type"`
	APITablePath string `toml:"api_table_filepath" json:"api_table_filepath" yaml:"api_table_filepath"`
	APIOutpath   string `toml:"api_outpath" json:"api_outpath" yaml:"api_outpath"`
	Cert         string `toml:"cert" json:"cert" yaml:"cert"`
}

type CfTDatabase struct {
	Connector  string `toml:"connector" json:"connector" yaml:"connector"`
	WorkerNode int    `toml:"worker_node" json:"worker_node" yaml:"worker_node"`
	Host       string `toml:"host" json:"host" yaml:"host"`
	Port       int    `toml:"port" json:"port" yaml:"port"`
	Username   string `toml:"username" json:"username" yaml:"username"`
	Password   string `toml:"password" json:"password" yaml:"password"`
	Database   string `toml:"database" json:"database" yaml:"database"`
	Filepath   string `toml:"filepath" json:"filepath" yaml:"filepath"`
}

// CreateConfigToml : Quick create
func CreateConfigToml(path string, initForm *ConfTmp) {
	fmt.Println("= ---- creating config.toml -----")
	fileLocate, err := os.Create(filepath.Join(path, "config.toml"))
	if err != nil {
		fmt.Println(err)
		panic(err)
	}

	Writer := bufio.NewWriter(fileLocate)
	EncoderA := toml.NewEncoder(Writer)
	EncoderA.Encode(initForm)
	fmt.Println("= ")
}

// CreateConfigYaml : Quick create
func CreateConfigYaml(path string, initForm *ConfTmp) {
	fmt.Println("= ---- creating config.yaml -----")
	fileLocate, err := os.Create(filepath.Join(path, "config.yaml"))
	if err != nil {
		fmt.Println(err)
		panic(err)
	}

	Writer := bufio.NewWriter(fileLocate)
	d, err := yaml.Marshal(initForm)
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
	fmt.Printf("--- m dump:\n%s\n\n", string(d))
	fmt.Fprint(Writer, string(d))
	Writer.Flush()
}

// OpenToml : Open config
func OpenToml(path string) (*ConfTmp, error) {
	fmt.Println("= ---- open config.toml -----")
	fmt.Println(path)

	var config ConfTmp
	_, err := toml.DecodeFile(path, &config)
	if err != nil {
		fmt.Println(err)
	}
	return &config, err
}

// OpenYaml : Open config
func OpenYaml(path string) (*ConfTmp, error) {
	fmt.Println("= ---- open config.yaml -----")
	fmt.Println(path)

	var config ConfTmp
	yamlFile, _ := ioutil.ReadFile(path)
	err := yaml.Unmarshal(yamlFile, &config)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	return &config, err
}
