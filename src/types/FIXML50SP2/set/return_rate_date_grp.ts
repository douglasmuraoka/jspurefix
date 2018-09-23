import { IReturnRateValuationDateGrp } from './return_rate_valuation_date_grp'
import { IReturnRateValuationDateBusinessCenterGrp } from './return_rate_valuation_date_business_center_grp'

export interface IReturnRateDateGrp {
  UnderlyingReturnRateDateMode?: number// 43009
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingReturnRateValuationStartDateUnadjusted?: Date// 43014
  UnderlyingReturnRateValuationStartDateRelativeTo?: number// 43015
  UnderlyingReturnRateValuationStartDateOffsetPeriod?: number// 43016
  UnderlyingReturnRateValuationStartDateOffsetUnit?: string// 43017
  UnderlyingReturnRateValuationStartDateOffsetDayType?: number// 43018
  UnderlyingReturnRateValuationStartDateAdjusted?: Date// 43019
  UnderlyingReturnRateValuationEndDateUnadjusted?: Date// 43020
  UnderlyingReturnRateValuationEndDateRelativeTo?: number// 43021
  UnderlyingReturnRateValuationEndDateOffsetPeriod?: number// 43022
  UnderlyingReturnRateValuationEndDateOffsetUnit?: string// 43023
  UnderlyingReturnRateValuationEndDateOffsetDayType?: number// 43024
  UnderlyingReturnRateValuationEndDateAdjusted?: Date// 43025
  UnderlyingReturnRateValuationFrequencyPeriod?: number// 43026
  UnderlyingReturnRateValuationFrequencyUnit?: string// 43027
  UnderlyingReturnRateValuationFrequencyRollConvention?: string// 43028
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  ReturnRateValuationDateGrp?: IReturnRateValuationDateGrp[]
  ReturnRateValuationDateBusinessCenterGrp?: IReturnRateValuationDateBusinessCenterGrp[]
}
