import { GlobalStyle } from "@/styles/global-style";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-BR">
			<head />
			<GlobalStyle />
			<body>{children}</body>
		</html>
	);
}
