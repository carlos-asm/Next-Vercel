import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact</h1>
      <h1 className={"title"}>
        {/* ir a <a href="/abaut">Abaut</a> */}
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
