import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/inventory')({
  beforeLoad: () => {
    throw redirect({to: "/signin"})
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/inventory"!</div>
}
