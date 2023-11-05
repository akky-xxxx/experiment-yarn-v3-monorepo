import { atom } from "jotai"

import type { components } from "../../libs/types/petStore"

export const petStoreAtom = atom<components["schemas"]["Pet"][]>([])
