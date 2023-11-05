// global state 確認用の雑な作り

import Link from "next/link"

import { SearchResult } from "../../components/organisms/SearchResult"

import type { FC } from "react"


const PetStore: FC = () => (
  <div>
    <SearchResult />
    <div>
      <Link href="/">Home</Link>
    </div>
  </div>
)

export default PetStore
