import { SimpleFieldDefinition } from './simple-field-definition'
import { Dictionary } from '../../collections/dictionary'

export class CategorySimpleSet {
  public readonly simple: Dictionary<SimpleFieldDefinition> = new Dictionary<SimpleFieldDefinition>()
  constructor (public readonly category: string) {
  }
}
