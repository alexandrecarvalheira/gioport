import poster1 from "../../public/poster1.png";
import Image from "next/image";
import Link from "next/link";
import { fetchPostlist } from "../lib/service";

export const revalidate = 60;

export default async function Home() {
  const portfolioItems = await fetchPostlist();
  return (
    <div className="grid my-10 mx-auto max-w-4xl gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
      {portfolioItems.map((portfolioItem: any) => (
        <Link
          key={portfolioItem.id}
          as={`/${portfolioItem.id}`}
          href={"/" + portfolioItem.slag}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              className="absolute inset-0 z-0 "
              src={
                "https://gio-port.fly.dev/api/files/3kb00ygslkf8454/" +
                portfolioItem.id +
                "/" +
                portfolioItem.thumbnail
              }
              alt={portfolioItem.headline}
              width={473}
              height={369}
            />
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl bg-black bg-opacity-75 text-white font-semibold">
              <h4 className="font-Montserrat text-write">
                {portfolioItem.headline}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
