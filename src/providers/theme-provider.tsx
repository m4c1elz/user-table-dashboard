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

    const defaultTheme: Theme = prefersLightTheme ? "light" : "dark"
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    useEffect(() => {
        const root = document.documentElement
        root.className = ""
        root.classList.add(theme)
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
