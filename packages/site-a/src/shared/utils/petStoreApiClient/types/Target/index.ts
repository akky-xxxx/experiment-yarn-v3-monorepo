export type Target = {
  parameters: {
    query?: Record<string, string>
  }
  responses: {
    /* eslint-disable @typescript-eslint/no-magic-numbers */
    200: {
      content: {
        "application/json": unknown
      }
    }
  }
}
