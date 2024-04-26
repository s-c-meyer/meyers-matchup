import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "../navigation-bar";
import { Row } from "react-bootstrap";
import PregameView from "../pregame-view/pregame-view";
import ProfileView from "../profile-view";

export default function MainView() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/"
            element={
              <PregameView />
            }
          />
          <Route
            path="/profile"
            element={
              <ProfileView />
            }
          />
        </Routes>
      </Row>
    </BrowserRouter>
  );
}