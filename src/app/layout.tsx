import Image from "next/image";
import Link from "next/link";
import logo from "../../public/oculos.svg";

import "./globals.css";

export const metadata = {
  title: "Giovana M Tronquini Portfolio",
  description: "Giovana M Tronquini Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="mt-6 flex font-nectarine  flex-col gap-2 items-center">
        <h1 className="text-2xl text-red-800">Giovana M Tronquini</h1>
        <Image src={logo} alt="logo" className="max-w-xs" />
        <div className="text-red-800 mt-2 text-2xl mx-auto gap-4">
          <Link href={"/"}>
            <button className="mr-6 hover:text-yellow-500">work</button>
          </Link>
          <button className="hover:text-yellow-500">Contact</button>
        </div>
      </div>

      {children}
    </section>
  );
}
