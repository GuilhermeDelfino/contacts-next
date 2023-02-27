export type NotificationProps = {
	notificationId?: string;
	recipientId: string;
	category: string;
	content: string;
	createdAt?: Date;
	canceledAt?: Date | null;
	readedAt?: Date | null;
};
export class Notification {
	constructor(public props: NotificationProps) {}
}
