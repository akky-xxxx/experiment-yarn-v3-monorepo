import { useState } from "react"

import type { ChangeEventHandler } from "react"

export const useInputField = () => {
  const [value, setValue] = useState("")
  const handleChangeValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.value)
  }

  return { handleChangeValue, value }
}
