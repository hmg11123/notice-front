import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../Routes/layouts/Header";
import Content from "../Routes/layouts/Content";
import Footer from "../Routes/layouts/Footer";

const AppRouter = () => {
 return (
  <Router>
   <Route path="/" component={Header} />
   <Route path="/" component={Content} />
   <Route path="/" component={Footer} />
  </Router>
 );
};

export default AppRouter;
