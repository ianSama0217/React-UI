import React from "react";
import { Link } from "react-router-dom";

type SidebarItems = {
  icon?: string; // img src
  title: string;
  path?: string;
  children?: Array<SidebarItems>;
};

type SidebarProps = {
  menu: Array<SidebarItems>;
};

const Sidebar: React.FC<SidebarProps> = ({ menu }) => {
  return (
    <div className="sidebar">
      <ul>
        {menu.map((item, index) => (
          <li key={item.title + index}>
            {item.children ? (
              <>
                <div className="title">
                  {item.icon && <img src={item.icon} alt="icon" />}
                  <span>{item.title} </span>
                </div>

                <ul>
                  {item.children?.map((child, i) => (
                    <li key={child.title + i} className="sub-li">
                      <Link to={child.path || "#"} className="link">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={item.path || "#"} className="link">
                {item.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
