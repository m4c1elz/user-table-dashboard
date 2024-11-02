import { v4 } from "uuid"
import { faker } from "@faker-js/faker"

export const users = Array.from({ length: 500 }).map(() => ({
    id: v4(),
    nome: faker.person.fullName(),
    idade: faker.number.int({
        min: 18,
        max: 56,
    }),
    quantia: `$${faker.number.int({ min: 200, max: 800 })}`,
}))

export type User = (typeof users)[0]
