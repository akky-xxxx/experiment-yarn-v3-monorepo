"use client"

import { View } from "./View"
import { useSearch } from "./modules/useSearch"

import type { FC } from "react"

export const Search: FC = () => {
  const dependencies = useSearch()

  return <View {...dependencies} />
}
