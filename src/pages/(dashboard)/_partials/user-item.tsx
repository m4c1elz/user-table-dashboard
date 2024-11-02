import { TableCell, TableRow } from "@/components/ui/table"
import { User } from "@/mock-api/users"

interface UserItemProps extends User {}

export function UserItem({ id, nome, quantia, idade }: UserItemProps) {
    return (
        <TableRow>
            <TableCell className="py-3.5 text-foreground/50">{id}</TableCell>
            <TableCell className="py-3.5">{nome}</TableCell>
            <TableCell className="py-3.5">{idade}</TableCell>
            <TableCell className="py-3.5">{quantia}</TableCell>
        </TableRow>
    )
}
