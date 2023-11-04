"use client"

import { useAtom } from "jotai"
import React, { useEffect } from "react"

import { View } from "./View"
import { userAtom } from "../../../globalStates/userAtom"

import type { FC } from "react"

const awaitTime = 300

const sleep = async () =>
  new Promise((resolve) => {
    const timer = setInterval(() => {
      clearInterval(timer)
      resolve({
        email: "jacobson.hardy@example.com",
        firstname: "Soledad",
        lastname: "Lakin",
      })
    }, awaitTime)
  })

export const User: FC = () => {
  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    // TODO: api mock call に変える（useSWR? api client?）
    //   storybook で msw 使う形にもする
    const fetcher = async () => {
      const result = await sleep()
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setUser(result)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetcher()
  }, [setUser])

  return <View user={user} />
}
