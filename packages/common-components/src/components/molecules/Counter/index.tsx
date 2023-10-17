"use client"

import { useState } from "react"
import { css } from "@panda/css"

import { Button } from "../../atoms"

import type { FC } from "react"

export const Counter: FC = () => {
  const [count, setCount] = useState(0)
  const handleClickDecrement = () => setCount((current) => current - 1)
  const handleClickIncrement = () => setCount((current) => current + 1)

  return (
    <div className={rootStyle}>
      <Button type="button" onClick={handleClickDecrement}>-</Button>
      <div className={countStyle}>{count}</div>
      <Button type="button" onClick={handleClickIncrement}>+</Button>
    </div>
  )
}

const rootStyle = css({
  alignItems: "center",
  columnGap: "10px",
  display: "flex",
})

const countStyle = css({
  flexBasis: "0",
  minWidth: "100px",
  textAlign: "center",
})
