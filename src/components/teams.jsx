import React, { Component } from 'react';
import team4 from "../imgs/team4.jpg";
import { fixTooltip } from './../js/fixTooltip';
import MyTeams from './teams/myTeams';

class Teams extends Component {
    state = { 
      myTeams: [],
     }
    componentDidMount(){
      fixTooltip(window.bs);
      // API CALL HERE
      try{
        const myTeams = [
          {_id: 1, name: "Creative Division", isOwner: false, logo: team4, updateDate: "1 hour ago", members: "8", clients: "3", projects: "4", isPrivate: true , link: "link"},
          {_id: 2, name: "Bootstrap", isOwner: true, logo: team4, updateDate: "25 minutes ago", members: "15", clients: "28", projects: "40", isPrivate: false , link: "link"},
          {_id: 3, name: "Instagram", isOwner: false, logo: team4, updateDate: "13 hours ago", members: "6", clients: "10", projects: "18", isPrivate: false , link: "link"},
          {_id: 4, name: "Stilearning", isOwner: false, logo: team4, updateDate: "6 days ago", members: "24", clients: "19", projects: "31", isPrivate: true , link: "link"},
          {_id: 5, name: "Sketch", isOwner: true, logo: team4, updateDate: "1 week ago", members: "2", clients: "12", projects: "13", isPrivate: true , link: "link"},
          {_id: 6, name: "Gitlab", isOwner: false, logo: team4, updateDate: "2 hours ago", members: "4", clients: "16", projects: "21", isPrivate: true , link: "link"},
          {_id: 7, name: "Slack", isOwner: false, logo: team4, updateDate: "58 minutes ago", members: "14", clients: "5", projects: "8", isPrivate: false , link: "link"},
          {_id: 8, name: "Openlane", isOwner: false, logo: team4, updateDate: "16 hours ago", members: "5", clients: "2", projects: "3", isPrivate: false , link: "link"}
      ]
      this.setState({myTeams})
      }catch(e){
        // trun state 1 step back
      }
    }
    render() { 
      const {myTeams} = this.state;
        return ( 
            <React.Fragment>
              <div className="wrapper">
                <div className="page">
                  <div className="page-inner">
                    <header className="page-title-bar">
                      <div className="d-flex justify-content-between">
                        <h1 className="page-title"> Teams </h1>
                        <div className="btn-toolbar">
                          <button type="button" className="btn btn-primary">Add team</button>
                        </div>
                      </div>
                    </header>
                    <div className="page-section">
                      <div className="card card-fluid">
                        <div className="card-header nav-scroller">
                          <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item">
                              <a className="nav-link show active" data-bs-toggle="tab" href="#project-myteams">My teams</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" data-bs-toggle="tab" href="#project-explore-teams">Explore public teams</a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <div className="input-group has-clearable">
                                <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button>
                                <div className="input-group-prepend">
                                  <span className="input-group-text"><span className="fas fa-search"></span></span>
                                </div><input type="text" className="form-control" placeholder="Search"/>
                              </div>
                            </div>
                            <div className="col-auto d-none d-sm-flex">
                              <div className="dropdown">
                                <button className="btn btn-secondary" data-bs-toggle="dropdown"  aria-expanded="false" data-bs-offset="1,9">Last updated <span className="fa fa-caret-down"></span></button> 
                                <div className="dropdown-menu stop-propagation">
                                  <div className="dropdown-arrow"></div>
                                  <div className="dropdown-menu-animation">
                                    <h6 className="dropdown-header"> Sort By </h6><label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="sortTeamsBy" value="0"/> <span className="custom-control-label">Name</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="sortTeamsBy" value="1"/> <span className="custom-control-label">Name <span className="text-muted">(Decs)</span></span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="sortTeamsBy" value="2" checked/> <span className="custom-control-label">Last updated</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="sortTeamsBy" value="3"/> <span className="custom-control-label">Oldest updated</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="sortTeamsBy" value="4"/> <span className="custom-control-label">Last created</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="sortTeamsBy" value="5"/> <span className="custom-control-label">Oldest created</span></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-muted px-3 mb-2"> Showing 10 to 18 of 18 entries </div>
                        <div className="tab-content">
                          <div className="tab-pane fade active show" id="project-myteams" role="tabpanel">
                            <MyTeams data={myTeams}/>
                          </div>
                          <div className="tab-pane fade" id="project-explore-teams" role="tabpanel">
                            <div className="alert alert-warning mx-3"> You can search for public teams only! </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="app-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a className="text-muted" href="#">Support</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted" href="#">Help Center</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted" href="#">Privacy</a>
                  </li>
                  <li className="list-inline-item">
                    <a className="text-muted" href="#">Terms of Service</a>
                  </li>
                </ul>
                <div className="copyright"> Copyright © 2018. All right reserved. </div>
              </footer>
            </React.Fragment>
         );
    }
}
 
export default Teams;