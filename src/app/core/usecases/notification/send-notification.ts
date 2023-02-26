import {
	NotificationGateway,
	NotificationParams,
} from "../../gateway/notification-gateway";

export class SendNotification {
	constructor(private readonly gateway: NotificationGateway) {}
	execute(notification: NotificationParams) {
		this.gateway.sendNotification(notification);
	}
}
