import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./Home";
import Cart from "./Cart";

const Root = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />

        <Redirect to="/" />
      </Switch>
    </Layout>
  );
};

export default Root;
