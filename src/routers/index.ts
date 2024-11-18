import HomePage from "../containers/home";

type RouterProps = {
  path: string;
  element: JSX.Element;
};

const Router: Array<RouterProps> = [{ path: "/", element: <HomePage /> }];

export default Router;
