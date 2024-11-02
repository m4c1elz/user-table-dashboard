import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { CreateUserDialog } from "@/components/create-user-dialog"
import { useFilters } from "./hooks"
import { ToggleThemeButton } from "@/components/toggle-theme-button"

export function DashboardFilters() {
    const { limit, search, setLimit, setSearch } = useFilters()
    const [open, setOpen] = useState(false)

    return (
        <section className="flex w-full items-end justify-between">
            <div className="flex items-center gap-2">
                <div className="space-y-2.5">
                    <Label>Pesquisar</Label>
                    <Input
                        type="text"
                        className="w-96"
                        placeholder="Pesquise um usuário."
                        onChange={({ target: { value } }) => setSearch(value)}
                        defaultValue={search ?? ""}
                    />
                </div>
                <div className="space-y-2.5">
                    <Label>Limite</Label>
                    <Input
                        type="number"
                        defaultValue={limit}
                        onChange={({ target: { value } }) =>
                            setLimit(Number(value))
                        }
                        placeholder="15"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                        <Button>Adicionar Usuário</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <CreateUserDialog setOpenFn={setOpen} />
                    </DialogContent>
                </Dialog>
                <ToggleThemeButton />
            </div>
        </section>
    )
}
