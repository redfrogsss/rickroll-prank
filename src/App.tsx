import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import { createContext } from "react";
import { PagesContext } from "./contexts/PageContext";

const pages = [
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/kahoot-question",
  //   element: <KahootQuestion />,
  // }
];

const router = createBrowserRouter(pages);

function App() {
  return <PagesContext.Provider value={pages}>
    <RouterProvider router={router} />
  </PagesContext.Provider>
}

export default App
