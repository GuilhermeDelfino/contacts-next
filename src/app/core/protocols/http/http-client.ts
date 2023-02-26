/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type HttpRequest<D = any> = {
	url: string;
	method: HttpMethod;
	data: D;
};
export enum HttpStatusCode {
	OK = 200,
	CREATED = 201,
	NO_CONTENT = 204,
	BAD_REQUEST = 400,
	UNAUTHORIZED = 401,
	FORBIDDEN = 403,
	NOT_FOUND = 404,
	INTERNOR_ERROR = 500,
}
export type HttpResponse<R = any> = {
	body?: R;
	statusCode: HttpStatusCode;
};
export interface HttpClient {
	request<R = any, D = any>(req: HttpRequest<D>): Promise<HttpResponse<R>>;
}
