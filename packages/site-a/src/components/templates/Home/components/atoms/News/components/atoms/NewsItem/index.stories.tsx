import { NewsItem } from "./index"

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof NewsItem>
type Story = StoryObj<Props>

const meta: Meta<Props> = {
  component: NewsItem,
}

export default meta

export const SingleItem: Story = {
  render: () => (
    <ul>
      <NewsItem>item</NewsItem>
    </ul>
  ),
}

export const MultipleItems: Story = {
  render: () => (
    <ul>
      <NewsItem>item1</NewsItem>
      <NewsItem>item2</NewsItem>
      <NewsItem>item3</NewsItem>
    </ul>
  ),
}
