import fb_icon from "../assets/images/fb_icon.svg";
import gh_icon from "../assets/images/gh_icon.svg";
import ig_icon from "../assets/images/ig_icon.svg";
import twt_icon from "../assets/images/twt_icon.svg";

export default () => (
  <footer className="icons">
    <a href="https://facebook.com/luckwei" target="_blank">
      <img src={fb_icon} />
    </a>
    <a href="https://twitter.com/luckweicheong" target="_blank">
      <img src={twt_icon} />
    </a>
    <a href="https://instagram.com/cheongluckwei/" target="_blank">
      <img src={ig_icon} />
    </a>
    <a href="https://github.com/luckwei/" target="_blank">
      <img src={gh_icon} />
    </a>
  </footer>
);
