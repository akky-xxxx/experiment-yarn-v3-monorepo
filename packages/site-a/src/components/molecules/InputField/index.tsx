import { View } from "./View"
import { useInputField } from "./modules/useInputField"

import type { FC } from "react"

type Props = {
  label: string
}

export const InputField: FC<Props> = (props) => {
  const { label } = props
  const useInputFieldReturn = useInputField()
  const dependencies = {
    ...useInputFieldReturn,
    label,
  }

  return <View {...dependencies} />
}
