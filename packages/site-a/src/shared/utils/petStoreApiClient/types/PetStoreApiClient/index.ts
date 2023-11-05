import type { paths } from "../../../../../libs/types/petStore"
import type { Result } from "../Result"

export type PetStoreApiClient = {
  [Endpoint in keyof paths]: {
    // メソッド定義側で厳密に定義する
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [Method in keyof paths[Endpoint]]: (...argument: any[]) => Promise<Result>
  }
}
