import { User, users } from "./users"
import { v4 as generateUUID } from "uuid"

interface UserDTO extends Omit<User, "id"> {}

export async function addUser({ nome, quantia, idade }: UserDTO) {
    await new Promise(resolve => setTimeout(resolve, 2000))

    users.push({
        id: generateUUID(),
        nome,
        quantia: "$" + quantia,
        idade,
    })
}
