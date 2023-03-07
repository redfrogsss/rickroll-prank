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
  "https://youtu.be/hvL1339luv0",
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

const GitHubLink = () => {

  const url = "https://github.com/redfrogsss/rickroll-prank";

  return (
    <a href={url} target="_blank" title="Source code of this project" className="absolute top-0 right-0 z-50">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 250 250" fill="#fff">
        <path d="M0 0l115 115h15l12 27 108 108V0z" fill="#151513" />
        <path  d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16" fill="#fff"/>
        <path  d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z" fill="#fff"/>
      </svg>
    </a>
  )

}

function App() {
  return <PagesContext.Provider value={pages}>
    <RickrollContext.Provider value={rickroll}>
      <GitHubLink />
      <RouterProvider router={router} />
    </RickrollContext.Provider>
  </PagesContext.Provider>
}

export default App
