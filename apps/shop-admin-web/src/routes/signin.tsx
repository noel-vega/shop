import { createFileRoute } from "@tanstack/react-router";
import { SignInView } from "../features/auth/views/signin.view";

export const Route = createFileRoute("/signin")({
  component: SignInView,
});