import Container from "../components/Container"
import image from "../assets/1740161902963.jpg"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="bg-cyan-900 py-8">
      <Container>
        <div className="lg:grid grid-cols-7 flex justify-center flex-col-reverse">
            <div className="py-10 space-y-4 col-span-4 lg:mt-20">
              <h1 className="text-3xl lg:text-7xl font-bold text-white text-center lg:text-left text-4xl">Hi, I'm Mohsen</h1>
              <h4 className="lg:text-3xl text-[#0097e6] font-bold text-center lg:text-left text-xl">Senior Frontend Developer</h4>
              <p className="text-gray-300 text-center lg:text-left text-sm px-4 lg:px-0">As a dedicated senior front-end developer, I specialize in creating dynamic and responsive web applications. My expertise includes: <span>Tailwind CSS: Crafting visually appealing designs with utility-first styling.</span> <span>JavaScript: Developing interactive features and seamless user experiences.</span> <span>React: Building efficient and scalable UI components.</span> <span>Next.js: Enhancing performance and SEO for modern web applications.</span> I am passionate about leveraging the latest technologies to deliver innovative solutions.</p>
              <div className="space-x-4 flex lg:block justify-center mt-8">
                <Link to="/contact" className="bg-sky-400 rounded px-3 py-1 cursor-pointer hover:bg-transparent hover:border hover:shadow hover:shadow-sky-500 hover:text-sky-400 active:scale-95">Hire me</Link>
                <a href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1" className="border text-[#0097e6] rounded px-3 py-1 cursor-pointer hover:bg-sky-400 hover:shadow hover:shadow-sky-500  hover:border-1 hover:border-sky-500 hover:text-black  active:scale-95">Let's talk</a>
              </div>
            </div>

            <div className="col-span-3 lg:mt-20">
              <img src={image} alt="" className="rounded-full mx-auto w-60 h-60 lg:w-80 lg:h-80 lg:ml-32 object-cover"/>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default Home