
import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../presentation/pages/home/home_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);

export default router