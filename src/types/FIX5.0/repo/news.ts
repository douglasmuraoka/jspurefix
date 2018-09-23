import { IStandardHeader } from './set/standard_header'
import { IRoutingGrp } from './set/routing_grp'
import { IInstrmtGrp } from './set/instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILinesOfTextGrp } from './set/lines_of_text_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The news message is a general free format message between    *
* the broker and institution. The message contains flags to    *
* identify the news item's urgency and to allow sorting by     *
* subject company (symbol). The News message can be originated *
* at either the broker or institution side, or exchanges and   *
* other marketplace venues.                                    *
****************************************************************
*/
export interface INews {
  StandardHeader: IStandardHeader
  OrigTime?: Date// 42
  Urgency?: string// 61
  Headline: string// 148
  EncodedHeadlineLen?: number// 358
  EncodedHeadline?: Buffer// 359
  RoutingGrp?: IRoutingGrp[]
  InstrmtGrp?: IInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  LinesOfTextGrp: ILinesOfTextGrp[]
  URLLink?: string// 149
  RawDataLength?: number// 95
  RawData?: Buffer// 96
  StandardTrailer: IStandardTrailer
}
