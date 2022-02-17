import Image from "next/image";

const Home = () => {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10 ">
          <Image
            src="https://rb.gy/vtbzlp"
            layout="fill"
            objectFit="contain"
            alt="alternative image"
          />
        </div>

        <div className="flex items-center base:divide-x divide-gray-300">
          <div>Text 1</div>
          <div>Text 2</div>
          <div>Text 3</div>
        </div>
      </header>
    </div>
  );
};

export default Home;
