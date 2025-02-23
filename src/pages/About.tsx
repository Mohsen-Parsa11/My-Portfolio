import Container from "../components/Container";
import image from "../assets/1740161902963.jpg";

function About() {
  return (
    <div className="bg-cyan-900 py-14 px-6 lg:px-0">
      <Container>
        <div className="space-y-4">
          <h1 className="text-3xl lg:text-6xl text-center text-white font-bold">
            About <span className="text-sky-400">Me</span>
          </h1>
          <div className="h-36 mx-auto mt-1 w-36 border-4 border-l-sky-500 border-r-sky-500 rounded-full border-t-transparent border-b-transparent flex items-center pb-4">
            <img
              src={image}
              alt=""
              className="rounded-full mt-4 h-28 w-28 object-cover  ring-4 ring-sky-400  mx-auto"
            />
          </div>
          <h2 className="text-center text-xl text-white font-bold">
            Frontend Web Developer
          </h2>
          <p className="text-white text-center max-w-6xl mx-auto">
            Hello! I’m Mohsen Parsa, a Senior Front-End Developer with a deep
            passion for crafting modern, user-friendly, and responsive web
            applications. Currently, I’m pursuing a degree in Computer Science
            at Herat University, where I continuously expand my expertise in web
            development and emerging technologies. With years of experience
            under my belt, I have honed my skills in React.js, TypeScript, HTML,
            CSS, Bootstrap, Tailwind CSS, JavaScript, jQuery, Next.js, and
            MySQL. My Skills: Front-End Development: HTML5, CSS3, JavaScript
            (ES6+), TypeScript, React.js, Next.js, jQuery UI Frameworks:
            Bootstrap, Tailwind CSS Back-End Development: MySQL Performance &
            Optimization: Responsive Design, SEO Best Practices Collaboration &
            Remote Work: Strong Teamwork Skills, Agile Workflows What Drives Me
            I am passionate about solving complex problems and continuously
            improving my skills to build high-quality, scalable, and optimized
            web applications. I thrive in collaborative and remote work
            environments, ensuring seamless teamwork on projects. Let’s Connect!
            If you’re looking for a dedicated and skilled front-end developer,
            feel free to reach out—I’d love to collaborate and bring your ideas
            to life! 🚀
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/Mohsen-Parsa11"
              className="bg-sky-400 rounded px-3 py-1 cursor-pointer hover:bg-transparent hover:border hover:shadow hover:shadow-sky-500 mt-2 hover:text-sky-400 active:scale-95"
            >
              Read more
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
