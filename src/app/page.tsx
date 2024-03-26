import Sports from "./components/Sports";
import Collection from "./components/Collection";

export default function Home() {
  return (
    <div className="bg-[#F7F7F8] dark:bg-[#292B32] justify-center py-16 px-[102px]">
      <Sports />
      <Collection />
    </div>
  );
}
