import { useDebounce } from "@/hooks/use-debounce"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export function useFilters() {
    const [searchParams, setSearchParams] = useSearchParams()

    const [search, setSearch] = useState(searchParams.get("search") ?? "")
    const [limit, setLimit] = useState(Number(searchParams.get("limit") ?? 15))

    const debouncedSearch = useDebounce(search, 300)
    const debouncedLimit = useDebounce(limit, 300)

    useEffect(() => {
        if (search.length > 0) {
            searchParams.set("search", debouncedSearch)
        } else {
            searchParams.delete("search")
        }
        searchParams.set("limit", String(debouncedLimit))
        setSearchParams(searchParams)
    }, [debouncedSearch, debouncedLimit])

    return {
        search,
        limit,
        setSearch,
        setLimit,
    }
}
