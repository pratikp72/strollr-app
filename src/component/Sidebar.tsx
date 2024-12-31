import Link from "next/link";
import React from "react";
import DashboardIcon from "../icons/dashboard.icon";
import ListingIcon from "../icons/listing.icon";
import GroupsIcon from "../icons/groups.icon";
import SettingIcon from "../icons/setting.icon";
import HelpIcon from "@/icons/help.icon";
import LogoutIcon from "@/icons/logout.icon";

const Sidebar: React.FC = () => {
  const [active, setActive] = React.useState(0);

  const changeSidebar = (index: number) => {
    setActive(index);
  }
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="/strollr.svg" alt="strollr" />
      </div>
      <ul className="menu">
        <li>
          <Link href="#" onClick={() => changeSidebar(0)}>
            <div className={`menu-item ${active == 0 ? 'active': ''}`}>
              <DashboardIcon color={active == 0 ? '#1A631B' : '#fff'} />
              Dashboard
            </div>
          </Link>
        </li>
        <li>
          <Link href="#" onClick={() => changeSidebar(1)}>
            <div className={`menu-item ${active == 1 ? 'active': ''}`} >
              <ListingIcon color={active == 1 ? '#1A631B' : '#fff'} />
              Listing Management
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={`menu-item ${active == 2 ? 'active': ''}`} onClick={() => changeSidebar(2)}>
              <GroupsIcon color={active == 2 ? '#1A631B' : '#fff'} />
              User Management
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={`menu-item ${active == 3 ? 'active': ''}`} onClick={() => changeSidebar(3)}>
              <SettingIcon color={active == 3 ? '#1A631B' : '#fff'} />
              Settings
            </div>
          </Link>
        </li>
      </ul>

      <div className="spacer"></div>

      <ul className="menu menu-bottom">
        <li>
          <Link href="#">
            <div className={`menu-item ${active == 4 ? 'active': ''}`} onClick={() => changeSidebar(4)}>
              <HelpIcon color={active == 4 ? '#1A631B' : '#fff'} />
              Help
            </div>
          </Link>
        </li>
        <li>
          <Link href="#">
            <div className={`menu-item ${active == 5 ? 'active': ''}`} onClick={() => changeSidebar(5)}>
              <LogoutIcon color={active == 5 ? '#1A631B' : '#fff'} />
              Logout
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
