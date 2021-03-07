import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCirceIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Akash_rajoriya_Facebook_.png/180px-Akash_rajoriya_Facebook_.png"
          alt="Facebook Logo"
        />
        <div className="header-input">
          <SearchIcon />
          <input placeholder={"Search Facebook"} type="text" />
        </div>
      </div>
      <div className="header-center">
        <div className="header-option header-option-active">
          <HomeIcon fontSize={"large"} />
        </div>
        <div className="header-option">
          <FlagIcon fontSize={"large"} />
        </div>
        <div className="header-option">
          <SubscriptionsOutlinedIcon fontSize={"large"} />
        </div>
        <div className="header-option">
          <StorefrontOutlinedIcon fontSize={"large"} />
        </div>
        <div className="header-option">
          <SupervisedUserCirceIcon fontSize={"large"} />
        </div>
      </div>
      <div className="header-right">
        <div className="header-info">
          <Avatar />
          <h4>Kamil Abiyev</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
