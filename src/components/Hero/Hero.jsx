import heroImage from "./hero.png";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="bg-[#FFFDF5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-10 lg:gap-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 rounded-full bg-yellow-100 text-yellow-700 font-medium text-xs sm:text-sm lg:text-base mb-5 sm:mb-6">
              ⭐ The Best Way to Learn JavaScript
            </div>

            {/* Heading */}
            <h1 className="font-extrabold leading-tight tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Master JavaScript
              <br />
              <span className="text-yellow-500">
                by Solving Problems
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 sm:mt-6 text-gray-600 leading-7 sm:leading-8 max-w-xl lg:max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg lg:text-xl">
              Practice variables, loops, functions, objects, arrays,
              strings and conditions through interactive coding
              challenges designed for beginners and intermediate
              developers.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <HeroButtons />
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Solve JS Hero"
              className="
                w-full
                max-w-sm
                sm:max-w-lg
                md:max-w-xl
                lg:max-w-2xl
                xl:max-w-3xl
                2xl:max-w-4xl
                h-auto
                object-contain
                mx-auto
                transition-all
                duration-300
              "
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <HeroStats />
        </div>
      </div>
    </section>
  );
};

export default Hero;