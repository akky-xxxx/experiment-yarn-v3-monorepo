import { Button } from "@experiment-yarn-v3-monorepo/common-components"

import { css } from "@panda/css"

import type { PetStatus } from "../../../shared/types/PetStatus"
import type { ChangeEventHandler, FC, FormEventHandler } from "react"

type Props = {
  handleChangeStatus: ChangeEventHandler<HTMLInputElement>
  handleSubmitSearch: FormEventHandler<HTMLFormElement>
  selectedStatus: PetStatus | null
}

const Status = ["available", "pending", "sold"] satisfies [
  PetStatus,
  PetStatus,
  PetStatus,
]

export const View: FC<Props> = (props) => {
  const { handleChangeStatus, handleSubmitSearch, selectedStatus } = props

  return (
    <form onSubmit={handleSubmitSearch}>
      <fieldset>
        <legend>Status</legend>
        <ul className={ulStyle}>
          {Status.map((status) => (
            <li key={status}>
              <label>
                <input
                  checked={status === selectedStatus}
                  name="petStatus"
                  type="radio"
                  value={status}
                  onChange={handleChangeStatus}
                />
                <span>{status}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
      <Button type="submit">Search</Button>
    </form>
  )
}

const ulStyle = css({
  columnGap: "10px",
  display: "flex",
})
