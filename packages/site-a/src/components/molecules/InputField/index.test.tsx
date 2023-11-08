import { composeStories } from "@storybook/react"
import { render } from "@testing-library/react"

import * as stories from "./index.stories"

const { Default, Inputted } = composeStories(stories)

describe("InputField", () => {
  describe("Default", () => {
    it("label に渡した文字列が label タグで囲われていること", () => {
      const renderResult = render(<Default />)
      const targetElement = renderResult.getByText("label text：")
      expect(targetElement.closest("label")).toBeTruthy()
    })

    it("レンダリング時、 input value は空である", () => {
      const renderResult = render(<Default />)
      expect(renderResult.getByDisplayValue("")).toBeTruthy()
    })
  })

  describe("Inputted", () => {
    it("レンダリング時、 input value は空である", () => {
      const renderResult = render(<Inputted />)
      expect(renderResult.getByDisplayValue("")).toBeTruthy()
    })

    it("Inputted > 文字が入力されること", async () => {
      const renderResult = render(<Inputted />)
      await Inputted.play({ canvasElement: renderResult.container })
      expect(renderResult.getByDisplayValue("input text")).toBeTruthy()
    })
  })
})
