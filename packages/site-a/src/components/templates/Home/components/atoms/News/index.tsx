import { css } from "@panda/css"

import { NewsItem } from "./components/atoms/NewsItem"

import type { FC } from "react"

type Props = {
  newsItems: {
    id: string
    content: string
  }[]
}

export const News: FC<Props> = (props) => {
  const { newsItems } = props

  return (
    <ul className={rootStyle}>
      {newsItems.map((newsItem) => {
        const { id, content } = newsItem

        return <NewsItem key={id}>{content}</NewsItem>
      })}
    </ul>
  )
}

const rootStyle = css({
  border: "1px solid #aaf",
  padding: "10px",
})
