import { normalizeString } from "@/helpers/normalize-string"
import { users } from "./users"

interface Filters {
    limit?: number
    search?: string
    page?: number
}

export async function getUsers({ limit = 15, search, page = 1 }: Filters) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    let result = users

    if (search) {
        result = result.filter(user =>
            normalizeString(user.nome).includes(search),
        )
    }

    result = result.sort((a, b) => {
        if (a.nome < b.nome) {
            return -1
        }
        if (a.nome > b.nome) {
            return 1
        }
        return 0
    })

    const maxPages = Math.floor(result.length / limit)

    if (page) {
        const offset = (page - 1) * limit
        result = result.slice(offset, offset + limit)
    } else {
        result = result.slice(0, limit)
    }

    return { result, maxPages }
}
