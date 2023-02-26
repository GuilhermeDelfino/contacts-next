import {
	HttpClient,
	HttpStatusCode,
} from "@/app/core/data/protocols/http/http-client";
import {
	NotificationGateway,
	NotificationParams,
} from "@/app/core/gateway/notification-gateway";

export class RemoteNotificationGateway implements NotificationGateway {
	constructor(
		private readonly client: HttpClient,
		private readonly baseUrl: string
	) {}
	async sendNotification(notification: NotificationParams): Promise<void> {
		const { statusCode, body } = await this.client.request<
			any,
			NotificationParams
		>({
			data: notification,
			method: "POST",
			url: this.baseUrl + "/notification/send",
		});

		if (![HttpStatusCode.CREATED, HttpStatusCode.OK].includes(statusCode)) {
			throw new Error(`status code: ${statusCode}\n body: ${body}`);
		}
	}
}
