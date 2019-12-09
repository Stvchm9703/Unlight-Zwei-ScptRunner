package src

import (
	pb "ULZ_SCPTRunner/proto"
	"sync"
)

var (
	skBsonFile     = []byte
	skBsonFilePath = *string
)

var _ pb.ScriptRunnerServer = (*ScriptBackend)(nil)

type ScriptBackend struct {
	// pb.RoomStatusServer
	mu      *sync.Mutex
	CoreKey string
}

func ServerInit(conf *ConfTmp) {

}
