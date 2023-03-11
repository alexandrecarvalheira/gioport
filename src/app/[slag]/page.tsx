import Image from "next/image";
import poster1 from "../../../public/poster1.png";

export default async function Post({ params }: any) {
  console.log(params);
  return (
    <div className="flex justify-center items-center flex-col p-8 mt-4 max-w-prose mx-auto">
      <h1 className="text-3xl font-nectarine text-red-800">Titulo</h1>
      <Image className="my-8" src={poster1} alt={"postagem"} />
      <p className="text-lg ">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
        perferendis ex officiis aperiam explicabo quod recusandae. Fugit
        possimus facere consectetur architecto doloremque ipsam in voluptas
        explicabo et, quam repudiandae velit?
      </p>
    </div>
  );
}
