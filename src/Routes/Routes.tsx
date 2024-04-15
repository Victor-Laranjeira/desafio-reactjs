import { createBrowserRouter } from "react-router-dom";
import DevInfo from "../DevInfo";
import SearchDev from "../SearchDev";

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <SearchDev />,
  },
  {
    path: '/perfil',
    element: <DevInfo />
  },
], {
  basename: '/',
});