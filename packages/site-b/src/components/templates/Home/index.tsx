import { Button, Counter } from "@experiment-yarn-v3-monorepo/common-components"
import Image from "next/image"

import { css } from "@panda/css"

import type { FC } from "react"

const paragraphStyle = css({
  color: "blue",
})

export const Home: FC = () => (
  <main>
    <div>
      <Button>button component for site-b</Button>
    </div>

    <div>
      <Counter />
    </div>

    <p className={paragraphStyle}>demo for panda css</p>

    <div>
      <Image
        priority
        alt="Vercel Logo"
        height={24}
        src="/vercel.svg"
        width={100}
      />
    </div>
  </main>
)
