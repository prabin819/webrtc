import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Homea from "./components/Homea.jsx";
import Homeb from "./components/Homeb.jsx";
import About from "./components/About.jsx";
import HomePage from "./pages/Home";
import { SocketProvider } from "./providers/Socket.jsx";
import RoomPage from "./pages/Room.jsx";
import { PeerProvider } from "./providers/Peer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="home" element={<Home />}>
        <Route path="homea" element={<Homea />}></Route>
        <Route path="homeb" element={<Homeb />}></Route>
      </Route>

      <Route path="about" element={<About />}></Route>
      <Route path="homepage" element={<HomePage />}></Route>
      <Route path="/room/:roomId" element={<RoomPage />}></Route>
    </>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "about", element: <About /> },
//       { path: "home", element: <Home /> },
//     ],
//   },
// ]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SocketProvider>
      <PeerProvider>
        <RouterProvider router={router} />
      </PeerProvider>
    </SocketProvider>
  </React.StrictMode>
);
