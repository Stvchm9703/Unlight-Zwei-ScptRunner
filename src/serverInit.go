package src

import (
	pb "ULZ_SCPTRunner/proto"
	"os/signal"

	"log"
	"net"
	"os"
	"strconv"
	"syscall"

	grpc_validator "github.com/grpc-ecosystem/go-grpc-middleware/validator"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	// cf "RoomStatus/config"
	// "RoomStatus/insecure"
	// pb "RoomStatus/proto"
	// server "RoomStatus/serverctl"
)

func ServerMain(runconf *ConfTmp) {
	addr := runconf.APIServer.IP + ":" + strconv.Itoa(runconf.APIServer.Port)
	lis, err := net.Listen("tcp", addr)
	if err != nil {
		panic("Failed to listen:\t" + err.Error())
	}
	s := grpc.NewServer(
		grpc.Creds(credentials.NewServerTLSFromCert(Cert)),
		grpc.UnaryInterceptor(grpc_validator.UnaryServerInterceptor()),
		grpc.StreamInterceptor(grpc_validator.StreamServerInterceptor()),
	)

	RMServer := server.New(&runconf)
	// s.GracefulStop()
	pb.RegisterScriptRunnerServer(
		s, RMServer)

	// Serve gRPC Server
	log.Println("Serving gRPC on https://", addr)
	go func() {
		panic(s.Serve(lis))
	}()
	BeforeGracefulStop(s, RMServer)

	// call your cleanup method with this channel as a routine

}
func BeforeGracefulStop(ss *grpc.Server, rms *server.RoomStatusBackend) {
	log.Println("BeforeGracefulStop")
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGINT, syscall.SIGTERM, syscall.SIGKILL)
	aa := <-c
	log.Println("OS.signal", aa)
	log.Println(ss.GetServiceInfo())
	// ss.Shutdown()
	rms.Shutdown()
	ss.GracefulStop()
	log.Println("os GracefulStop")
	os.Exit(0)
}
