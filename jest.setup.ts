import { TextEncoder, TextDecoder } from 'util'
import { ReadableStream, WritableStream, TransformStream } from 'stream/web'
import { MessageChannel, MessagePort } from 'worker_threads'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder as typeof global.TextDecoder
global.ReadableStream = ReadableStream as any
global.WritableStream = WritableStream as any
global.TransformStream = TransformStream as any
global.MessageChannel = MessageChannel as any
global.MessagePort = MessagePort as any

const undici = require('undici')
if (typeof global.Request === 'undefined') {
  global.Request = undici.Request
}
if (typeof global.Response === 'undefined') {
  global.Response = undici.Response
}
if (typeof global.Headers === 'undefined') {
  global.Headers = undici.Headers
}

