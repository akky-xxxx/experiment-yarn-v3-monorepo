import type { operations } from "../../../../../libs/types/petStore"
import type { HttpStatus } from "../../../../HttpStatus"
import type { GetDeleteFunction } from "../../types/GetDeleteFunction"

type FindPetsByStatus = operations["findPetsByStatus"]
type Status = typeof HttpStatus.OK

export const getPetFindByStatus: GetDeleteFunction<FindPetsByStatus> = async (
  getArguments,
) => {
  const {
    parameters: { query },
  } = getArguments

  return fetch(
    `https://petstore3.swagger.io/api/v3/pet/findByStatus?status=${query?.status}`,
  )
    .then((res) => res.json())
    .then(
      (
        result: FindPetsByStatus["responses"][Status]["content"]["application/json"],
      ) => ({
        data: result,
        error: null,
        isSuccess: true,
      }),
    )
    .catch((error: unknown) => ({
      error,
      isSuccess: false,
    }))
}
