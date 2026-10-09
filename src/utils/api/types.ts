export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ApiBody =
    | FormData
    | Record<string, unknown>
    | Record<string, any>
    | unknown[]
    | string
    | number
    | boolean
    | null;

export type NextFetchOptions = {
    revalidate?: number | false;
    tags?: string[];
};

export type ApiRequestOptions = Omit<RequestInit, 'method' | 'body' | 'headers'> & {
    headers?: HeadersInit;
    next?: NextFetchOptions;
};