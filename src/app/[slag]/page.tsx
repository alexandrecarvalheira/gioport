import Image from "next/image";
import type { Metadata } from "next";
import { fetchPost } from "@/lib/service";

export const revalidate = 60;

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await fetchPost(params.slag);
  return { title: `Giovana Tronquini | ${post.headline}` };
}

export default async function Post({ params }: any) {
  const post = await fetchPost(params.slag);
  console.log(post);
  function content() {
    return { __html: post.content };
  }
  return (
    <div className="flex justify-center items-center flex-col p-8 mt-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-Montserrat text-red-800">{post.headline}</h1>
      <div className="grid my-10 mx-auto max-w-5xl gap-2 grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
        {post.image.map((img: any) => (
          <Image
            key={img}
            src={
              "https://gio-port.fly.dev/api/files/3kb00ygslkf8454/" +
              post.id +
              "/" +
              img
            }
            alt={post.headline + img}
            width={400}
            height={400}
            sizes="100vw"
          />
        ))}
      </div>

      <div dangerouslySetInnerHTML={content()} />
    </div>
  );
}
