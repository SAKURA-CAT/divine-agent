import type * as Types from '../types.generated';

import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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

/** APIKey is a key used to authenticate requests to the API */
export type ApiKey = {
  __typename?: 'APIKey';
  api_key: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

/** OpenInput is the input for the OpenAI API */
export type ChatInput = {
  __typename?: 'ChatInput';
  logprobs?: Maybe<Scalars['Boolean']['output']>;
  messages?: Maybe<Array<MessageInput>>;
  model: Scalars['String']['output'];
  n?: Maybe<Scalars['Int']['output']>;
  stream?: Maybe<Scalars['Boolean']['output']>;
  temperature?: Maybe<Scalars['Float']['output']>;
  top_logprobs?: Maybe<Scalars['Int']['output']>;
  top_p?: Maybe<Scalars['Float']['output']>;
};

/** CreateAPIKeyResponse is a response to the createAPIKey mutation */
export type CreateApiKeyResponse = MutationResponse & {
  __typename?: 'CreateAPIKeyResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<ApiKey>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** CreateTokenResponse is a response to the login mutation */
export type CreateTokenResponse = MutationResponse & {
  __typename?: 'CreateTokenResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** CreateUserResponse is a response to the createUser mutation */
export type CreateUserResponse = MutationResponse & {
  __typename?: 'CreateUserResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<User>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** DeleteUserResponse is a response to the deleteUser mutation */
export type DeleteUserResponse = MutationResponse & {
  __typename?: 'DeleteUserResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** GroupingKey is an enum that represents the key used to group usage results */
export enum GroupingKey {
  Date = 'date',
  Model = 'model'
}

/** KeyValue is a key-value pair */
export type KeyValue = {
  __typename?: 'KeyValue';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** Kind is an enum that represents the type of span */
export enum Kind {
  SpanKindEvaluation = 'SPAN_KIND_EVALUATION',
  SpanKindFunction = 'SPAN_KIND_FUNCTION',
  SpanKindLlm = 'SPAN_KIND_LLM'
}

/** MessageInput is a message sent to the OpenAI API */
export type MessageInput = {
  __typename?: 'MessageInput';
  content: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
};

/** Mutation is a collection of mutations that can be made to the API */
export type Mutation = {
  __typename?: 'Mutation';
  /** API Key Mutations */
  createAPIKey: CreateApiKeyResponse;
  /** User Mutations */
  createUser: CreateUserResponse;
  deleteUser: DeleteUserResponse;
  /** Auth Mutations */
  login: CreateTokenResponse;
  loginWithAPIKey: CreateTokenResponse;
  revokeAPIKey: RevokeApiKeyResponse;
  updateAPIKey: UpdateApiKeyResponse;
  updateUser: UpdateUserResponse;
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationCreateApiKeyArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationLoginArgs = {
  identity: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationLoginWithApiKeyArgs = {
  api_key: Scalars['String']['input'];
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationRevokeApiKeyArgs = {
  id: Scalars['ID']['input'];
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationUpdateApiKeyArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


/** Mutation is a collection of mutations that can be made to the API */
export type MutationUpdateUserArgs = {
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

/** MutationResponse is a response to a mutation */
export type MutationResponse = {
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** NullTime is a custom scalar type that represents a time value that can be null */
export type NullTime = {
  __typename?: 'NullTime';
  Time: Scalars['String']['output'];
  Valid: Scalars['Boolean']['output'];
};

/** Query is a collection of queries that can be made to the API */
export type Query = {
  __typename?: 'Query';
  /** Fetch all traces */
  all_traces?: Maybe<Array<Trace>>;
  /** Fetch current user's API keys */
  api_keys?: Maybe<Array<ApiKey>>;
  /** Fetch openai input by span id */
  chat_input?: Maybe<ChatInput>;
  /** Fetch completion usages */
  completion_usage?: Maybe<Array<UsageResult>>;
  /** Fetch current user */
  me: User;
  /** Fetch all scores by trace id */
  scores?: Maybe<Array<Score>>;
  /** Fetch all spans by trace id */
  spans?: Maybe<Array<Span>>;
  /** Fetch traces by session id */
  traces?: Maybe<Array<Trace>>;
  /** Fetch a specific user by id */
  user: User;
};


/** Query is a collection of queries that can be made to the API */
export type QueryChat_InputArgs = {
  span_id: Scalars['ID']['input'];
};


/** Query is a collection of queries that can be made to the API */
export type QueryCompletion_UsageArgs = {
  end_time?: InputMaybe<Scalars['Int']['input']>;
  group_by?: InputMaybe<GroupingKey>;
  start_time: Scalars['Int']['input'];
};


/** Query is a collection of queries that can be made to the API */
export type QueryScoresArgs = {
  trace_id: Scalars['ID']['input'];
};


/** Query is a collection of queries that can be made to the API */
export type QuerySpansArgs = {
  trace_id: Scalars['ID']['input'];
};


/** Query is a collection of queries that can be made to the API */
export type QueryTracesArgs = {
  session_id: Scalars['ID']['input'];
};


/** Query is a collection of queries that can be made to the API */
export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};

/** RevokeAPIKeyResponse is a response to the revokeAPIKey mutation */
export type RevokeApiKeyResponse = MutationResponse & {
  __typename?: 'RevokeAPIKeyResponse';
  code: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** Score is a record of a score for a trace */
export type Score = {
  __typename?: 'Score';
  name: Scalars['String']['output'];
  representative_reasoning: Scalars['String']['output'];
  score: Scalars['Float']['output'];
  span_id: Scalars['ID']['output'];
};

/** Span is a record of a single unit of work within a trace */
export type Span = {
  __typename?: 'Span';
  duration?: Maybe<Scalars['Float']['output']>;
  end_time: NullTime;
  id: Scalars['ID']['output'];
  kind: Kind;
  metadata?: Maybe<Array<KeyValue>>;
  name: Scalars['String']['output'];
  parent_id: Scalars['ID']['output'];
  start_time: Scalars['String']['output'];
  trace_id: Scalars['ID']['output'];
};

/** Trace is a record to track the execution of a session */
export type Trace = {
  __typename?: 'Trace';
  end_time: NullTime;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  session_id: Scalars['ID']['output'];
  start_time: Scalars['String']['output'];
};

/** UpdateAPIKeyResponse is a response to the updateAPIKey mutation */
export type UpdateApiKeyResponse = MutationResponse & {
  __typename?: 'UpdateAPIKeyResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<ApiKey>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** UpdateUserResponse is a response to the updateUser mutation */
export type UpdateUserResponse = MutationResponse & {
  __typename?: 'UpdateUserResponse';
  code: Scalars['Int']['output'];
  data?: Maybe<User>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

/** UsageResult is the result of a usage query */
export type UsageResult = {
  __typename?: 'UsageResult';
  date?: Maybe<Scalars['Int']['output']>;
  input_tokens: Scalars['Int']['output'];
  model?: Maybe<Scalars['String']['output']>;
  output_tokens: Scalars['Int']['output'];
  total_tokens: Scalars['Int']['output'];
};

/** User is a registered user of the application */
export type User = {
  __typename?: 'User';
  api_keys?: Maybe<Array<ApiKey>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type GetScoresQueryVariables = Types.Exact<{
  traceId: Types.Scalars['ID']['input'];
}>;


export type GetScoresQuery = { __typename?: 'Query', scores?: Array<{ __typename?: 'Score', span_id: string, name: string, score: number, representative_reasoning: string }> | null };


export const GetScoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getScores"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"traceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"trace_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"traceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"span_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"representative_reasoning"}}]}}]}}]} as unknown as DocumentNode<GetScoresQuery, GetScoresQueryVariables>;