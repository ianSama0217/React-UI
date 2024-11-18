import { BrowserRouter } from "react-router-dom";

import {Router as MenuLink} from "./routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        {MenuLink.map(item,index)=>
           <Route key={index} path={item.path} element={item.element} />
        }
        </Routes>
      </BrowserRouter>
      <h1>body</h1>
    </>
  );
}

export default App;
