import { useSetAtom } from "jotai"
import { useState } from "react"

import { petStoreAtom } from "../../../../../globalStates/petStoreAtom"
import { petStoreApiClient } from "../../../../../shared/utils/petStoreApiClient"

import type { PetStatus } from "../../../../../shared/types/PetStatus"
import type { View } from "../../View"
import type {
  ChangeEventHandler,
  ComponentProps,
  FormEventHandler,
} from "react"

const petStatus = new Set<string>([
  "available",
  "pending",
  "sold",
] satisfies PetStatus[])
const isPetStatus = (value: string): value is PetStatus => petStatus.has(value)

export const useSearch = () => {
  const setPetStore = useSetAtom(petStoreAtom)
  const [selectedStatus, setStatus] = useState<PetStatus | null>(null)
  const handleChangeStatus: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      currentTarget: { value },
    } = event
    if (!isPetStatus(value)) return
    setStatus(value)
  }
  const handleSubmitSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (!selectedStatus) return

    // TODO: useSWR に置き換える？
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    petStoreApiClient["/pet/findByStatus"]
      .get({
        parameters: {
          query: { status: selectedStatus },
        },
      })
      .then((result) => {
        if (!result.isSuccess) return
        setPetStore(result.data)
      })
  }

  return {
    handleChangeStatus,
    handleSubmitSearch,
    selectedStatus,
  } satisfies ComponentProps<typeof View>
}
