"use client"

import { useAtomValue } from "jotai"

import { View } from "./View"
import { petStoreAtom } from "../../../globalStates/petStoreAtom"

import type { FC } from "react"

export const SearchResult: FC = () => {
  const petStore = useAtomValue(petStoreAtom)

  return <View list={petStore} />
}
