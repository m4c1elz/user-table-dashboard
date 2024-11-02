import { useQuery } from "@tanstack/react-query"
import { getUsers } from "@/mock-api/get-users"
import { useSearchParams } from "react-router-dom"
import { DashboardContent } from "./_content"
import { DashboardLoading } from "./_loading"

export default function Dashboard() {
    const [searchParams] = useSearchParams()
    const limit = searchParams.get("limit")
        ? Number(searchParams.get("limit"))
        : 15

    const search = searchParams.get("search") ?? undefined
    const page = Number(searchParams.get("page") ?? 1)

    const { data, isPending } = useQuery({
        queryKey: ["get-users", { search, limit, page }],
        queryFn: () => getUsers({ limit, search, page }),
    })

    if (isPending) return <DashboardLoading />
    if (data) {
        return <DashboardContent users={data.result} maxPages={data.maxPages} />
    }
}
