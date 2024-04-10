import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DevInfo from "../DevInfo";
import SearchDev from "../SearchDev";

export const router = createBrowserRouter([
  {
    path: '/sign',
    element: <SearchDev />,
  },
  {
    path: '/devInfo',
    element: <DevInfo />,
  },
])