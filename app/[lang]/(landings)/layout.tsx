export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Home Layout Header</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
