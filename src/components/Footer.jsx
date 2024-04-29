import { footerLinks, socialMedia } from "../constants";
import { dashboard } from "../assets/images";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="bg-primary p-5">
      <div className="flex justify-between gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start gap-5">
          <a href="/">
            <img src={dashboard} />
          </a>
          <p className="font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="flex items-center gap-5">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-16 max-sm:flex-col max-sm:items-center">
        <div className="flex gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyrigth"
            width={20}
            height={20}
            className="rounded-full"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
