import { useMutation } from "@tanstack/react-query"
import { signin } from "./auth.api"

export function useSignInMutation(){
    return useMutation({
        mutationFn: signin
    }) 
}