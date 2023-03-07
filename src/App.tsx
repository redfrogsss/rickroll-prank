import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import { PagesContext } from "./contexts/PageContext";
import { RickrollContext } from "./contexts/RickrollContext";
import KahootQuestion from "./pages/KahootQuestion";

const rickroll = [
  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "https://youtu.be/GtL1huin9EE",
  "https://youtu.be/mW61VTLhNjQ",
  "https://youtu.be/-DdkOB0htO0",
  "https://youtu.be/lpiB2wMc49g",
]

const pages = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/kahoot-question",
    element: <KahootQuestion />,
  }
];

const router = createBrowserRouter(pages);

function App() {
  return <PagesContext.Provider value={pages}>
    <RickrollContext.Provider value={rickroll}>
    <RouterProvider router={router} />
    </RickrollContext.Provider>
  </PagesContext.Provider>
}

export default App
