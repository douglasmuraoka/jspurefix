import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrumentScopeGrp } from './set/instrument_scope_grp'
import { IRelatedMarketSegmentGrp } from './set/related_market_segment_grp'
import { IBaseTradingRules } from './set/base_trading_rules'
import { IOrdTypeRules } from './set/ord_type_rules'
import { ITimeInForceRules } from './set/time_in_force_rules'
import { IExecInstRules } from './set/exec_inst_rules'
import { IAuctionTypeRuleGrp } from './set/auction_type_rule_grp'
import { IMarketDataFeedTypes } from './set/market_data_feed_types'
import { IMatchRules } from './set/match_rules'
import { IFlexProductEligibilityGrp } from './set/flex_product_eligibility_grp'
import { IParties } from './set/parties'

/*
****************************************************************
* MarketDefinitionUpdateReport can be found in Volume 3 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface IMarketDefinitionUpdateReport {
  MarketReportID: string// 1394
  MarketReqID?: string// 1393
  MarketUpdateAction?: string// 1395
  SideCollateralAmountMarketID: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  MarketSegmentDesc?: string// 1396
  EncodedMktSegmDescLen?: string// 1397
  EncodedMktSegmDesc?: Buffer// 1398
  ParentMktSegmID?: string// 1325
  MarketSegmentStatus?: number// 2542
  MarketSegmentType?: number// 2543
  MarketSegmentSubType?: number// 2544
  UnderlyingReturnRatePriceCurrency?: string// 43067
  EffectiveBusinessDate?: Date// 2400
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  InstrumentScopeGrp?: IInstrumentScopeGrp[]
  RelatedMarketSegmentGrp?: IRelatedMarketSegmentGrp[]
  BaseTradingRules?: IBaseTradingRules
  OrdTypeRules?: IOrdTypeRules[]
  TimeInForceRules?: ITimeInForceRules[]
  ExecInstRules?: IExecInstRules[]
  AuctionTypeRuleGrp?: IAuctionTypeRuleGrp[]
  MarketDataFeedTypes?: IMarketDataFeedTypes[]
  MatchRules?: IMatchRules[]
  FlexProductEligibilityGrp?: IFlexProductEligibilityGrp[]
  Parties?: IParties[]
}
