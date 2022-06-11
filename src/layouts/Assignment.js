import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import WorkloadsNavbar from "components/Navbars/WorkloadsNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/workloads/Dashboard.js";
import Maps from "views/workloads/Maps.js";
import Settings from "views/workloads/Settings.js";
import Tables from "views/workloads/Tables.js";

export default function Assignment() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <WorkloadsNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/workloads/table" exact component={Tables} />
            <Route path="/workloads/create" exact component={Settings} />
            <Route path="/workloads/maps" exact component={Maps} />
            <Route path="/workloads/dashboard" exact component={Dashboard} />
            <Redirect from="/workloads" to="/workloads/table" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
