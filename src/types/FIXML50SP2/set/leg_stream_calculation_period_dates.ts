import { ILegStreamCalculationPeriodBusinessCenterGrp } from './leg_stream_calculation_period_business_center_grp'
import { ILegStreamCalculationPeriodDateGrp } from './leg_stream_calculation_period_date_grp'
import { ILegStreamFirstPeriodStartDateBusinessCenterGrp } from './leg_stream_first_period_start_date_business_center_grp'

export interface ILegStreamCalculationPeriodDates {
  UnderlyingDividendPeriodXID?: string// 42881
  UnderlyingStreamCommoditySettlPeriodXIDRef?: string// 42015
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingStreamFirstPeriodStartDateUnadjusted?: Date// 40558
  UnderlyingStreamFirstPeriodStartDateBusinessDayConvention?: number// 40559
  UnderlyingStreamFirstPeriodStartDateAdjusted?: Date// 40561
  UnderlyingStreamFirstRegularPeriodStartDateUnadjusted?: Date// 40562
  UnderlyingStreamFirstCompoundingPeriodEndDateUnadjusted?: Date// 40563
  UnderlyingStreamLastRegularPeriodEndDateUnadjusted?: Date// 40564
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  UnderlyingStreamCalculationBalanceOfFirstPeriod?: string// 41959
  UnderlyingStreamCalculationCorrectionPeriod?: number// 41960
  UnderlyingStreamCalculationCorrectionUnit?: string// 41961
  LegStreamCalculationPeriodBusinessCenterGrp?: ILegStreamCalculationPeriodBusinessCenterGrp[]
  LegStreamCalculationPeriodDateGrp?: ILegStreamCalculationPeriodDateGrp[]
  LegStreamFirstPeriodStartDateBusinessCenterGrp?: ILegStreamFirstPeriodStartDateBusinessCenterGrp[]
}
