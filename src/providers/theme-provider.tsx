import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
    setTheme: (theme: Theme) => void
    theme: Theme
}

const ThemeContext = createContext<ThemeContextType | null>(null)

interface ThemeProviderProps extends PropsWithChildren {}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const prefersLightTheme = window.matchMedia(
        "(prefers-color-scheme: light)",
    ).matches

    // theme saved in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme

    // preferred user device theme
    const preferredSchema = prefersLightTheme ? "light" : "dark"

    // if savedTheme is null, use the preferred schema
    const defaultTheme: Theme = savedTheme ?? preferredSchema

    const [theme, setTheme] = useState<Theme>(defaultTheme)

    useEffect(() => {
        const root = document.documentElement
        root.className = ""
        root.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{ setTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error(
            "Cannot use the useTheme hook outside of a ThemeProvider.",
        )
    }

    return context
}
