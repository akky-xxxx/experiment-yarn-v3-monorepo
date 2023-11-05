import type { components } from "../../../libs/types/petStore"
import type { FC } from "react"

type Props = {
  list: readonly components["schemas"]["Pet"][]
}

export const View: FC<Props> = (props) => {
  const { list } = props

  if (!list.length) return null

  return (
    <ul>
      {list.map((record) => {
        const { id, name } = record

        return <li key={id}>{name}</li>
      })}
    </ul>
  )
}
