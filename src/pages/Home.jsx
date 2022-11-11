import liIcon from "../assets/images/li_icon.svg";
import mailIcon from "../assets/images/mail_icon.svg";
import myPhoto from "../assets/images/my_photo.webp";
import HomeCSS from "../styles/pages/Home.module.css"

export default () => (
  <>
    <img className={HomeCSS.picture} src={myPhoto} />
    <main className={HomeCSS.profile}>
      <h1 className={HomeCSS.name}>Luckwei Cheong</h1>
      <h3 className={HomeCSS.title}>Data Science Graduate | React Student</h3>
      <h4 className={HomeCSS.website}>luckwei.github.io</h4>
      <div className={HomeCSS.connect}>
        <a className={HomeCSS.mail_btn} href="mailto:luckweicheong@gmail.com">
          <img src={mailIcon} />
          Email
        </a>
        <a
          className={HomeCSS.li_btn}
          href="https://www.linkedin.com/in/luck-wei-cheong/"
          target="_blank"
        >
          <img src={liIcon} />
          LinkedIn
        </a>
      </div>
      <div className={HomeCSS.info}>
        <h3>About</h3>
        <p>
          I'm a Data Science Masters Graduate who loves coding and is interested
          to learn web-development to increase my employability. I've always
          found React to be daunting, not being very experienced in JS, but I
          decided to take up the challenge anyways! With that, I've been
          surprised how well I've caught up and Scrimba has been an amazing
          platform for me to learn :D
        </p>
        <h3>Interests</h3>
        <p>
          Other than coding and programming, I enjoy dancing! My main styles of
          interest are popping and hip hop. I also perform and cover Kpop
          choreographies with my friends in the Melbourne community!
        </p>
      </div>
    </main>
  </>
);