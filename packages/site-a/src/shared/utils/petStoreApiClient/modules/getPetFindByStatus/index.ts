import axios from "axios"

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
  const parameters = { status: query?.status }
  return axios
    .get<FindPetsByStatus["responses"][Status]["content"]["application/json"]>(
      "https://petstore3.swagger.io/api/v3/pet/findByStatus",
      { params: parameters },
    )
    .then((response) => ({
      data: response.data,
      error: null,
      isSuccess: true,
    }))
    .catch((error: unknown) => ({
      error,
      isSuccess: false,
    }))
}
