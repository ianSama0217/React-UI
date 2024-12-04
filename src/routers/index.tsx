import React from "react";
import HomePage from "../containers/home";
import TestPage from "../containers/test";

type RouterProps = {
  path: string;
  element: React.ReactNode;
};

type SidebarItems = {
  icon?: string; // img src
  title: string;
  path?: string;
  children?: Array<SidebarItems>;
};

type SidebarProps = Array<SidebarItems>;

export const RouterLink: Array<RouterProps> = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <HomePage /> },
  { path: "/test", element: <TestPage /> },
  { path: "/components/button", element: <HomePage /> },
  { path: "/components/switch", element: <HomePage /> },
];

export const SidebarData: SidebarProps = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/test", title: "測試區" },
  {
    title: "Components",
    children: [
      { title: "Button", path: "/components/button" },
      { title: "Switch", path: "/components/switch" },
    ],
  },
];
