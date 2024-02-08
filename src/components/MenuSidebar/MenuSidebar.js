import React from "react";
import { MenuSidebarStyled, PopoverStyled } from "./MenuSidebarStyled";
import { ReactSVG } from "react-svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Link, useLocation } from "react-router-dom";
import { Image } from "react-bootstrap";

import logo from "../../assets/images/logo.png";
import appoitmentIcon from "../../assets/images/appoitment_icon.svg";
import progressIcon from "../../assets/images/progress_icon.svg";
import wheelIcon from "../../assets/images/wheel_icon.svg";
import settingsIcon from "../../assets/images/settings_icon.svg";
import profileIcon from "../../assets/images/profile_icon.svg";

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>
      <PopoverStyled>
        <div className="profilePopup">
          <ul>
            <Link to="/">
              <li>Logout</li>
            </Link>
          </ul>
        </div>
      </PopoverStyled>
    </Popover.Body>
  </Popover>
);

const MenuSidebar = () => {
  const location = useLocation();
  return (
    <MenuSidebarStyled>
      <div className="logoWrap">
        <Image src={logo} alt="" />
      </div>
      <div className="menuiconWrap">
        <div className="menuItems">
          <Link
            to="/home"
            className={location.pathname === "/home" ? "active" : ""}
          >
            <ReactSVG
              src={appoitmentIcon}
              className="iconItem"
              alt="Home"
              title="Home"
            />
          </Link>
        </div>
        <div className="menuItems">
          <Link
            to="/APIUser"
            className={location.pathname === "/APIUser" ? "active" : ""}
          >
            <ReactSVG
              src={progressIcon}
              alt="API"
              className="iconItem"
              title="API"
            />
          </Link>
        </div>
        <div className="menuItems">
          <ReactSVG
            src={wheelIcon}
            alt="Wheel"
            title="Wheel"
            className="iconItem"
          />
        </div>
        <div className="menuItems">
          <ReactSVG
            src={settingsIcon}
            alt="Setting"
            title="Setting"
            className="iconItem"
          />
        </div>
      </div>
      <div className="profileiconWrap">
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
          <ReactSVG src={profileIcon} alt="icon" title="icon" />
        </OverlayTrigger>
      </div>
    </MenuSidebarStyled>
  );
};

export default MenuSidebar;
