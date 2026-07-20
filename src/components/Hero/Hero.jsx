import { Link } from "react-router";
import heroImage from "./hero.png";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

const Hero = () => {
  return (
    <section className="bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 items-center gap-16">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium mb-6">
              ⭐ The Best Way to Learn JavaScript
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Master JavaScript
              <br />

              <span className="text-yellow-500">
                by Solving Problems
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9">
              Practice variables, loops, functions, objects,
              arrays, strings and conditions through
              interactive coding challenges designed for
              beginners and intermediate developers.
            </p>
            <HeroButtons/>

          </div>

          {/* Right Image */}

          <div>

            <img
              src={heroImage}
              alt="Solve JS Hero"
              className="w-full"
            />

          </div>

       </div>

<HeroStats />

</div>
</section>
  );
};

export default Hero;