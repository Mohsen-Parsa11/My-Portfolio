import Container from "../components/Container";

function Education() {
  return (
    <div className="bg-cyan-900 py-28">
      <Container>
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-6xl text-white font-bold text-center">
            My <span className="text-sky-400">Education</span>
          </h2>
          <div className="lg:grid space-y-6 lg:space-y-0 px-8 lg:px-0 grid-cols-3 gap-6 py-6">
            <div className="border border-sky-400 py-4 px-5 rounded shadow shadow-sky-400">
              <h4 className="text-2xl text-sky-400">Diploma Degree</h4>
              <p className="text-cyan-200">
                Jebrayeel High School, Afghanistan High School Diploma
              </p>
              <p className="text-cyan-200">Graduated: 2022</p>
            </div>
            <div className="border border-sky-400 py-4 px-5 rounded shadow shadow-sky-400">
              <h4 className="text-2xl text-sky-400">Univercity</h4>
              <p className="text-cyan-200">
                Herat Univercity of Afghanistan, Computer Science
                department, Bachelor's degree
              </p>
              <p className="text-cyan-200">
                started: 2023
              </p>
            </div>
            <div className="border border-sky-400 py-4 px-5 rounded shadow shadow-sky-400">
              <h4 className="text-2xl text-sky-400">English Diploma</h4>
              <p className="text-cyan-200">
                Adib English Language Center
                <p>
                started in :2022
                </p>
                <p>
                Graduated in: 2024
                </p>
                <p>
                English Level: B2
                </p>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Education;
