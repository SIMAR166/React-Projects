
import React from "react";
import "./Card.scss";

const Card = ({
  name,
  role,
  bio,
  avatar,
  coverImage,
  stats,
  social,
}) => {

  // number formatter
  const formatNumber = (num) => {
    return num >= 1000 ? (num / 1000).toFixed(1) + "K" : num;
  };

  return (
    <div className="card">

      {/* TOP */}
      <div className="card-top">
        <div className="bgimage">
          <img src={coverImage} alt="cover" />
        </div>

        <div className="profileimage">
          <img src={avatar} alt="profile" />

        </div>
      </div>

      {/* MIDDLE */}
      <div className="card-middle">
        <h1>{name}</h1>
        <p className="role">{role}</p>
        <p className="bio">{bio}</p>
      </div>

      {/* STATS */}
      <div className="card-bottom">
        <div>
          <h2>{formatNumber(stats.likes)}</h2>
          <span>Likes</span>
        </div>
        <div>
          <h2>{stats.posts}</h2>
          <span>Posts</span>
        </div>
        <div>
          <h2>{formatNumber(stats.views)}</h2>
          <span>Views</span>
        </div>
      </div>

      {/* SOCIAL */}
      <div className="logos">
        <a href={social.instagram} target="_blank">
          <i className="ri-instagram-line"></i>
        </a>
        <a href={social.twitter} target="_blank">
          <i className="ri-twitter-x-line"></i>
        </a>
        <a href={social.threads} target="_blank">
          <i className="ri-threads-line"></i>
        </a>
      </div>

    </div>
  );
};

export default Card;
