import { atom } from "jotai"

type UserAtom = {
  firstname: string
  lastname: string
  email: string
}

export const userAtom = atom<UserAtom | null>(null)
