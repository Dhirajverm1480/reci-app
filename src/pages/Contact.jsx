import Title from "../components/Title";
import EmailImg from "../assets/icons/envelope-open.png";
import PhoneImg from "../assets/icons/phone.png";
import GlobeImg from "../assets/icons/globe.png";

const Contact = () => {
  return (
    <div className="page-frame xl:h-screen flex-center backdrop-blur-sm">
      {/* <Title title={"Contact"} /> */}
      <div className="w-full lg:flex justify-between items-center md:px-5">
        <div className="w-full md:h-[50vh] lg:h-full lg:w-[40%] flex flex-col justify-between pt-12">
          <div>
            <Title title={"Contact"} />
          </div>
          <div className="mx-2 py-4">
            <div className="mb-4 flex items-center gap-2">
              <img src={EmailImg} alt="" className="w-8" />
              <div className="flex flex-col">
                <span>Email: </span>
                <span>dhirajv418@gmail.com</span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <img src={PhoneImg} alt="" className="w-8" />
              <div className="flex flex-col">
                <span>Phone: </span>
                <span>+91 6391732413</span>
              </div>
            </div>
            <div className="mb-4 flex items-center gap-2">
              <img src={GlobeImg} alt="" className="w-8" />
              <div className="flex flex-col">
                <span>Address: </span>
                <span>Khora Colony G.Z.B (U.P) India (Barat). </span>
              </div>
            </div>
          </div>
          <div className="my-4">
            <Title title={"Social"} />
            <div className="flex flex-wrap py-3">
              <a
                href="https://www.linkedin.com/in/dhirajverma-v1"
                className="social-card"
                target="_blank"
              >
                <span>Linkedin</span>
              </a>
              <a
                href="https://github.com/Dhirajverm1480"
                className="social-card"
                target="_blank"
              >
                <span>GitHub</span>
              </a>
              <a href="#" className="social-card" target="_blank">
                <span>FaceBook</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:w-[50%] flex justify-center">
          <form
            action=""
            className="px-5 pb-4 w-full lg:w-[60%] border backdrop-blur-md rounded-md"
          >
            <div className="mt-5">
              <h2 className="text-3xl">Contact Me</h2>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b p-3 my-2 outline-none"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-b p-3 outline-none"
              />
              <input
                type="text"
                placeholder="Enter your name"
                className="bg-transparent border-b p-3 my-2 outline-none"
              />
              <textarea
                name=""
                id=""
                rows={4}
                placeholder="Enter your Message"
                className="bg-transparent border rounded-lg p-3 my-2 outline-none"
              ></textarea>
              <button className="border px-3 py-2 my-3 text-lg backdrop-blur-lg rounded-lg hover:bg-white hover:text-black">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
