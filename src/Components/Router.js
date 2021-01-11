import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";

const router = () => {
  return (
    <Router>
      <>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
      </>
    </Router>
  )
}

export default router;