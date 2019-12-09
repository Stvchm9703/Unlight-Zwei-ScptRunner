package cmd

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/spf13/cobra"
)

var runCMDInput = struct {
	rootPath	string
	c       	string   // config file path
	m         	string   // run-mode 
	h 			string 	 // service host
	p 			int 	// service port
	q 			string 	// Log Address
	l 			string  // Log Mode
	w 			int 	// LogPort 
}{}

var runCmd = &cobra.Command{
	Use:   "start",
	Short: "start the server of grpc server",
	Long:  `grpc server start run `,
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("grpc server  Generator v0.9 -- HEAD")
		if len(args) > 0 {
			fmt.Println(args)
		}
		callPath, _ := os.Getwd()
		fmt.Println(runCMDInput.cfPath)

		var configPoint *Cf.ConfTmp
		var err error
		if strings.Contains(runCMDInput.cfPath, ".toml") {
			configPoint, err = Cf.OpenToml(runCMDInput.cfPath)
		} else if strings.Contains(runCMDInput.cfPath, ".yaml") {
			configPoint, err = Cf.OpenYaml(runCMDInput.cfPath)
		}
		log.Println(configPoint)
		log.Println(runCMDInput.mode)
		if err == nil {
			// Wb.ServerMainProcess(configPoint, callPath, runCMDInput.mode)
		} else {
			panic(err)
		}
	},
}

func init() {
	callPath, _ := os.Getwd()

	runCmd.Flags().StringVarP(
		&runCMDInput.c,
		"conf", "c",
		filepath.Join(callPath, "config.toml"),
		"start server with specific config file")

	runCmd.Flags().StringVarP(
		&runCMDInput.m,
		"mode", "m",
		"prod",
		"server running mode [prod / dev / test]")

	runCmd.Flags().StringVarP(
		&runCMDInput.h,
		"host", "h",
		"127.0.0.1",
		"server running host ip(v4),\n \t \t If this flag on, it overwrite the running setting in config file ")

	runCmd.Flags().IntVarP(
		&runCMDInput.p,
		"port", "p",
		9122,
		"server running port,\n \t \t If this flag on, it overwrite the running setting in config file ")

	runCmd.Flags().StringVarP(
		&runCMDInput.l,
		"LogMode", "l",
		"redis",
		"server Log Mode,[Write(w)/Redis(r)], If this flag on, it overwrite the running setting in config file "
	)

	runCmd.Flags().StringVarP(
		&runCMDInput.q,
		"LogAddress", "q",
		"127.0.0.1",
		"server Log Mode,if it use redis, it need to set the log-address for connecting redis"
	)


	runCmd.Flags().StringVarP(
		&runCMDInput.w,
		"LogPort", "w",
		"127.0.0.1",
		"server Log Mode,if it use redis, it need to set the log-address for connecting redis"
	)


	// runCmd.Flags().BoolP(
	// 	&
	// )

	rootCmd.AddCommand(runCmd)
}
