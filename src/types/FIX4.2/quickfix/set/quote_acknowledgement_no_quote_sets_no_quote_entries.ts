export interface IQuoteAcknowledgementNoQuoteSetsNoQuoteEntries {
  QuoteEntryID?: string// [1] 299 (String)
  Symbol?: string// [2] 55 (String)
  SymbolSfx?: string// [3] 65 (String)
  SecurityID?: string// [4] 48 (String)
  IDSource?: string// [5] 22 (String)
  SecurityType?: string// [6] 167 (String)
  MaturityMonthYear?: string// [7] 200 (String)
  MaturityDay?: string// [8] 205 (String)
  PutOrCall?: number// [9] 201 (Int)
  StrikePrice?: number// [10] 202 (Float)
  OptAttribute?: string// [11] 206 (String)
  ContractMultiplier?: number// [12] 231 (Float)
  CouponRate?: number// [13] 223 (Float)
  SecurityExchange?: string// [14] 207 (String)
  Issuer?: string// [15] 106 (String)
  EncodedIssuerLen?: number// [16] 348 (Length)
  EncodedIssuer?: Buffer// [17] 349 (RawData)
  SecurityDesc?: string// [18] 107 (String)
  EncodedSecurityDescLen?: number// [19] 350 (Length)
  EncodedSecurityDesc?: Buffer// [20] 351 (RawData)
  QuoteEntryRejectReason?: number// [21] 368 (Int)
}