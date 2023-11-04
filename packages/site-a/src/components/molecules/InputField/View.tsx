import type { ChangeEventHandler, FC } from "react"

type Props = {
  handleChangeValue: ChangeEventHandler<HTMLInputElement>
  label: string
  value: string
}

export const View: FC<Props> = (props) => {
  const { label, handleChangeValue, value } = props

  return (
    <fieldset>
      <label>
        <span>{label}</span>
        <input type="text" value={value} onChange={handleChangeValue} />
      </label>
    </fieldset>
  )
}
