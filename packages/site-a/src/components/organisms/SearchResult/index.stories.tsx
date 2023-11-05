import { SearchResult } from "./index"

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof SearchResult>

const meta: Meta<Props> = {
  component: SearchResult,
}

export default meta

export const Default: StoryObj<Props> = {}
