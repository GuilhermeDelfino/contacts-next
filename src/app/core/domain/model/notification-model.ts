export type NotificationModel = {
	notificationId: string;
	recipientId: string;
	category: string;
	content: string;
	createdAt: Date;
	canceledAt?: Date | null;
	readedAt?: Date | null;
};
