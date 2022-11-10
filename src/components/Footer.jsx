import fbIcon from "../assets/images/fb_icon.svg";
import ghIcon from "../assets/images/gh_icon.svg";
import igIcon from "../assets/images/ig_icon.svg";
import twtIcon from "../assets/images/twt_icon.svg";
import FooterCSS from "../styles/components/Footer.module.css"

export default () => (
  <footer className={FooterCSS.icons}>
    <a href="https://facebook.com/luckwei" target="_blank">
      <img src={fbIcon} />
    </a>
    <a href="https://twitter.com/luckweicheong" target="_blank">
      <img src={twtIcon} />
    </a>
    <a href="https://instagram.com/cheongluckwei/" target="_blank">
      <img src={igIcon} />
    </a>
    <a href="https://github.com/luckwei/" target="_blank">
      <img src={ghIcon} />
    </a>
  </footer>
);
