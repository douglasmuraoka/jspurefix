import { IStandardHeader } from './set/standard_header'
import { IMsgTypeGrp } from './set/msg_type_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The logon message authenticates a user establishing a        *
* connection to a remote system. The logon message must be the *
* first message sent by the application requesting to initiate *
* a FIX session.                                               *
****************************************************************
*/
export interface ILogon {
  StandardHeader: IStandardHeader
  EncryptMethod: number// 98
  HeartBtInt: number// 108
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  ResetSeqNumFlag?: boolean// 141
  NextExpectedMsgSeqNum?: number// 789
  MaxMessageSize?: number// 383
  MsgTypeGrp?: IMsgTypeGrp[]
  TestMessageIndicator?: boolean// 464
  Username?: string// 553
  Password?: string// 554
  DefaultApplVerID: string// 1137
  StandardTrailer: IStandardTrailer
}
