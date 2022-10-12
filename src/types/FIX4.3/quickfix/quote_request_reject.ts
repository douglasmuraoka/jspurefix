import { IStandardHeader } from './set/standard_header'
import { IQuoteRequestRejectNoRelatedSym } from './set/quote_request_reject_no_related_sym'
import { IStandardTrailer } from './set/standard_trailer'

export interface IQuoteRequestReject {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteReqID: string// [2] 131 (String)
  RFQReqID?: string// [3] 644 (String)
  QuoteRequestRejectReason: number// [4] 658 (Int)
  NoRelatedSym: IQuoteRequestRejectNoRelatedSym[]// [5] Symbol.55, SymbolSfx.65 .. Yield.236
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
  StandardTrailer: IStandardTrailer// [9] SignatureLength.93, Signature.89, CheckSum.10
}
