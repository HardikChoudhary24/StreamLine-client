"use client";
import { gqlClient } from "@/clients/api";
import { CreateUserPayload, SendInvite } from "@/gql/graphql";
import { sendInvite } from "@/graphql/mutations/room";
import { createUser } from "@/graphql/mutations/user";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useInviteUser = () => {
  const mutation = useMutation({
    mutationFn: (payload: SendInvite) =>
      gqlClient.request(sendInvite, { payload: payload }),
    onMutate: () => {
      toast.loading("Sending invite", { id: "send-invite" });
    },
    onSuccess: (res) => {
      toast.success("invite sent", { id: "send-invite" });
    },
    onError: (error) => {
      toast.error("Something went wrong!", { id: "send-invite" });
    },
  });

  return mutation;
};

export default useInviteUser;
