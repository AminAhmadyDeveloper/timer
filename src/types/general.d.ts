declare global {
  export type MaybePromise<TType> = Promise<TType> | TType;
}

export {};
