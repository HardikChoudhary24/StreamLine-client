"use client";
import { gqlClient } from "@/clients/api";
import { createRoom } from "@/graphql/mutations/room";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useCreateRoom = () => {
  const mutation = useMutation({
    mutationFn: (roomName: string) =>
      gqlClient.request(createRoom, { roomName }),
    onMutate:()=>{
        toast.loading("Creating workspce",{id:"create-workspace"});
    },
    onSuccess:()=>{
        toast.success("Workspace created!",{id:"create-workspace"})
    },
    onError:(error)=>{
        toast.error("Something went wrong!",{id:"create-workspace"})
    }
  });

  return mutation;
};

export default useCreateRoom;
