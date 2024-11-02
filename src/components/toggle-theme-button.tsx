import { useTheme } from "@/providers/theme-provider"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"

export function ToggleThemeButton() {
    const { theme, setTheme } = useTheme()

    function handleThemeChange() {
        theme == "dark" ? setTheme("light") : setTheme("dark")
    }

    return (
        <Button className="p-2" onClick={handleThemeChange}>
            {theme == "dark" ? <Sun /> : <Moon />}
        </Button>
    )
}
