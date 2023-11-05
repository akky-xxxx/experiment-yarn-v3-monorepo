import { Button, Counter } from "@experiment-yarn-v3-monorepo/common-components"
import Image from "next/image"
import Link from "next/link"

import { css } from "@panda/css"

import { Search } from "../../organisms/Search"
import { SearchResult } from "../../organisms/SearchResult"

import type { FC } from "react"

const paragraphStyle = css({
  color: "red",
})

export const View: FC = () => (
  <main>
    <div>
      <Button>button component for site-a</Button>
    </div>

    <div>
      <Counter />
    </div>

    <div>
      <Search />
      <SearchResult />
    </div>

    <div>
      <Link href="/pet-store">pet store</Link>
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
