export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>layout da about</h1>
      {children}
    </>
  );
}
