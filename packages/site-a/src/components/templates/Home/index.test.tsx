import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"

import * as stories from "./index.stories"
import { sleep } from "../../../shared/utils/sleep"

const { Default, DisplaySearchResult } = composeStories(stories)

describe("Default", () => {
  it("レンダリング時は SearchResult が表示されていない", () => {
    const renderResult = render(<Default />)
    const formElement = renderResult.getByRole("group")
    expect(formElement.closest("form")?.nextElementSibling).toBeFalsy()
  })

  it("Status の sold をクリックし、 Search をクリックするとリストが表示される", async () => {
    const renderResult = render(<DisplaySearchResult />)
    await DisplaySearchResult.play({ canvasElement: renderResult.container })
    await sleep(1000)
    const formElement = renderResult.getByRole("group")
    expect(formElement.closest("form")?.nextElementSibling?.nodeName).toBe("UL")
  })
})
