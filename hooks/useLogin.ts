"use client";
import { gqlClient } from "@/clients/api";
import { CreateUserPayload, LoginPayload } from "@/gql/graphql";
import { createUser } from "@/graphql/mutations/user";
import { authenticateUser } from "@/graphql/query/user";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: (payload: LoginPayload) =>
      gqlClient.request(authenticateUser, { payload: payload }),
  });

  return mutation;
};

export default useLogin;
