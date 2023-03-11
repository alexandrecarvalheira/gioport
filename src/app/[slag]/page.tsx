import Image from "next/image";
import type { Metadata } from "next";
import { fetchPost } from "@/lib/service";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const post = await fetchPost(params.slag);
  console;
  return { title: `Giovana Tronquini | ${post.headline}` };
}

export default async function Post({ params }: any) {
  const post = await fetchPost(params.slag);
  function content() {
    return { __html: post.content };
  }
  console.log(content());
  return (
    <div className="flex justify-center items-center flex-col p-8 mt-4 max-w-prose mx-auto">
      <h1 className="text-3xl font-nectarine text-red-800">{post.headline}</h1>
      <Image
        className="my-8"
        src={
          "https://gio-port.fly.dev/api/files/3kb00ygslkf8454/" +
          post.id +
          "/" +
          post.image
        }
        alt={post.headline}
        width={400}
        height={400}
        sizes="100vw"
      />
      <div dangerouslySetInnerHTML={content()} />
    </div>
  );
}
