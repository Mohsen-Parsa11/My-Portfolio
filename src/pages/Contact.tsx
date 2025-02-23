import Container from "../components/Container";
import github from "../assets/icons8-git-48.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/email.jpg";
import phone from "../assets/call.jpg";
import linkedin from "../assets/Linkedin.webp";
import slack from "../assets/slack.png";
import discord from "../assets/discord.jpg";
import telegram from "../assets/telegram.jpg";

function Contact() {
  return (
    <div className="bg-cyan-900 py-12">
      <Container>
        <div className="spacey-y-8">
          <h1 className="text-3xl lg:text-6xl text-center text-white font-bold">
            Contact <span className="text-sky-400">Me</span>
          </h1>
          <div className="lg:grid grid-cols-2 mx-auto text-white py-16">
            <div className="mx-auto space-y-6">
              <div className="space-y-2">
                <span className="flex space-x-4 justify-center lg:justify-normal">
                  <a href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1">
                    <img src={email} alt="" className="w-6 h-6 rounded-full" />
                  </a>
                  <span>Email</span>
                </span>
                <p className="text-center lg:text-left">
                  <a href="https://myaccount.google.com/?utm_source=chrome-profile-chooser&pli=1" className="text-blue-500">
                    mohsenp249@gamil.com
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <span className="flex space-x-4 justify-center lg:justify-normal">
                  <a href="#">
                    <img src={phone} alt="" className="w-6 h-6 rounded-full" />
                  </a>{" "}
                  <span>Phone</span>
                </span>
                <p className="text-blue-500 text-center lg:text-left">
                  0787045344
                </p>
              </div>
              <div className="space-y-2">
                <span className="flex space-x-2 justify-center lg:justify-normal lg:mb-8 relative ">
                  <a href="https://www.linkedin.com/in/mohsen-parsa/">
                    <img
                      src={linkedin}
                      alt=""
                      className="w-12 h-6 rounded-full lg:absolute -left-3"
                    />
                  </a>
                  <span className="lg:absolute lg:right-[184px]">Linkedin</span>
                </span>
                <p className="text-center lg:text-left">
                  <a href="https://www.linkedin.com/in/mohsen-parsa/" className="text-blue-500">
                  https://www.linkedin.com/in/mohsen-parsa/
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <span className="flex space-x-3 justify-center lg:justify-normal lg:mb-8 relative">
                  <a href="https://slack/mohsen?parsa">
                    <img
                      src={slack}
                      alt=""
                      className="w-12 h-6  rounded-full lg:absolute -left-3"
                    />
                  </a>{" "}
                  <span className="lg:absolute lg:right-[204px]">Slack</span>
                </span>
                <p className="text-center lg:text-left">
                  <a href="https://slack/mohsen?parsa" className="text-blue-500">
                  https://slack/mohsen?parsa
                  </a>
                </p>
              </div>
            </div>

            <div className="mx-auto space-y-6 mt-6 lg:mt-0">
              <div className="space-y-2">
                <span className="flex space-x-4 justify-center lg:justify-normal">
                  <a href="https://github.com/Mohsen-Parsa11">
                    <img src={github} alt="" className="w-6 h-6 " />
                  </a>{" "}
                  <span>github</span>
                </span>
                <p className="text-center lg:text-left">
                  <a href="https://github.com/Mohsen-Parsa11" className="text-blue-500">
                  https://github.com/Mohsen-Parsa11
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <span className="flex space-x-4 justify-center lg:justify-normal">
                  <a href="https://discord.com/invite/mohsen085818">
                    <img
                      src={discord}
                      alt=""
                      className="w-6 h-6  rounded-full"
                    />
                  </a>{" "}
                  <span>Discord</span>
                </span>
                <p className="text-center lg:text-left">
                  <a href="https://discord.com/invite/mohsen085818" className="text-blue-500">
                  https://discord.com/invite/mohsen085818
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <span className="flex space-x-4 justify-center lg:justify-normal">
                  <a href="https://telegram/@mohsenpab">
                    <img
                      src={telegram}
                      alt=""
                      className="w-6 h-6  rounded-full"
                    />
                  </a>
                  <span>Telegram</span>
                </span>
                <p className="text-center lg:text-left">
                  <a href="https://telegram/@mohsenpab" className="text-blue-500">
                    https://telegram/@mohsenpab
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <span className="flex space-x-4 justify-center lg:justify-normal">
                  <a href="https://whatsapp/@mohsenpab">
                    <img src={whatsapp} alt="" className="w-6 h-6" />
                  </a>
                  <span>whatsapp</span>
                </span>
                <p className="text-center lg:text-left">
                  <a href="https://whatsapp/@mohsenpab" className="text-blue-500">
                  https://whatsapp/@mohsenpab
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
