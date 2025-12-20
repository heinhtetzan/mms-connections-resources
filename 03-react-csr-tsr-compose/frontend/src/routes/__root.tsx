import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Route = createRootRoute({
    component: () => (
        <div className="min-h-screen flex flex-col font-sans text-gray-900">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <TanStackRouterDevtools />
        </div>
    ),
})
