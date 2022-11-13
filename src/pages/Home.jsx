import { v4 as uuidv4 } from "uuid";
import liIcon from "../assets/images/li_icon.svg";
import mailIcon from "../assets/images/mail_icon.svg";
import myPhoto from "../assets/images/my_photo.webp";

import profileData from "../data/profile";

export default () => {
  const infoSection = Object.entries(profileData.info).map(([key, value]) => (
    <div key={uuidv4()}>
      <h2 className="infoTitle">{key}</h2>
      <p className="infoText">{value}</p>
    </div>
  ));
  return (
    <>
      <img src={myPhoto} />
      <main className="home">
        <h1 className="name">{profileData.name}</h1>
        <h2 className="title">{profileData.title}</h2>
        <h2 className="website">{profileData.website}</h2>
        <div className="connect">
          <a className="mailBtn" href={`mailto:${profileData.emailAddress}`}>
            <img src={mailIcon} />
            Email
          </a>
          <a className="liBtn" href={profileData.linkedInLink} target="_blank">
            <img src={liIcon} />
            LinkedIn
          </a>
        </div>
        <div className="info">{infoSection}</div>
      </main>
    </>
  );
};
