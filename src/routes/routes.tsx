
import { createBrowserRouter } from 'react-router-dom'
import AboutMePage from '../presentation/pages/about_me/about_me_page';
import BriefcasePage from '../presentation/pages/briefcase/briefcase_page';
import ErrorPage from '../presentation/pages/error/error_page';
import HomePage from '../presentation/pages/home/home_page';
import TechnologiesPage from '../presentation/pages/technologies/technologies_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <AboutMePage />,
      },
      {
        path: "/briefcase",
        element: <BriefcasePage />,
      },
      {
        path: "/technologies",
        element: <TechnologiesPage />,
      },
    ],
  },
]);

export default router