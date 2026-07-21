import { createBrowserRouter } from "react-router";

import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Topics from "../pages/Topics/Topics";
import Theory from "../pages/Theory/Theory";
import InterviewQuestions from "../pages/InterviewQuestions/InterviewQuestions";
import ProblemSolving from "../pages/ProblemSolving/ProblemSolving";
import ProblemDetails from "../pages/ProblemDetails/ProblemDetails";

import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "topics",
        element: (
          <PrivateRoute>
            <Topics />
          </PrivateRoute>
        ),
      },

      // Dynamic Theory Route
      {
        path: "topics/:topic/theory",
        element: (
          <PrivateRoute>
            <Theory />
          </PrivateRoute>
        ),
      },
      {
  path: "topics/:topic/questions",
  element: (
    <PrivateRoute>
      <InterviewQuestions />
    </PrivateRoute>
  ),
},
{
  path: "topics/:topic/problem-solving",
  element: (
    <PrivateRoute>
      <ProblemSolving />
    </PrivateRoute>
  ),
},
{
  path: "problem/:topic/:id",
  element: (
    <PrivateRoute>
      <ProblemDetails />
    </PrivateRoute>
  ),
},
    ],
  },
]);

export default router;