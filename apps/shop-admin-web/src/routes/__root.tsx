import { createRootRoute, Outlet } from '@tanstack/react-router'

const RootLayout = () => (
  <div className="h-dvh">
    <Outlet />
  </div>
)

export const Route = createRootRoute({ component: RootLayout })
