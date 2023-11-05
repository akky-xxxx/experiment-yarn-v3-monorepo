import type { HttpStatus } from "../../../../HttpStatus"
import type { Result } from "../Result"
import type { Target } from "../Target"

export type GetDeleteFunction<T extends Target> = (
  methodArgument: Pick<T, "parameters">,
) => Promise<
  Result<T["responses"][typeof HttpStatus.OK]["content"]["application/json"]>
>
