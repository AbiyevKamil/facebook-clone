import React from "react";
import Story from "./Story";
import image from "../images/pp.jpg";
import "../styles/StoryReel.css";

function StoryReel() {
  return (
    <div className="story-reel">
      <Story image={image} profileSrc={image} title="Kamil Abiyev" />
      <Story image={image} profileSrc={image} title="Kamil Abiyev" />
      <Story image={image} profileSrc={image} title="Kamil Abiyev" />
      <Story image={image} profileSrc={image} title="Kamil Abiyev" />
      <Story image={image} profileSrc={image} title="Kamil Abiyev" />
    </div>
  );
}

export default StoryReel;
