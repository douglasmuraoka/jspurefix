import { IStandardHeader } from './set/standard_header'
import { IOrdListStatGrp } from './set/ord_list_stat_grp'

/*
**********************************************
* ListStatus can be found in Volume 4 of the *
*                                            *
* specification                              *
**********************************************
*/
export interface IListStatus {
  ListID: string// 66
  ListStatusType: number// 429
  NoRpts: number// 82
  ListOrderStatus: number// 431
  ContingencyType?: number// 1385
  ListRejectReason?: number// 1386
  RptSeq: number// 83
  ListStatusText?: string// 444
  EncodedListStatusTextLen?: string// 445
  EncodedListStatusText?: Buffer// 446
  RelSymTransactTime?: Date// 1504
  TotNoOrders: number// 68
  LastFragment?: string// 893
  StandardHeader?: IStandardHeader
  OrdListStatGrp?: IOrdListStatGrp[]
}
