import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { signin, SignInRequestBodySchema, type SignInRequestBodyType } from "../auth.api";
import { Field, FieldLabel } from "ui/field";
import { Input } from "ui/input";
import { Button } from "ui/button";

export function SignInView() {

  const form = useForm({
    resolver: zodResolver(SignInRequestBodySchema),
    defaultValues: {
      email: "",
      password:""
    }
  });

  async function handleSubmit(data: SignInRequestBodyType) {
    await signin(data)
    console.log(data);

  }

  return (
    <div className="h-full flex items-center">
      <form  onSubmit={form.handleSubmit(handleSubmit)} className="max-w-sm space-y-4 mx-auto w-full">
        <Controller
          control={form.control}
          name="email"
          render={({ field }) => (
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input type="email" {...field} />
            </Field>
          )}
        />

        <Controller
          control={form.control}
          name="password"
          render={({ field }) => (
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" {...field} />
            </Field>
          )}
        />

        <Button type="submit" className="w-full">Sign in</Button>
      </form>
    </div>
  );
}