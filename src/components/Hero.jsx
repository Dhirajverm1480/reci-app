import Image4 from "../assets/img/image4.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="page-frame h-[97vh] md:h-screen shadow-lg mb-2 flex flex-col justify-center bg-no-repeat bg-cover bg-right"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Image4})`,
      }}
    >
      <h1 className="hero-heading">
        Welcom to the{" "}
        <span className="hero-span">
          RecipeClub.
        </span>
      </h1>
      <p className="text-sm sm:text-2xl">
        The place have the multiple recipes.{" "}
      </p>
      <div className="w-80 sm:w-96 flex gap-2">
        <a href="/about" className="btn border btn-hover">About</a>
        <a href="/contact" className="btn bg-orange-400">contact</a>
      </div>
    </section>
  );
};

export default Hero;
