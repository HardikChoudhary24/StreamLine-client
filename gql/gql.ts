/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  #graphql\n  mutation createRoom($roomName: String) {\n    createRoom(roomName: $roomName) {\n      id\n      roomName\n    }\n  }\n": types.CreateRoomDocument,
    "\n  mutation SendInvite($payload: SendInvite) {\n    sendInvite(payload: $payload) {\n      success\n      mssg\n    }\n  }\n": types.SendInviteDocument,
    "\n  #graphql\n  mutation createUser($payload: CreateUserPayload) {\n    createUser(payload: $payload) {\n      user {\n        email\n        id\n      }\n      userExist\n    }\n  }\n": types.CreateUserDocument,
    "\n  #graphql\n  query Authenticate($payload: LoginPayload) {\n    authenticate(payload: $payload) {\n      success\n      token\n      url\n    }\n  }\n": types.AuthenticateDocument,
    "\n  #graphql\n  query VerifyToken{\n    verifyToken{\n      success\n    }\n  }\n": types.VerifyTokenDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation createRoom($roomName: String) {\n    createRoom(roomName: $roomName) {\n      id\n      roomName\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation createRoom($roomName: String) {\n    createRoom(roomName: $roomName) {\n      id\n      roomName\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SendInvite($payload: SendInvite) {\n    sendInvite(payload: $payload) {\n      success\n      mssg\n    }\n  }\n"): (typeof documents)["\n  mutation SendInvite($payload: SendInvite) {\n    sendInvite(payload: $payload) {\n      success\n      mssg\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation createUser($payload: CreateUserPayload) {\n    createUser(payload: $payload) {\n      user {\n        email\n        id\n      }\n      userExist\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation createUser($payload: CreateUserPayload) {\n    createUser(payload: $payload) {\n      user {\n        email\n        id\n      }\n      userExist\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query Authenticate($payload: LoginPayload) {\n    authenticate(payload: $payload) {\n      success\n      token\n      url\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query Authenticate($payload: LoginPayload) {\n    authenticate(payload: $payload) {\n      success\n      token\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query VerifyToken{\n    verifyToken{\n      success\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query VerifyToken{\n    verifyToken{\n      success\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;