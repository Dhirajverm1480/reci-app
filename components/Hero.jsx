import Image4 from "../assets/img/image4.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full h-[80vh] md:h-[calc(100vh-60px)] shadow-lg mb-2 flex flex-col justify-center pl-[5%] bg-no-repeat bg-cover bg-right"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Image4})`,
      }}
    >
      <h1 className="text-[7vw] sm:text-[8vh] mb-4 cursor-pointer">
        Welcom to the{" "}
        <span className="text-[7wv] sm:text-xl lg:text-[8vh] text-orange-500 border-b-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:rounded-lg hover:p-1">
          RecipeClub.
        </span>
      </h1>
      <p className="text-sm sm:text-xl">
        The place have the multiple recipes.{" "}
      </p>
      <div className="w-52">
        <a href="/contact" className="btn bg-orange-400">contact</a>
      </div>
    </section>
  );
};

export default Hero;
