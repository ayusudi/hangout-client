import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
// import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
// import reportWebVitals from "./reportWebVitals";

function RequireAuth({ children }) {
  let location = useLocation();
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "chats",
        element: (
          <RequireAuth>
            <ChatPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
