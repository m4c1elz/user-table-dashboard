import { Skeleton } from "@/components/ui/skeleton"
import { useSearchParams } from "react-router-dom"

export function DashboardLoading() {
    const [searchParams] = useSearchParams()

    const limit = Number(searchParams.get("limit") ?? 15)

    return (
        <div className="space-y-2.5">
            {Array.from({ length: limit }).map(() => {
                return <Skeleton className="h-12 w-full" />
            })}
        </div>
    )
}
