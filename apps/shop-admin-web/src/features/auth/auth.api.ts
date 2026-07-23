import z from "zod";
import { adminApi } from "../../lib/admin-api-client";


export const SignInRequestBodySchema = z.object({
  email: z.email(),
  password: z.string(),
});

export type SignInRequestBodyType = z.infer<typeof SignInRequestBodySchema>;

export async function signin(data: SignInRequestBodyType) {
    return adminApi.post("/auth/signin", {
        body: JSON.stringify(data)
    })

}
