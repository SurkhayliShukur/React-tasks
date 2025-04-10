import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
    <main>
    <h1 className="uppercase flex justify-center w-full gap-4">
      Home /
      <Link  href="/posts">Posts</Link>
    </h1>
    </main>
  
  );
}
