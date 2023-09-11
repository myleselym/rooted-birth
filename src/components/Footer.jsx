import ContactForm from "./ContactForm";
import { SocialIcon } from "react-social-icons";
const Footer = () => {
  return (
    <div className="py-8 bg_sky">
      <ContactForm />
      <div className="pb-4 text-center">
        <SocialIcon
          bgColor="#58603a"
          style={{ height: "2.5rem", width: "2.5rem" }}
          url="https://instagram.com/rooted.birth/"
        />
      </div>
      <p className="text-center text_pearl">{`Rooted Birth Services ©${new Date().getFullYear()}`}</p>
    </div>
  );
};

export default Footer;
