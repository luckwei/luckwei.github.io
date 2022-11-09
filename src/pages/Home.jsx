import li_icon from "../assets/images/li_icon.svg";
import mail_icon from "../assets/images/mail_icon.svg";
import my_photo from "../assets/images/my_photo.jpg";

export default () => (
  <>
    <img className="picture" src={my_photo} />
    <main className="profile">
      <h1 className="profile--name">Luckwei Cheong</h1>
      <h3 className="profile--title">Data Science Graduate | React Student</h3>
      <h4 className="profile--website">luckwei.netlify.app</h4>
      <div className="profile--connect">
        <a className="mail_btn" href="mailto:luckweicheong@gmail.com">
          <img src={mail_icon} />
          Email
        </a>
        <a
          className="li_btn"
          href="https://www.linkedin.com/in/luck-wei-cheong/"
          target="_blank"
        >
          <img src={li_icon} />
          LinkedIn
        </a>
      </div>
      <div className="profile--info">
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
          choreographies with my friends in the Melbourne community as a hobby!
        </p>
      </div>
    </main>
  </>
);
