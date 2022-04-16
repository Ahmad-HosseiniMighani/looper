import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import profPic from "../imgs/profile.jpg";

class SideBar extends Component {
    state = {
      sideBarList: [],
      sideBarData: [],
    }
    async componentDidMount(){
      try{
        const sideBarList = [
          {"_id": 0, "title":""},
          {"_id": 1, "title":"Interface"}
      ]
        // console.log(sideBarList)
        // child in this data is sub menu , and can be nested 
        const sideBarData = [
          {"_id": 0, "title": "Dashboard", "SideBarList_id": 0, "icon": "fas fa-home", "badgeSubtle": null, "badgeNew": false, "link": "dashboard", "childs": []},
          {"_id": 1, "title": "App Pages", "SideBarList_id": 0, "icon": "far fa-file", "badgeSubtle": null, "badgeNew": true, "link": "#", "childs": [
            {"_id": 2, "title": "Clients", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "clients", "childs": []},
            {"_id": 3, "title": "Teams", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "teams", "childs": []},
            {"_id": 4, "title": "Team", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
              {"_id": 5, "title": "Overview", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "teamoverview", "childs": []},
              {"_id": 6, "title": "Feeds", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "teamfeeds", "childs": []},
              {"_id": 7, "title": "teamprojects", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Projects", "childs": []},
              {"_id": 8, "title": "teammembers", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Members", "childs": []}
            ]},
            {"_id": 9, "title": "Project", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
              {"_id": 10, "title": "Overview", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "projectoverview", "childs": []},
              {"_id": 11, "title": "Board", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "projectboard", "childs": []},
              {"_id": 12, "title": "Gantt View", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "projectgantt", "childs": []}
            ]},
            {"_id": 13, "title": "Calendar", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "calendar", "childs": []},
            {"_id": 14, "title": "Invoices", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
              {"_id": 15, "title": "List", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "invoices", "childs": []},
              {"_id": 16, "title": "Details", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "invoice", "childs": []}
            ]},
            {"_id": 17, "title": "Messages", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "messages", "childs": []},
            {"_id": 18, "title": "Conversations", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Conversations", "childs": []}
          ]},
          {"_id": 19, "title": "Auth", "SideBarList_id": 0, "icon": "fas fa-wrench", "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
            {"_id": 20, "title": "Coming Soon v1", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Coming-Soon-v1", "childs": []},
            {"_id": 21, "title": "Coming Soon v2", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Coming-Soon-v2", "childs": []},
            {"_id": 22, "title": "Cookie Consent", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "CookieConsent", "childs": []},
            {"_id": 23, "title": "Empty State", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "EmptyState", "childs": []},
            {"_id": 24, "title": "Error Page v1", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Error-Page-v1", "childs": []},
            {"_id": 25, "title": "Error Page v2", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Error-Page-v2", "childs": []},
            {"_id": 26, "title": "Error Page v3", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Error-Page-v3", "childs": []},
            {"_id": 27, "title": "Maintenance", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Maintenance", "childs": []},
            {"_id": 28, "title": "Page Message", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "PageMessage", "childs": []},
            {"_id": 29, "title": "Session Timeout", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "SessionTimeout", "childs": []},
            {"_id": 30, "title": "Sign In v1", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Sign-In-v1", "childs": []},
            {"_id": 31, "title": "Sign In v2", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Sign-In-v2", "childs": []},
            {"_id": 32, "title": "Sign Up", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "SignUp", "childs": []},
            {"_id": 33, "title": "Recovery Username", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "RecoveryUsername", "childs": []},
            {"_id": 34, "title": "Recovery Password", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "RecoveryPassword", "childs": []},
            {"_id": 35, "title": "Screen Locked", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "ScreenLocked", "childs": []}
          ]},
          {"_id": 36, "title": "User", "SideBarList_id": 0, "icon": "fas fa-user", "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
            {"_id": 37, "title": "Profile", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Profile", "childs": []},
            {"_id": 38, "title": "Activities", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Activities", "childs": []},
            {"_id": 39, "title": "Teams", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Teams", "childs": []},
            {"_id": 40, "title": "Projects", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Projects", "childs": []},
            {"_id": 41, "title": "Tasks", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Tasks", "childs": []},
            {"_id": 42, "title": "Profile Settings", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "ProfileSettings", "childs": []},
            {"_id": 43, "title": "Account", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Account Settings", "childs": []},
            {"_id": 44, "title": "Billing", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Billing Settings", "childs": []},
            {"_id": 45, "title": "Notification", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Notification Settings", "childs": []}
          ]},
          {"_id": 46, "title": "Layouts", "SideBarList_id": 0, "icon": "fas fa-columns", "badgeSubtle": 4, "badgeNew": false, "link": "#", "childs": [
            {"_id": 47, "title": "Blank Page", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "BlankPage", "childs": []},
            {"_id": 48, "title": "Header no Search", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "HeadernoSearch", "childs": []},
            {"_id": 49, "title": "Horizontal Menu", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "HorizontalMenu", "childs": []},
            {"_id": 50, "title": "Full Width", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "FullWidth", "childs": []},
            {"_id": 51, "title": "Page Navs", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "PageNavs", "childs": []},
            {"_id": 52, "title": "Page Cover", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "PageCover", "childs": []},
            {"_id": 53, "title": "Cover Image", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "CoverImage", "childs": []},
            {"_id": 54, "title": "Page Sidebar", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "PageSidebar", "childs": []},
            {"_id": 55, "title": "Sidebar Fluid", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "SidebarFluid", "childs": []},
            {"_id": 56, "title": "Sidebar Hidden", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "SidebarHidden", "childs": []},
            {"_id": 57, "title": "Custom", "SideBarList_id": 0, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Custom", "childs": []}
          ]},
          {"_id": 58, "title": "Landing Page", "SideBarList_id": 0, "icon": "fas fa-rocket", "badgeSubtle": null, "badgeNew": false, "link": "LandingPage", "childs": []},
          {"_id": 59, "title": "Components", "SideBarList_id": 1, "icon": "fas fa-puzzle-piece", "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
            {"_id": 60, "title": "General", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "General", "childs": []},
            {"_id": 61, "title": "icon", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "icon", "childs": []},
            {"_id": 62, "title": "Rich Media", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "RichMedia", "childs": []},
            {"_id": 63, "title": "List Views", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "ListViews", "childs": []},
            {"_id": 64, "title": "Sortable & Nestable", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "SortableAndNestable", "childs": []},
            {"_id": 65, "title": "Activity", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Activity", "childs": []},
            {"_id": 66, "title": "Steps", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Steps", "childs": []},
            {"_id": 67, "title": "Tasks", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Tasks", "childs": []},
            {"_id": 68, "title": "Metrics", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Metrics", "childs": []}
          ]},
          {"_id": 69, "title": "Forms", "SideBarList_id": 1, "icon": "fas fa-pen", "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
            {"_id": 70, "title": "Basic Elements", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "BasicElements", "childs": []},
            {"_id": 71, "title": "Autocompletes", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Autocompletes", "childs": []},
            {"_id": 72, "title": "Pickers", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Pickers", "childs": []},
            {"_id": 73, "title": "Editors", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Editors", "childs": []}
          ]},
          {"_id": 74, "title": "Tables", "SideBarList_id": 1, "icon": "fas fa-table", "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
            {"_id": 75, "title": "Basic Table", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "BasicTable", "childs": []},
            {"_id": 76, "title": "Datatables", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Datatables", "childs": []},
            {"_id": 77, "title": "Responsive Datatables", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "ResponsiveDatatables", "childs": []},
            {"_id": 78, "title": "Filter Columns", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Filter Columns", "childs": []}
          ]},
          {"_id": 79, "title": "Collections", "SideBarList_id": 1, "icon": "fas fa-chart-bar", "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
            {"_id": 80, "title": "Chart.js", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
              {"_id": 81, "title": "Line", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Line", "childs": []},
              {"_id": 82, "title": "Bar", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Bar", "childs": []},
              {"_id": 83, "title": "Radar & Scatter", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "RadarAndScatter", "childs": []},
              {"_id": 84, "title": "Others", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Others", "childs": []}
            ]},
            {"_id": 85, "title": "Flot", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "Flot", "childs": []},
            {"_id": 86, "title": "Inline Charts", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "InlineCharts", "childs": []},
            {"_id": 87, "title": "Vector Map", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "VectorMap", "childs": []}
          ]},
          {"_id": 88, "title": "Level Menu", "SideBarList_id": 1, "icon": "fas fa-list", "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
            {"_id": 89, "title": "Menu Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "MenuItem", "childs": []},
            {"_id": 90, "title": "Menu Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
              {"_id": 91, "title": "Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "ChildItem", "childs": []},
              {"_id": 92, "title": "Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "ChildItem", "childs": []},
              {"_id": 93, "title": "Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "#", "childs": [
                {"_id": 94, "title": "Grand Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "GrandChildItem", "childs": []},
                {"_id": 95, "title": "Grand Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "GrandChildItem", "childs": []},
                {"_id": 96, "title": "Grand Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "GrandChildItem", "childs": []},
                {"_id": 97, "title": "Grand Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "GrandChildItem", "childs": []}
              ]},
              {"_id": 98, "title": "Child Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "ChildItem", "childs": []}
            ]},
            {"_id": 99, "title": "Menu Item", "SideBarList_id": 1, "icon": null, "badgeSubtle": null, "badgeNew": false, "link": "MenuItem", "childs": []}
          ]}
        ]
        this.setState({sideBarList,sideBarData})
      }catch(e){
        // do something when you catch an error (turn state 1 step back)
      }
    }
    handleCreateMenu(data,sideBarListItem_id){
      // console.log(data)
        return data.map(d=>(
          <React.Fragment>
            {d.childs.length>0 && d.SideBarList_id == sideBarListItem_id && (// if it have any child then:
              <li className="menu-item has-child">
                <Link to="/" className="menu-link">
                  {d.icon && <span className={"menu-icon "+d.icon}></span>} <span className="menu-text">{d.title}</span> {d.badgeNew && <span className="badge badge-warning">New</span>}{d.badgeSubtle != null && <span className="badge badge-subtle badge-success">+{d.badgeSubtle}</span>}
                </Link>
                <ul className="menu">
                  {this.handleCreateMenu(d.childs,sideBarListItem_id)}
                </ul>
              </li>
            )}
            {d.childs.length==0 && d.SideBarList_id == sideBarListItem_id && ( // if it dont have any child then:
              <li className="menu-item">
                <NavLink to={"/"+d.link} className="menu-link">
                  {d.icon && <span className={"menu-icon "+d.icon}></span>} <span className="menu-text">{d.title}</span> {d.badgeNew && <span className="badge badge-warning">New</span>}{d.badgeSubtle != null && <span className="badge badge-subtle badge-success">+{d.badgeSubtle}</span>}
                </NavLink>
              </li>
            )}
          </React.Fragment>
        ))
    }
    render() { 
      const {sideBarList,sideBarData} = this.state
        return (
          <aside className="app-aside app-aside-expand-md app-aside-light">
            <div className="aside-content">
              <header className="aside-header d-block d-md-none">
                <button className="btn-account collapsed" type="button" aria-expanded="false" data-bs-toggle="collapse" data-bs-target="#dropdown-aside">
                  <span className="user-avatar user-avatar-lg">
                    <img src={profPic} alt=""/>
                  </span>
                  <span className="account-icon">
                    <span className="fa fa-caret-down fa-lg"></span>
                  </span>
                  <span className="account-summary">
                    <span className="account-name">Beni Arisandi</span>
                  <span className="account-description">Marketing Manager</span></span>
                </button>
                <div id="dropdown-aside" className="dropdown-aside collapse">
                  <div className="pb-3">
                    <a className="dropdown-item" href="user-profile.html">
                      <span className="dropdown-icon oi oi-person"></span> Profile
                    </a>
                    <a className="dropdown-item" href="auth-signin-v1.html">
                      <span className="dropdown-icon oi oi-account-logout"></span> Logout
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Help Center</a>
                    <a className="dropdown-item" href="#">Ask Forum</a>
                    <a className="dropdown-item" href="#">Keyboard Shortcuts</a>
                  </div>
                </div>
              </header>
                <div className="aside-menu overflow-hidden">
                  <nav id="stacked-menu" className="stacked-menu stacked-menu-has-collapsible">
                    <ul className="menu">
                      {/* Iterating in List item to get the headings and then go for menus
                          checks which menus belong to which heading and place it there
                          for menus when it found which heading it blongs to it check if the menu itself has child and for child until there is no child
                      */}
                      {sideBarList.map((sideBarListItem)=>(
                        <React.Fragment>
                          {sideBarListItem.title!= "" && <li className="menu-header" key={"sideBarListItem"+sideBarListItem._id}>{sideBarListItem.title} </li>}
                            {this.handleCreateMenu(sideBarData,sideBarListItem._id)}
                        </React.Fragment>
                      ))}
                    </ul>
                  </nav>
                </div>
              <footer className="aside-footer border-top p-2">
                <button className="btn btn-light btn-block text-primary" data-toggle="skin"><span className="d-compact-menu-none">Night mode</span> <i className="fas fa-moon ml-1"></i></button>
              </footer>
            </div>
          </aside>
        );
    }
}
 
export default SideBar;