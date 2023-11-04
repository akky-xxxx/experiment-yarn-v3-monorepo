import React from "react"

import { css } from "@panda/css"

import type { FC } from "react"

type User = {
  email: string
  firstname: string
  lastname: string
}

type Props = {
  user: User | null
}

export const View: FC<Props> = (props) => {
  const { user } = props

  return (
    <div className={rootClass}>
      <div>first name: {user?.firstname}</div>
      <div>last name: {user?.lastname}</div>
      <div>email: {user?.email}</div>
    </div>
  )
}

const rootClass = css({
  border: "1px solid #000",
  display: "inline-block",
})
