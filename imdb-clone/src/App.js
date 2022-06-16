import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import TopRated from "./Components/TopRated";
import Popular from "./Components/Popular";
import Upcoming from "./Components/Upcoming";
import Footer from "./Components/Footer";
import Details from "./Components/Details";
import Similar from "./Components/Similar";
import ErrorC from "./Components/Error";
import { Provider } from "./Components/Context";
import { createBrowserHistory } from "history";
import TopRatedSeries from "./Components/TopRatedSeries";
import PopularSeries from "./Components/PopularSeries";
import SeriesDetails from "./Components/SeriesDetails";
import SeriesSimilar from "./Components/SeriesSimilar";
import AboutToAir from "./Components/AboutToAir";
import AiringToday from "./Components/AiringToday";
import Search from "./Components/Search";

const newHistory = createBrowserHistory();

function App() {
  return (
    <Provider history={newHistory}>
      <Router>
        <Header />
        <div className="container-fluid px-1">
          <div className="container py-4 px-1">
            <Routes>
              <Route exact path="/" component={<Home />} />
              <Route exact path="/trending" element={<Trending />} />
              <Route exact path="/toprated" element={<TopRated />} />
              <Route exact path="/popular" element={<Popular />} />
              <Route exact path="/upcoming" element={<Upcoming />} />
              <Route exact path="/details/:id" element={<Details />} />
              <Route exact path="/similar/:id" element={<Similar />} />
              <Route exact path="/error" element={<ErrorC />} />
              <Route
                exact
                path="/topRatedSeries"
                element={<TopRatedSeries />}
              />
              <Route exact path="/popularSeries" element={<PopularSeries />} />
              <Route exact path="/airingToday" element={<AiringToday />} />
              <Route exact path="/aboutToAir" element={<AboutToAir />} />
              <Route
                exact
                path="/seriesDetails/:id"
                element={<SeriesDetails />}
              />
              <Route
                exact
                path="/seriesSimilar/:id"
                element={<SeriesSimilar />}
              />
              <Route exact path="/search" element={<Search />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
