import { getPetFindByStatus } from "./modules/getPetFindByStatus"

import type { PetStoreApiClient } from "./types/PetStoreApiClient"

export const petStoreApiClient = {
  "/pet/findByStatus": {
    get: getPetFindByStatus,
  },
} satisfies PetStoreApiClient
