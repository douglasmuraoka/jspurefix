import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ICollateralAmountGrp } from './set/collateral_amount_grp'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { ITrdRegTimestamps } from './set/trd_reg_timestamps'
import { IMiscFeesGrp } from './set/misc_fees_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IStipulations } from './set/stipulations'
import { ISettlInstructionsData } from './set/settl_instructions_data'

/*
****************************************************
* CollateralReport can be found in Volume 5 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface ICollateralReport {
  CollRptID: string// 908
  CollInquiryID?: string// 909
  TransactTime?: Date// 60
  CollApplType?: number// 1043
  FinancialStatus?: string// 291
  CollStatus: number// 910
  TotNumReports?: number// 911
  LastRptRequested?: boolean// 912
  Account?: string// 1
  AccountType?: number// 581
  ClOrdID?: string// 11
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  SecondaryClOrdID?: string// 526
  SettlDate?: Date// 64
  Quantity?: number// 53
  QtyType?: number// 854
  Currency?: string// 15
  MarginExcess?: number// 899
  TotalNetValue?: number// 900
  CashOutstanding?: number// 901
  RelativeValueSide?: number// 2532
  Price?: number// 44
  PriceType?: number// 423
  AccruedInterestAmt?: number// 159
  EndAccruedInterestAmt?: number// 920
  StartCash?: number// 921
  EndCash?: number// 922
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  ClearingBusinessDate?: Date// 715
  WireReference?: string// 2486
  TradeDate?: Date// 75
  TransactionID?: string// 2485
  FirmTransactionID?: string// 2484
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  ExecCollGrp?: IExecCollGrp[]
  TrdCollGrp?: ITrdCollGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
  CollateralAmountGrp?: ICollateralAmountGrp[]
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp[]
  TrdRegTimestamps?: ITrdRegTimestamps[]
  MiscFeesGrp?: IMiscFeesGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  Stipulations?: IStipulations[]
  SettlInstructionsData?: ISettlInstructionsData
}
