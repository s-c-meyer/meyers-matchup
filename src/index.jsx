// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import Root from "./components/root"
// import ErrorPage from './components/error-page';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import ProfileView from './components/profile-view';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     // children: [
//     //   {
//     //     path: 'profile',
//     //     element: <ProfileView />
//     //   }
//     // ]
//   },
//   {
//     path: 'profile',
//     element: <ProfileView />
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import { createRoot } from 'react-dom/client';
import MainView from './components/main-view/main-view.jsx';
import Container from "react-bootstrap/Container";

//Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

//Main component (will eventually use all the others)
const MatchupApplication = () => {
  return (
    <Container fluid>
      <MainView />
    </Container>
  );
};

//Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

//Tells React to render your app in the root DOM element
root.render(<MatchupApplication />);