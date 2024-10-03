import Footer from "#/app/[lang]/common/components/footer";
import Header from "#/app/[lang]/common/components/header";
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}
export default function Layout({params,  children }: any) {

  return (
    <div>
      <Header params={params} />
      <main>{children}</main>
      <Footer params={params} />
    </div>
  );
}
