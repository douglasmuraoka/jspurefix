import { IUnderlyingInstrument } from './underlying_instrument'
import { IQuotEntryAckGrp } from './quot_entry_ack_grp'

export interface IQuotSetAckGrp {
  QuoteSetID?: string// 302
  QuoteSetValidUntilTime?: Date// 367
  TotNoQuoteEntries?: number// 304
  TotNoCxldQuotes?: number// 1168
  TotNoAccQuotes?: number// 1169
  TotNoRejQuotes?: number// 1170
  LastFragment?: string// 893
  UnderlyingInstrument?: IUnderlyingInstrument
  QuotEntryAckGrp?: IQuotEntryAckGrp[]
}
