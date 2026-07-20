import heroImage from "./hero.png";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="bg-[#FFFDF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium text-sm sm:text-base mb-6">
              ⭐ The Best Way to Learn JavaScript
            </div>

            <h1 className="font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Master JavaScript
              <br />

              <span className="text-yellow-500">
                by Solving Problems
              </span>
            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl">
              Practice variables, loops, functions, objects,
              arrays, strings and conditions through interactive
              coding challenges designed for beginners and
              intermediate developers.
            </p>

            <div className="mt-8 flex justify-center lg:justify-start">
              <HeroButtons />
            </div>

          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center">

            <img
              src={heroImage}
              alt="Solve JS Hero"
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto"
            />

          </div>

        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <HeroStats />
        </div>

      </div>
    </section>
  );
};

export default Hero;