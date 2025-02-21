export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      this only gets rendered on the auth pages
        {children}
    </main>
  );
}
