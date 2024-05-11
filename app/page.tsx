import { Hero } from "@/app/_components/landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <section className="overflow-x-hidden max-w-screen">
      <Hero />
      {/* <UploadModal/> */}
    </section>
  );
}
