import { IPtysSubGrp } from './ptys_sub_grp'

export interface IParties {
  BatchID?: string// 50000
  LegContractualMatrixSource?: string// 42204
  UnderlyingProvisionPartyRole?: number// 42176
  UnderlyingProtectionTermEventQualifier?: string// 42086
  PtysSubGrp?: IPtysSubGrp[]
}
