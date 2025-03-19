import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:," />
        <title>Groeten uit Oss</title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <meta
          name="description"
          content="Photography in the municipality of Oss, The Netherlands. Available on Facebook, Instagram and Mastodon."
        ></meta>
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
