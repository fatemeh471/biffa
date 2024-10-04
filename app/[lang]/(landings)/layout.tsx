import Footer from "#/app/[lang]/common/components/footer";
import HeaderServer from "../common/components/headerServer";
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}
export default function Layout({params,  children }: any) {

  return (
    <div>
      <HeaderServer params={params} />
      <main>{children}</main>
      <Footer params={params} />
    </div>
  );
}
