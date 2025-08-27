import Title from "../components/Title";
import Image4 from '../assets/img/image4.png'

const About = () => {
  return (
    <div className="page-frame h-[calc(100vh-60px)] flex items-center bg-cover bg-no-repeat bg-center bg-fixed"
      style={{backgroundImage: `url(${Image4})`}}
    >
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <Title title={'About'} />
        <p className="py-3 text-md">
          <span className="text-orange-400 text-xl font-bold font-serif mr-2">RecipesClub</span> is a premier web application designed to elevate your cooking experience with a comprehensive and intuitive platform for discovering, organizing, and sharing recipes. Whether you're an aspiring home cook or a seasoned chef, RecipesClub offers a wealth of resources to simplify meal preparation, inspire culinary creativity, and support a variety of dietary needs and preferences.{" "}
          <br />
          <br />
          With a focus on accessibility, innovation, and community, RecipesClub provides users with a seamless interface to explore an extensive collection of high-quality recipes from across the globe. From everyday meals to special occasions, RecipesClub ensures that every dish is within reach, backed by expert-curated content and professional guidance.
        </p>
        <a href="/contact" className="btn border btn-hover">Contact</a>
      </div>
    </div>
  );
};

export default About;
