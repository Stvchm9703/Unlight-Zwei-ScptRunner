package src

import (
	pb "ULZ_SCPTRunner/proto"
	"errors"
)

type BTWFile struct {
	FilePath string
	Raw      []byte
	EFObject []*EffectFuncObj
}

func (this *BTWFile) ServiceInit(conf *ConfTmp) (bool, error) {
	return true, nil
}

func (this *BTWFile) ServiceRun(gs *pb.GameSet) (*pb.GameSet, error) {
	for _, v := range this.EFObject {
		if *v.RefType == "" {
			return v.RunEffect(gs)
		}
	}
	//
	return nil, errors.New("")
}

type EffectFuncObj struct {
	_id      *string
	RefType  *string
	RefID    *string
	WasmFunc []byte
}

var EFObjError = []error{
	errors.New("RunError"),
}

func (this *EffectFuncObj) RunEffect(gs *pb.GameSet, eff ...*EffectFuncObj) (*pb.GameSet, error) {
	if len(this.WasmFunc) <= 0 {
		return nil, errors.New("")
	}
	return nil, nil
}
