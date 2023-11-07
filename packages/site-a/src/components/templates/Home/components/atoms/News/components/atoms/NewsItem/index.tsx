import { css } from "@panda/css"

import type { FcWithChildren } from "@experiment-yarn-v3-monorepo/common-types"

export const NewsItem: FcWithChildren<unknown> = (props) => {
  const { children } = props

  return <li className={rootStyle}>{children}</li>
}

const rootStyle = css({
  "& + &": {
    borderTop: "1px solid #999",
  },
})
