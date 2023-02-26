export type NotificationParams = {
	content: string;
	category: string;
	recipientId: string;
};
export interface NotificationGateway {
	sendNotification(notification: NotificationParams): Promise<void>;
}
