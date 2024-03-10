import HeroLeftSection from "@/components/core/HeroLeftSection";

const HomePage = () => {
  return (
    <div className="bg-cod-gray-900 ">
      <div className="w-10/12  h-[80vh] mx-auto flex justify-between items-center">
        <div className="text-black">
          <HeroLeftSection />
        </div>
        <div className="text-black">Right Side</div>
      </div>
    </div>
  );
};

export default HomePage;
