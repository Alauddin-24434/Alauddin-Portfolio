import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import BlogDetailsPage from "../pages/BlogDetailsPage/BlogDetailsPage";

import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/blogDetails",
    element: <BlogDetailsPage />,
  },
 
  {
    path: "/project/:id",
    element: <ProjectDetails/>,
  },
 
 
]);
