import Image4 from "../assets/img/image4.png";

const Hero = () => {
  return (
    <section id='hero' className='h-[80vh] border rounded-lg shadow-lg mb-2 flex flex-col justify-center pl-[5%]'>
      <h1 className='text-5xl mb-4 cursor-pointer'>Welcom to the <span className='text-4xl sm:text-5xl text-red-500 border-b-2 border-red-500 hover:bg-red-500 hover:text-white hover:rounded-lg hover:p-1'>RecipeClub.</span></h1>
      <p className='text-xl sm:text-2xl'>The place have the multiple recipes. </p>
      <div className='mt-2'>
        <NavLink to='/contact' className='bg-orange-400 rounded-lg p-2'>Contact</NavLink>
      </div>
    </section>
  );
};

export default Hero;
