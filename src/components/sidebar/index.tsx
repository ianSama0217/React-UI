import React from "react";
import { Link } from "react-router-dom";

type menuItem = {
  icon: string; // img src
  title: string;
  path?: string;
  children?: Array<menuItem>;
};

type SidebarProps = {
  menu: Array<menuItem>;
};

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  return (
    <div className="sidebar">
      <ul>
        {menu.map((item) => {
          return item.children ? (
            <li key={item.title}>
              <ul>
                <li>{item.title}</li>
                {item.children.map((child) => (
                  <li key={child.title}>
                    <Link to={child.path || "#"}>{child.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.title}>
              <Link to={item.path || "#"}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
