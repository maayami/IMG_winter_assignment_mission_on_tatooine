import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import Club from "./club/club";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => (
      <div className="clubs-container">
        {data.map((data, index) => (
          <Club key={index} />
        ))}
      </div>
    ),
  },
  {
    path: "/explore",
    main: () => <h2>Explore</h2>,
  },
  {
    path: "/user_admin_clubs",
    main: () => <h2>Your admin clubs</h2>,
  },
];

export default function Home() {
  return (
    <Router>
      <div
        className="main-container text-white"
        style={{ backgroundColor: "black" }}
      >
        <div>
          <nav> this is nav babes</nav>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 bg-color-secondary">
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/explore">Explore</Link>
                </li>
                <li>
                  <Link to="/user_admin_clubs">Your clubs</Link>
                </li>
              </ul>
            </div>

            <div className className="col-10 bg-color-primary">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
            <div className="col-1 bg-color-secondary"></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

const data = [1, 2, 3, 4, 5, 2,3,3,3,3,3,3,3,3,3,];
