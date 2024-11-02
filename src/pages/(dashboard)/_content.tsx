import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
} from "@/components/ui/table"
import { User } from "@/mock-api/users"
import { UserList } from "./_partials/user-list"
import { Pagination } from "@/components/pagination"
import { useSearchParams } from "react-router-dom"

interface DashboardContentProps {
    users: User[]
    maxPages: number
}

export function DashboardContent({ users, maxPages }: DashboardContentProps) {
    const [searchParams] = useSearchParams()
    const page = Number(searchParams.get("page") ?? 1)

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-bold">ID</TableHead>
                        <TableHead className="font-bold">Nome</TableHead>
                        <TableHead className="font-bold">Idade</TableHead>
                        <TableHead className="font-bold">Quantia</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="gap-4">
                    <UserList users={users} />
                </TableBody>
            </Table>
            <Pagination page={page} maxPages={maxPages} />
        </>
    )
}
