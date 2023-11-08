import { act, renderHook } from "@testing-library/react"

import { useInputField } from "./index"

import type { RenderHookResult } from "@testing-library/react"
import type { ChangeEvent } from "react"

describe("useInputField", () => {
  let renderHookResult: RenderHookResult<
    ReturnType<typeof useInputField>,
    undefined
  >

  beforeEach(() => {
    renderHookResult = renderHook(() => useInputField())
  })

  it("value の初期値は空文字", () => {
    expect(renderHookResult.result.current.value).toBe("")
  })

  it("handleChangeValue に event.currentTarget.value = text で実行すると value の値は text になる", () => {
    act(() => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      const event = {
        currentTarget: {
          value: "text",
        },
      } as ChangeEvent<HTMLInputElement>
      renderHookResult.result.current.handleChangeValue(event)
    })
    expect(renderHookResult.result.current.value).toBe("text")
  })
})
