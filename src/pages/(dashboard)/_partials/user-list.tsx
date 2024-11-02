import { User } from "@/mock-api/users"
import { UserItem } from "./user-item"

interface UserListProps {
    users: User[]
}

export function UserList({ users }: UserListProps) {
    if (users.length > 0) {
        return users.map(user => <UserItem {...user} />)
    } else {
        return (
            <h1 className="mx-3 my-4 text-2xl font-bold">Não há usuários.</h1>
        )
    }
}
