import { Outlet } from "react-router-dom"
import { DashboardFilters } from "./_partials/filters"

export default function DashboardLayout() {
    return (
        <div className="space-y-6">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <DashboardFilters />
            <Outlet />
        </div>
    )
}
