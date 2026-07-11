import { createFileRoute } from '@tanstack/react-router'
import { Button } from "ui/button"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="p-2">
      <h3 className="text-red-500">Welcome Home!</h3>
      <Button>hola</Button>
    </div>
  )
}
