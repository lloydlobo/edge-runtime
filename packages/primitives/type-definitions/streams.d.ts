/**
 * The type of `ReadableStreamBYOBReader` is not included in Typescript so we
 * are declaring it inline to not have to worry about bundling.
 */
declare class ReadableStreamBYOBReader {
  constructor(stream: ReadableStream<Uint8Array>)
  get closed(): Promise<undefined>
  cancel(reason?: any): Promise<void>
  read<T extends ArrayBufferView>(
    view: T
  ): Promise<{ done: false; value: T } | { done: true; value: T | undefined }>
  releaseLock(): void
}

declare const ReadableStreamConstructor: typeof ReadableStream
declare const ReadableStreamBYOBReaderConstructor: typeof ReadableStreamBYOBReader
declare const ReadableStreamDefaultReaderConstructor: typeof ReadableStreamDefaultReader
declare const TextDecoderStreamConstructor: typeof TextDecoderStream
declare const TextEncoderStreamConstructor: typeof TextEncoderStream
declare const TransformStreamConstructor: typeof TransformStream
declare const WritableStreamConstructor: typeof WritableStream
declare const WritableStreamDefaultWriterConstructor: typeof WritableStreamDefaultWriter

export { ReadableStreamConstructor as ReadableStream }
export { ReadableStreamBYOBReaderConstructor as ReadableStreamBYOBReader }
export { ReadableStreamDefaultReaderConstructor as ReadableStreamDefaultReader }
export { TextDecoderStreamConstructor as TextDecoderStream }
export { TextEncoderStreamConstructor as TextEncoderStream }
export { TransformStreamConstructor as TransformStream }
export { WritableStreamConstructor as WritableStream }
export { WritableStreamDefaultWriterConstructor as WritableStreamDefaultWriter }
