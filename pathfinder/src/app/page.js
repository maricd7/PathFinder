
import Heading from "./components/common/Heading/Heading";
import CtaButton from "./components/common/Button/CtaButton";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Heading text="Welcome to PathFinder" />
      <p>
        PathFinder helps you effortlessly navigate your digital footprint and
        connect with your audience like never before.
      </p>
      <div className="flex gap-4 mt-8">
        <CtaButton text="Register" />
        <CtaButton text="Login" />
      </div>
    </div>
  );
}
