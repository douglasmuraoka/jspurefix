import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'

/*
*****************************************************
* OrderCancelReject can be found in Volume 4 of the *
*                                                   *
* specification                                     *
*****************************************************
*/
export interface IOrderCancelReject {
  OrderID: string// 37
  OrderRequestID?: number// 2422
  SecondaryOrderID?: string// 198
  SecondaryClOrdID?: string// 526
  ClOrdID: string// 11
  ClOrdLinkID?: string// 583
  OrigClOrdID?: string// 41
  OrdStatus: string// 39
  WorkingIndicator?: boolean// 636
  OrigOrdModTime?: Date// 586
  ListID?: string// 66
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  CxlRejResponseTo: string// 434
  CxlRejReason?: number// 102
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
}
