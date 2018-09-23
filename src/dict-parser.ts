import * as path from 'path'
import { AsciiParser } from './buffer/ascii/ascii-parser'
import { AsciiView } from './buffer/ascii/ascii-view'
import { ILooseObject } from './collections/collection'
import { FixDefinitions } from './dictionary/definition/fix-definitions'
import { AsciiMsgTransmitter } from './transport/ascii/ascii-msg-transmitter'
import { MessageGenerator } from './util/message-generator'
import { Ascii } from './buffer/ascii'
import { MsgParser } from './buffer/msg-parser'
import { FiXmlParser } from './buffer/fixml/fixml-parser'
import { MsgView } from './buffer/msg-view'
import { JsonHelper } from './util/json-helper'
import { FixmlEncoder } from './buffer/fixml/fixml-encoder'
import { ReadStream } from 'fs'
import { MsgPayload } from './transport/msg-payload'
import { ISessionDescription } from './transport/session-description'
import { ICompilerSettings } from './dictionary/compiler/compiler-settings'
import { EnumCompiler } from './dictionary/compiler/enum-compiler'
import { MsgType } from './types/enum/msg_type'
import { ElasticBuffer } from './buffer/elastic-buffer'
import { JsFixConfig } from './config/js-fix-config'
import { StringDuplex } from './transport/duplex/string-duplex'
import { getDefinitions } from './util/dictionary-definitions'
import { getWords } from './util/buffer-helper'
import { MsgCompiler } from './dictionary/compiler/msg-compiler'

async function testEncodeDecode (): Promise<any> {
  const msgType: string = 'W'
  const root: string = path.join(__dirname, '../')
  const sessionDescription: ISessionDescription = require('../data/session/test-initiator.json')
  const definitions = await getDefinitions(path.join(root, sessionDescription.application.dictionary))
  const jh: JsonHelper = new JsonHelper(definitions)
  const msg: ILooseObject = jh.fromJson(path.join(root, 'data/examples/FIX.4.4/md-data-snapshot/object.json'), msgType)
  const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
  const session: AsciiMsgTransmitter = new AsciiMsgTransmitter(config)
  const payload: MsgPayload = new MsgPayload(msgType, msg)
  const encoderStream = session.encodeStream
  encoderStream.write(payload)
  session.encodeMessage(msgType, msg)
  const parser: MsgParser = new AsciiParser(definitions, encoderStream, Ascii.Pipe)
  const fix: string = session.buffer.toString()
  console.log(fix)
  return new Promise(async (resolve, reject) => {
    parser.on('msg', (msgType: string, view: AsciiView) => {
      resolve(view.toObject())
    })
    parser.on('error', (e: Error) => {
      reject(e)
    })
  })
}

async function testGenerator (): Promise<any> {
  const root: string = path.join(__dirname, '../')
  const sessionDescription: ISessionDescription = require('../data/session/test-initiator.json')
  const definitions = await getDefinitions('C:/Users/Stephen/dev/ts/jsfix/data/fix_repo/FIX.4.4/Base')
  const lipsum: string[] = await getWords(path.join(root, 'data/examples/lipsum.txt'))
  const generator: MessageGenerator = new MessageGenerator(lipsum, definitions)
  const msgType: string = MsgType.NewOrderSingle
  const example: ILooseObject = generator.generate(msgType)
  console.log(JSON.stringify(example, null, 4))
  const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
  const session: AsciiMsgTransmitter = new AsciiMsgTransmitter(config)
  session.encodeMessage(msgType, example)
  const fix: string = session.buffer.toString()
  const encoderStream = session.encodeStream
  const payload: MsgPayload = new MsgPayload(msgType, example)
  encoderStream.write(payload)
  const parser: MsgParser = new AsciiParser(definitions, encoderStream, Ascii.Pipe)
  parser.on('msg', (mt: string, view: MsgView) => {
    console.log(view.toString())
  })
  console.log(fix)
}

/*
fix.xml
Clearing System Confirms Allocation to Executing Firm.xml
Clearing System Confirms Allocation to CME Executing Firm_Cross-exchange.xml
Clearing System Confirms Completed Reversal to Executing Firm.xml
Clearing System Notifies Allocation to the Claiming Firm.xml
fix.xml
Clearing System Notifies Claiming Firm of Completed Reversal.xml
Clearing System Notifies Executing Firm of Alleged Reversal.xml
Executing Firm Un-completes Group-Average_Price.xml
Executing Firm Marks a Trade for Give-up.xml
 */
async function repository (): Promise<any> {
  const root: string = path.join(__dirname, '../')
  const definitions: FixDefinitions = await getDefinitions('data/fix_repo/fixmlschema_FIX.5.0SP2_EP228')
  // const file: string = path.join(root,'data/examples/FIXML/cme/alloc/Claiming Firm Requests Sub-allocation with Allocation Instructions/')
  // const file: string = path.join(root,'data/examples/FIXML/cme/md/settle')
  // const file: string = path.join(root,'data/examples/FIXML/cme/tc/Delivery Fixed Commodity Swap/')
  const file: string = path.join(root,'data/examples/FIXML/cme/md/futures')
  const jh: JsonHelper = new JsonHelper(definitions)
  const fs: any = require('fs')
  let readStream: ReadStream = fs.createReadStream(`${file}/fix.xml`)
  const sessionDescription: ISessionDescription = require('../data/session/test-initiator.json')
  const config = new JsFixConfig(null, definitions, sessionDescription, Ascii.Pipe)
  const xmlParser: MsgParser = new FiXmlParser(config, readStream)
  xmlParser.on('batch', (msgType: string, v: MsgView) => {
    console.log(`received message ${msgType}`)
    const o: ILooseObject = v.toObject()
    console.log(JSON.stringify(o, null, 4))
    const fe = new FixmlEncoder(new ElasticBuffer(), definitions)
    fe.encode(o, msgType)
    const fixml: string = fe.buffer.toString()
    console.log(fixml)
  })
}

async function runTest (): Promise<any> {
  return new Promise<any>(async (accept, reject) => {
    try {
      const res: any = await testGenerator()
      accept(res)
    } catch (e) {
      console.log(e.message)
      reject(e)
    }
  })
}

function streamExample () {
  const fs: any = require('fs')
  const root: string = path.join(__dirname, '../')
  const file: string = path.join(root,'data/examples/FIXML/cme/Claiming Firm Requests Sub-allocation with Allocation Instructions/')
  let readStream: ReadStream = fs.createReadStream(`${file}/fix.xml`)
  const Writable = require('stream').Writable
  const receiver = new Writable({
    write: (data: Buffer, _: any, done: Function) => {
      console.log('receive ' + data)
      done()
    }
  })
  readStream.pipe(receiver).on('finish', () => {
    console.log('done')
  })
}

async function compileDefinitions (definitionPath: string, outputPath: string) {
  const definitions = await getDefinitions(definitionPath)
  const compilerSettings: ICompilerSettings = require('../data/compiler.json')
  compilerSettings.output = outputPath
  const msgCompiler: MsgCompiler = new MsgCompiler(definitions, compilerSettings)
  await msgCompiler.generate()
  const enumCompiler: EnumCompiler = new EnumCompiler(definitions, compilerSettings)
  const writeFile = path.join(compilerSettings.output, './enum/all-enum.ts')
  await enumCompiler.generate(writeFile)
}

async function compiler () {
  // 'C:/Users/Stephen/dev/js/jsfix/data/fix_repo/fixmlschema_FIX.5.0SP2_EP228'
  // await compileDefinitions('data/fix_repo/FIX.4.4/Base', 'C:/Users/Stephen/dev/ts/jsfix/src/types/FIX4.4/repo')
  // await compileDefinitions('data/FIX44.xml', 'C:/Users/Stephen/dev/ts/jsfix/src/types/FIX4.4/quickfix')
  await compileDefinitions('data/fix_repo/fixmlschema_FIX.5.0SP2_EP228', 'C:/Users/Stephen/dev/ts/jsfix/src/types/FIXML50SP2')
}

async function generateMessage () {
  await testGenerator()
}

async function decode (): Promise<any> {
  const definitions: FixDefinitions = await getDefinitions('data/fix_repo/FIX.4.4/Base')
  const txt = '8=FIX4.4|9=0001022|35=AE|49=init-comp|56=accept-comp|34=1|57=fix|52=20180909-14:22:09.841|571=Lorem|487=23513|856=1|568=ipsum|828=6|855=23619|830=dolor|150=F|748=17140|912=N|325=N|263=1|881=sit|818=amet,|820=consectetur|880=adipiscing|17=elit.|39=3|527=Nunc|570=N|423=8|55=odio|65=orci,|48=blandit|22=3|460=4|461=vel|167=MPT|762=semper|200=sed,|541=20180909|201=0|224=20180909|225=20180909|227=-8796.1|228=-23.537|255=bibendum|543=cursus|470=lectus.|471=Aenean|472=vel|240=20180909|202=891.7|947=-2928.1|231=5.7237|223=-1894.1|106=diam|348=9|349=6YYz0zu5s|350=8|351=TuH3tTNd|691=magna.|667=Aenean|875=99|876=et|873=20180909|874=20180909|913=viverra|914=leo,|915=20180909|916=20180909|919=0|898=0.5594|38=96682|152=19226|516=9.1251|854=0|235=PREVCLOSE|236=-2833.5|701=20180909|696=20180909|697=-6.095|698=26303|823=non|32=9253|31=2065.4|194=-73.233|30=iaculis|75=20180909|715=20180909|6=5.9279|218=0.0001953|221=neque.|222=Nullam|663=16216|699=arcu|761=lectus,|824=dignissim|63=3|64=20180909|573=0|574=M3|797=Y|852=Y|853=3|10=16|'
  const startsAt: Date = new Date()
  let i = 0
  const repeats = 10 * 1000
  const asciiParser: MsgParser = new AsciiParser(definitions, new StringDuplex(txt.repeat(repeats)).readable, Ascii.Pipe)
  asciiParser.on('msg', (msgType: string, v: MsgView) => {
    ++i
    if (i === repeats) {
      const elapsed: number = new Date().getTime() - startsAt.getTime()
      console.log(`elapsed ms ${elapsed} ${(elapsed / repeats) * 1000} micros per msg`)
    }
  })
}

// decode()
// generateMessage()
compiler()
// stronglyTyped()
// streamExample()
// testEncodeDecode()
// repository()
// testEncodeDecode();
// runTest();
// testSocket()
// testRead();
