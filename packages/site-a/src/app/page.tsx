import { Button, Counter } from "@experiment-yarn-v3-monorepo/common-components"
import Image from 'next/image'

import { css } from "@panda/css"

const paragraphStyle = css({
  color: "red"
})

export default function Home() {
  return (
    <main>
      <div>
        <Button>button component for site-a</Button>
      </div>

      <div>
        <Counter />
      </div>

      <p className={paragraphStyle}>demo for panda css</p>

      <div>
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          width={100}
          height={24}
          priority
        />
      </div>
    </main>
  )
}
