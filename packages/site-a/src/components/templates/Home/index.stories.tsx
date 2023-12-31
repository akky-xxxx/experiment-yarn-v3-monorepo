import { userEvent, within } from "@storybook/testing-library"
import { rest } from "msw"

import { Home } from "./index"
import { AvailableResponse } from "./spec/AvailableResponse"
import { PendingResponse } from "./spec/PendingResponse"
import { SoldResponse } from "./spec/SoldResponse"

import type { Meta, StoryObj } from "@storybook/react"
import type { ComponentProps } from "react"

type Props = ComponentProps<typeof Home>

// TODO: host を環境変数・定数管理する
const PetStoreEndpoint = "https://petstore3.swagger.io/api/v3/pet/findByStatus"

const meta: Meta<Props> = {
  component: Home,
  parameters: {
    msw: {
      handlers: [
        rest.get(PetStoreEndpoint, (req, res, context) => {
          const requestedStatus = req.url.searchParams.get("status")

          if (requestedStatus === "available")
            return res(context.json(AvailableResponse))

          if (requestedStatus === "pending")
            return res(context.json(PendingResponse))

          return res(context.json(SoldResponse))
        }),
      ],
    },
  },
}

export default meta

export const Default: StoryObj<Props> = {}

export const DisplaySearchResult: StoryObj<Props> = {
  play: async (context) => {
    const canvas = within(context.canvasElement)
    await userEvent.click(canvas.getByLabelText("sold"), { delay: 100 })
    await userEvent.click(canvas.getByText("Search"), { delay: 100 })
  },
}
