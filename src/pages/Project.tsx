import Container from "../components/Container";
import weatherApp from "../assets/weather.jpg";
import store from "../assets/store.jpg";
import shortly from "../assets/shortly.jpg";
import card from "../assets/card.jpg";
import realstate from "../assets/realState.jpg"

function Project() {
  return (
    <div className="bg-cyan-900 py-20 px-6 lg:px-0">
      <Container>
        <div>
          <h1 className="text-3xl lg:text-5xl text-center text-white font-bold mb-4">
            My <span className="text-sky-400">Project</span>
          </h1>

          <div className="space-y-6">
            <div className=" flex flex-col lg:grid grid-cols-3 gap-6 py-6 ">
              <a href="https://github.com/Mohsen-Parsa11/weatherApp" className="border w-full border-sky-400 rounded shadow shadow-sky-400 relative group">
                <img
                  src={weatherApp}
                  alt=""
                  className="w-full object-cover rounded lg:h-75"
                />
                <div className="flex lg:justify-center items-end absolute top-0 bottom-0 left-0 right-0 z-50 ">
                  <div className=" group-hover:bg-black-500 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition duration-500 w-full group-hover:opacity-90 h-20 py-3 px-2">
                    <h4 className="text-lg  lg:text-3xl hidden group-hover:block text-white z-20 ">
                      Weather App Project
                    </h4>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Mohsen-Parsa11/react-store-project" className="border border-sky-400 rounded shadow shadow-sky-400 relative group">
                <img
                  src={store}
                  alt=""
                  className="w-full object-contain rounded lg:h-75"
                />
                <div className="flex justify-center items-end absolute top-0 bottom-0 left-0 right-0 z-50 ">
                <div className=" group-hover:bg-black-500 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition duration-500 w-full group-hover:opacity-90 h-20 py-3 px-2">
                    <h4 className="text-lg  lg:text-3xl hidden group-hover:block text-white z-20 ">
                      React Store Project
                    </h4>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Mohsen-Parsa11/ClipBoarde" className="border border-sky-400 rounded shadow shadow-sky-400 relative group">
                <img
                  src={shortly}
                  alt=""
                  className="w-full object-cover rounded"
                />
                <div className="flex justify-center items-end absolute top-0 bottom-0 left-0 right-0 z-50 ">
                <div className=" group-hover:bg-black-500 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition duration-500 w-full group-hover:opacity-90 h-20 py-3 px-2">
                    <h4 className="text-lg  lg:text-3xl hidden group-hover:block text-white z-20 ">
                      Clipboard project
                    </h4>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Mohsen-Parsa11/Slider-owl-carousel" className="border border-sky-400 rounded shadow shadow-sky-400 relative group">
                <img
                  src={card}
                  alt=""
                  className="w-full object-cover rounded lg:h-75"
                />
                <div className="flex justify-center items-end absolute top-0 bottom-0 left-0 right-0 z-50 ">
                <div className=" group-hover:bg-black-500 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition duration-500 w-full group-hover:opacity-90 h-20 py-3 px-2">
                    <h4 className="text-lg  lg:text-3xl hidden group-hover:block text-white z-20 ">
                      owl-carousel project
                    </h4>
                  </div>
                </div>
              </a>

              <a href="https://github.com/Mohsen-Parsa11/Real-State-Project" className="border border-sky-400 rounded shadow shadow-sky-400 relative group">
                <img
                  src={realstate}
                  alt=""
                  className="w-full object-cover rounded lg:h-75"
                />
                <div className="flex justify-center items-end absolute top-0 bottom-0 left-0 right-0 z-50 ">
                <div className=" group-hover:bg-black-500 group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent transition duration-500 w-full group-hover:opacity-90 h-20 py-3 px-2">
                    <h4 className="text-lg  lg:text-3xl hidden group-hover:block text-white z-20 ">
                      Real State React Project
                    </h4>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Project;
