import { useSearchParams } from "react-router-dom"
import {
    Pagination as PaginationRoot,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination"

interface PaginationProps {
    page: number
    maxPages: number
}

export function Pagination({ page, maxPages }: PaginationProps) {
    const isFirstPage = page - 1 == 0
    const isLastPage = page + 1 > maxPages

    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <PaginationRoot>
            <PaginationContent>
                {!isFirstPage && (
                    <>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => {
                                    searchParams.set("page", String(page - 1))
                                    setSearchParams(searchParams)
                                }}
                            />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink>{page - 1}</PaginationLink>
                        </PaginationItem>
                    </>
                )}
                <PaginationItem>
                    <PaginationLink isActive>{page}</PaginationLink>
                </PaginationItem>
                {!isLastPage && (
                    <>
                        <PaginationItem>
                            <PaginationLink>{page + 1}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext
                                onClick={() => {
                                    searchParams.set("page", String(page + 1))
                                    setSearchParams(searchParams)
                                }}
                            />
                        </PaginationItem>
                    </>
                )}
            </PaginationContent>
        </PaginationRoot>
    )
}
