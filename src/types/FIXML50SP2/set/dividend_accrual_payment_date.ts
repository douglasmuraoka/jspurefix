import { IDividendAccrualPaymentDateBusinessCenterGrp } from './dividend_accrual_payment_date_business_center_grp'

export interface IDividendAccrualPaymentDate {
  UnderlyingSettlMethodElectionDateRelativeTo?: number// 43078
  UnderlyingSettlMethodElectionDateOffsetPeriod?: number// 43079
  UnderlyingSettlMethodElectionDateOffsetUnit?: string// 43080
  UnderlyingSettlMethodElectionDateOffsetDayType?: number// 43081
  UnderlyingSettlMethodElectionDateUnadjusted?: Date// 43076
  UnderlyingSettlMethodElectionDateBusinessDayConvention?: number// 43077
  UnderlyingSettlMethodElectionDateAdjusted?: Date// 43082
  DividendAccrualPaymentDateBusinessCenterGrp?: IDividendAccrualPaymentDateBusinessCenterGrp[]
}
