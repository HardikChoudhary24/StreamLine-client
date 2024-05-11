/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthenticateResponse = {
  __typename?: 'AuthenticateResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CreateUserPayload = {
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  profileImageURL?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type CreateUserResponse = {
  __typename?: 'CreateUserResponse';
  user?: Maybe<User>;
  userExist?: Maybe<Scalars['Boolean']['output']>;
};

export type LoginPayload = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoom?: Maybe<Room>;
  createUser?: Maybe<CreateUserResponse>;
  sendInvite?: Maybe<SendInviteResponse>;
};


export type MutationCreateRoomArgs = {
  roomName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  payload?: InputMaybe<CreateUserPayload>;
};


export type MutationSendInviteArgs = {
  payload?: InputMaybe<SendInvite>;
};

export type Query = {
  __typename?: 'Query';
  authenticate?: Maybe<AuthenticateResponse>;
  getAllRoomsForUser?: Maybe<Array<Room>>;
  getCurrentUser?: Maybe<User>;
  verifyToken?: Maybe<VerifyTokenResponse>;
};


export type QueryAuthenticateArgs = {
  payload?: InputMaybe<LoginPayload>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['ID']['output'];
  ownerId?: Maybe<User>;
  roomName?: Maybe<Scalars['String']['output']>;
};

export type SendInvite = {
  inviteEmail?: InputMaybe<Scalars['String']['input']>;
  workspaceId?: InputMaybe<Scalars['String']['input']>;
};

export type SendInviteResponse = {
  __typename?: 'SendInviteResponse';
  mssg?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profileImageURL?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type VerifyTokenResponse = {
  __typename?: 'VerifyTokenResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateRoomMutationVariables = Exact<{
  roomName?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateRoomMutation = { __typename?: 'Mutation', createRoom?: { __typename?: 'Room', id: string, roomName?: string | null } | null };

export type SendInviteMutationVariables = Exact<{
  payload?: InputMaybe<SendInvite>;
}>;


export type SendInviteMutation = { __typename?: 'Mutation', sendInvite?: { __typename?: 'SendInviteResponse', success?: boolean | null, mssg?: string | null } | null };

export type CreateUserMutationVariables = Exact<{
  payload?: InputMaybe<CreateUserPayload>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserResponse', userExist?: boolean | null, user?: { __typename?: 'User', email: string, id: string } | null } | null };

export type AuthenticateQueryVariables = Exact<{
  payload?: InputMaybe<LoginPayload>;
}>;


export type AuthenticateQuery = { __typename?: 'Query', authenticate?: { __typename?: 'AuthenticateResponse', success?: boolean | null, token?: string | null, url?: string | null } | null };

export type VerifyTokenQueryVariables = Exact<{ [key: string]: never; }>;


export type VerifyTokenQuery = { __typename?: 'Query', verifyToken?: { __typename?: 'VerifyTokenResponse', success?: boolean | null } | null };


export const CreateRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roomName"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"roomName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roomName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roomName"}}]}}]}}]} as unknown as DocumentNode<CreateRoomMutation, CreateRoomMutationVariables>;
export const SendInviteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendInvite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SendInvite"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendInvite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"mssg"}}]}}]}}]} as unknown as DocumentNode<SendInviteMutation, SendInviteMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserPayload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userExist"}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const AuthenticateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Authenticate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginPayload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<AuthenticateQuery, AuthenticateQueryVariables>;
export const VerifyTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VerifyToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<VerifyTokenQuery, VerifyTokenQueryVariables>;