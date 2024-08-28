import { UseQuery } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from "@reduxjs/toolkit/query";

export type UseQueryData<ResultType, QueryArg> = UseQuery<
  QueryDefinition<
    QueryArg,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    never,
    ResultType,
    "jikanApi"
  >
>;
