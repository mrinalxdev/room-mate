import Link from "next/link";
import CompareSlider from "@/components/CompareSlider";

export default function Home() {
  return (
    <main className="my-auto flex gap-10 p-11 lg:flex-row flex-col justify-center lg:justify-around items-center">
      <div className="flex relative max-w-xl flex-col items-center gap-5 gradient-bg">
        <h1 className="text-black text-5xl font-bold text-center">
          Redesign your room like never before !{" "}
          <span className="text-blue-700">using Artificial Intelligence</span>
        </h1>
        <p className="text-gray-500 text-lg text-center">
          How to redesign ?? Take a picture of your Room . Thats it, explore 8
          different themes for your room
        </p>
        <Link href={"/room"}>
          <button className="bg-blue-500 hover:opacity-90 text-black font-semibold py-3 px-5 rounded-lg">
            Redesign your room
          </button>
        </Link>
      </div>
      <div>
        <CompareSlider />
      </div>
    </main>
  );
}
