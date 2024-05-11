"use client"
import { gqlClient } from "@/clients/api"
import { CreateUserPayload } from "@/gql/graphql";
import { createUser } from "@/graphql/mutations/user";
import { useMutation } from "@tanstack/react-query"

const useCreateUser = () => {
    const mutation = useMutation({
      mutationFn: (payload: CreateUserPayload) =>
        gqlClient.request(createUser, { payload: payload }),
    });

    return mutation
}

export default useCreateUser
