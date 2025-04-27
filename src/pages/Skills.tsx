import Container from "../components/Container";

function Skills() {
  return (
    <div className="bg-cyan-900 py-18 px-6 lg:px-0">
      <Container>
      <h1 className="text-3xl lg:text-6xl text-center text-white mb-10 font-bold">
            My <span className="text-sky-400 ">Skills</span>
          </h1>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
          <div className="space-y-8">
            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white">
                HTML : <span className="text-sky-400">100%</span>
              </h3>
              <div className="relative flex lg:block justify-center">
                <div className="bg-sky-100 h-4 w-60 lg:72"></div>
                <div className="bg-sky-400 h-4 w-60 lg:72 absolute top-0"></div>
              </div>
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white">
                CSS : <span className="text-sky-400">90%</span>
              </h3>
             <div className="flex justify-center lg:block">
             <div className="relative">
                <div className="bg-sky-100 h-4 w-60 lg:w-72 "></div>
                <div className="bg-sky-400 h-4 w-52 lg:w-64 absolute top-0"></div>
              </div>
             </div>
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white">
                Tailwind : <span className="text-sky-400">85%</span>
              </h3>
             <div className="flex lg:block justify-center">
             <div className="relative ">
                <div className="bg-sky-100 h-4 w-60 lg:w-72"></div>
                <div className="bg-sky-400 h-4 w-48 lg:w-60 absolute top-0"></div>
              </div>
             </div>
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white">
                Type Script : <span className="text-sky-400">85%</span>
              </h3>
              <div className="flex lg:block justify-center">
              <div className="relative">
                <div className="bg-sky-100 h-4 w-60 lg:w-72"></div>
                <div className="bg-sky-400 h-4 w-42 lg:w-56 absolute top-0"></div>
              </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
          <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white mt-8 lg:mt-0">
                Javascript : <span className="text-sky-400">80%</span>
              </h3>
              <div className=" flex lg:block justify-center">
              <div className="relative">
                <div className="bg-sky-100 h-4 w-60 lg:w-72"></div>
                <div className="bg-sky-400 h-4 w-42 lg:w-56 absolute top-0"></div>
              </div>
              </div>
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white">
                React js : <span className="text-sky-400">85%</span>
              </h3>
             <div className="flex lg:block justify-center">
             <div className="relative ">
                <div className="bg-sky-100 h-4 w-60 lg:w-72"></div>
                <div className="bg-sky-400 h-4 w-48 lg:w-60 absolute top-0"></div>
              </div>
             </div>
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white">
                Next js : <span className="text-sky-400">60%</span>
              </h3>
             <div className=" flex lg:block justify-center">
             <div className="relative">
                <div className="bg-sky-100 h-4 w-60 lg:w-72"></div>
                <div className="bg-sky-400 h-4 w-34 lg:w-40 absolute top-0"></div>
              </div>
             </div>
            </div>

            <div className="space-y-2 text-center lg:text-left">
              <h3 className="text-white">
                git & github : <span className="text-sky-400">90%</span>
              </h3>
              <div className=" flex lg:block justify-center">
              <div className="relative">
                <div className="bg-sky-100 h-4 w-60  lg:w-72"></div>
                <div className="bg-sky-400 h-4 w-52  lg:w-64 absolute top-0"></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
