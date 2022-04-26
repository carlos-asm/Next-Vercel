import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayout } from "../components/layouts/MainLayout";

export default function AbautPage() {
  return (
    <>
      <h1>Abaut</h1>
      <h1 className={"title"}>
        {/* ir a <a href="/abaut">Abaut</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </>
  );
}

AbautPage.getLayout = function getLayout(page:JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
