import { css } from "@panda/css"

import type { FcWithChildren } from "../../../types/FcWithChildren"
import type { PropsWithoutClassName } from "../../../types/PropsWithoutClassName"
import type { ButtonHTMLAttributes } from "react"

const buttonStyle = css({
  backgroundColor: "#00f",
  border: "1px solid #00f",
  color: "#fff",
  cursor: "pointer",
  padding: "5px",
  transition: "background-color ease-in 0.3s, border ease-in 0.3s",

  "&:hover": {
    backgroundColor: "#99f",
    borderColor: "#99f",
  },
})

type Props = PropsWithoutClassName<ButtonHTMLAttributes<HTMLButtonElement>>

export const Button: FcWithChildren<Props> = (props) => {
  const { children, ...restProps } = props

  return <button type="button" {...restProps} className={buttonStyle}>{children}</button>
}
