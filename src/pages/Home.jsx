import liIcon from "../assets/images/li_icon.svg";
import mailIcon from "../assets/images/mail_icon.svg";
import myPhoto from "../assets/images/my_photo.webp";
import {
  connect,
  info,
  liBtn,
  mailBtn,
  name,
  picture,
  profile,
  title,
  website,
} from "../styles/pages/Home.module.sass";
import {v4 as uuidv4} from 'uuid'

import profileData from "../data/profile";

export default () => {
  const infoSection = Object.entries(profileData.info).map(([key, value]) => (
    <div key={uuidv4()}>
      <h3>{key}</h3>
      <p>{value}</p>
    </div>
  ));
  return (
    <>
      <img className={picture} src={myPhoto} />
      <main className={profile}>
        <h1 className={name}>{profileData.name}</h1>
        <h3 className={title}>{profileData.title}</h3>
        <h4 className={website}>{profileData.website}</h4>
        <div className={connect}>
          <a className={mailBtn} href={`mailto:${profileData.emailAddress}`}>
            <img src={mailIcon} />
            Email
          </a>
          <a className={liBtn} href={profileData.linkedInLink} target="_blank">
            <img src={liIcon} />
            LinkedIn
          </a>
        </div>
        <div className={info}>{infoSection}</div>
      </main>
    </>
  );
};
