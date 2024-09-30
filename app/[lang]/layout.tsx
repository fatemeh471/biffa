import Footer from "#/common/components/footer";
import Header from "#/common/components/header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
