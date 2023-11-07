import { News } from "./index"

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof News>
type Story = StoryObj<Props>

const meta: Meta<Props> = {
  component: News,
}

export default meta

export const NotHasItem: Story = {
  args: {
    newsItems: [],
  },
}

export const SingleItem: Story = {
  args: {
    newsItems: [
      {
        content: "item",
        id: "1",
      },
    ],
  },
}

export const MultipleItems: Story = {
  args: {
    newsItems: [
      {
        content: "item1",
        id: "1",
      },
      {
        content: "item2",
        id: "2",
      },
      {
        content: "item3",
        id: "3",
      },
    ],
  },
}
