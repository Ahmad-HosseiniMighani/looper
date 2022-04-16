import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import "flatpickr/dist/themes/airbnb.css";
import "easymde/dist/easymde.min.css";
import './App.css'; // this is Main Looper theme (light theme css)
// import './css/dark-theme.css'; // this should be dark mode but not fixed
import './css/rtl.css' // this is when we're loading RTL theme (its important to load after light and dark css)
import "./js/functions"; // its Looper theme Functions... you need to extract or learn functions you need to implement on the theme... not all of em are neccessary so take your time with it.
import NavBar from './components/navbar';
import SideBar from './components/sidebar';
import DashBoard from './components/dashBoard';
import ClientsTemplate from './components/clientsTemplate';
import Teams from './components/teams';
import TeamOverview from './components/team/teamOverview';
import TeamFeeds from './components/team/teamFeeds';
import TeamProjects from './components/team/teamProjects';
import TeamMembers from './components/team/teamMembers';
import ProjectOverview from './components/project/projectOverview';
import ProjectBoard from './components/project/projectBoard';
import General from './components/general';
import Calender from './components/calender';
import InvoiceList from './components/invoices/invoiceList';
import Invoice from './components/invoices/invoice';

function App() {
  return (
    <div className="app">
      {/* <ToastContainer /> */}
      <NavBar/>
      <SideBar/>
      {/* this container is the main container for all components except above this line components which is Navbar and Sidebar for now */}
      <main className="app-main">
        <Switch>
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/clients" exact component={ClientsTemplate} />
          <Route path="/teams" exact component={Teams} />

          <Route path="/teamoverview" exact component={TeamOverview} />
          <Route path="/teamfeeds" exact component={TeamFeeds} />
          <Route path="/teamprojects" exact component={TeamProjects} />
          <Route path="/teammembers" exact component={TeamMembers} />

          <Route path="/projectoverview" exact component={ProjectOverview} />
          <Route path="/projectboard" exact component={ProjectBoard} />

          <Route path="/calendar" exact component={Calender} />

          <Route path="/invoices" exact component={InvoiceList} />
          <Route path="/invoice" exact component={Invoice} />

          <Route path="/general" exact component={General} />
          <Route path="/" component={DashBoard} />
        </Switch>
      </main>
    </div>
  );
}
// this is part of your todos
// Fix all Canvases | 80%
// Fix all Dropdowns based on <ProjectOverview/> ()
// fix all mx ml or etc on rtl.css and components....(Since there was a small change in the way css would work you might need to check for bugs)
export default App;
