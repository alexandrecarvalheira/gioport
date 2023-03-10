import poster1 from "../../public/poster1.png";
import Image from "next/image";
import Link from "next/link";
import fetchFromCMS from "../lib/service";

export default async function Home() {
  const portfolioItems = await fetchFromCMS("portfolios");
  console.log(portfolioItems);
  return (
    <div className="grid mt-10 mx-10 gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 ">
      {portfolioItems.map((portfolioItem: any) => (
        <Link href={"/" + portfolioItem.id}>
          <div className="relative aspect-video overflow-hidden">
            <Image
              className="absolute inset-0 z-0 "
              src={
                "http://localhost:1337" +
                portfolioItem.attributes.imagem.data.attributes.formats.large
                  .url
              }
              width={
                portfolioItem.attributes.imagem.data.attributes.formats.large
                  .width
              }
              height={
                portfolioItem.attributes.imagem.data.attributes.formats.large
                  .height
              }
              alt={portfolioItem.attributes.Headline}
            />
            <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl bg-black bg-opacity-75 text-white font-semibold">
              <h4 className="font-nectarine text-red-200">
                {portfolioItem.attributes.Headline}
              </h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
