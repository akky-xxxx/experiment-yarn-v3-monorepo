type SuccessResult<D = unknown> = {
  data: D
  error: null
  isSuccess: true
}
type FailureResult = {
  error: unknown
  isSuccess: false
}
export type Result<D = unknown> = FailureResult | SuccessResult<D>
