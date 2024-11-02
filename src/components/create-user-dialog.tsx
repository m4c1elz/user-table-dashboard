import { Label } from "./ui/label"
import {
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addUser } from "@/mock-api/add-user"

type CreateUserRequest = {
    nome: string
    quantia: string
    idade: number
}

interface CreateUserDialogProps {
    setOpenFn: (open: boolean) => void
}

export function CreateUserDialog({ setOpenFn }: CreateUserDialogProps) {
    const { handleSubmit, register } = useForm<CreateUserRequest>()
    const queryClient = useQueryClient()

    const { mutateAsync: addUserFn, isPending } = useMutation({
        mutationFn: (user: CreateUserRequest) => addUser(user),
        onSuccess: () => {
            setOpenFn(false)
            queryClient.invalidateQueries({
                queryKey: ["get-users"],
            })
        },
    })

    const onSubmit = (data: CreateUserRequest) => addUserFn(data)

    return (
        <>
            <DialogHeader>
                <DialogTitle>Adicionar usuário</DialogTitle>
                <DialogDescription>Crie um usuário novo.</DialogDescription>
            </DialogHeader>
            <form
                className="space-y-4"
                id="add-user-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="space-y-2">
                    <Label>Nome</Label>
                    <Input
                        type="text"
                        placeholder="Fulano Beltrano"
                        {...register("nome")}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Quantia</Label>
                    <Input
                        type="number"
                        placeholder="800"
                        {...register("quantia")}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Idade</Label>
                    <Input
                        type="number"
                        placeholder="18"
                        {...register("idade")}
                    />
                </div>
            </form>
            <DialogFooter>
                <Button type="submit" form="add-user-form" disabled={isPending}>
                    {isPending ? "Enviando..." : "Enviar"}
                </Button>
            </DialogFooter>
        </>
    )
}
