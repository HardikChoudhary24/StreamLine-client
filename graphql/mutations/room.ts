import { graphql } from "@/gql";

export const createRoom = graphql(`
  #graphql
  mutation createRoom($roomName: String) {
    createRoom(roomName: $roomName) {
      id
      roomName
    }
  }
`);
export const sendInvite = graphql(`
  mutation SendInvite($payload: SendInvite) {
    sendInvite(payload: $payload) {
      success
      mssg
    }
  }
`);
