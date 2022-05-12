import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub} from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <div>
      <AiFillLinkedin />
    </div>
    <div>
      <BsInstagram />
    </div>
    <div>
      <FaGithub />
    </div>
  </div>
);

export default SocialMedia;
