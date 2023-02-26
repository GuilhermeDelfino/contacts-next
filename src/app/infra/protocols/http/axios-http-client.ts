import axios from "axios";

import {
	HttpClient,
	HttpRequest,
	HttpResponse,
} from "@/app/core/protocols/http/http-client";

export class AxiosHttpClient implements HttpClient {
	async request<R = any, D = any>({
		data,
		method,
		url,
	}: HttpRequest<D>): Promise<HttpResponse<R>> {
		const res = await axios.request({
			url,
			data,
			method,
		});

		return { statusCode: res.status, body: res.data } as HttpResponse;
	}
}
