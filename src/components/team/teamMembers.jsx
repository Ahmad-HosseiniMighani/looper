import React, { Component } from 'react';
import SideBar from './sideBar';
import Header from './header';
import uiface from "../../imgs/uifaces17.jpg"
import { fixTooltip } from '../../js/fixTooltip';
import Members from './teamMembers/members';

class TeamMembers extends Component {
    state = { 
      summeryData: [],
      leadsSourceData: [],
      membersData: [],
     }
     componentDidUpdate(){
      fixTooltip(window.bs);
    }
    componentDidMount(){
      fixTooltip(window.bs);
      try{
        const summeryData = [
          {_id: 1, title:"Incomes", value:"$83,743"},
          {_id: 2, title:"Expenses", value:"$18,821"},
          {_id: 3, title:"Leads", value:"2,630"},
          {_id: 4, title:"Clients", value:"40"},
        ]
        const leadsSourceData = [
            {_id: 1, title: "Mailchimp", colorTag: "teal", percentage: "33.84", amount: "890"},
            {_id: 2, title: "Facebook", colorTag: "indigo", percentage: "24.71", amount: "650"},
            {_id: 3, title: "Google", colorTag: "pink", percentage: "26.29", amount: "692"},
            {_id: 4, title: "Linkedin", colorTag: "purple", percentage: "15.15", amount: "398"},
        ]
        const membersData = [
          {_id: "chansen", name: "Craig Hansen", title: "Software Developer", status: "online", avatar: uiface, link: "link"},
          {_id: "jbarnes", name: "Jane Barnes", title: "Social Worker", status: "idle", avatar: uiface, link: "link"},
          {_id: "nbarnett", name: "Nicole Barnett", title: "Marketing Manager", status: "online", avatar: uiface, link: "link"},
          {_id: "mward", name: "Michael Ward", title: "Lawyer", status: "busy", avatar: uiface, link: "link"},
          {_id: "jfuller", name: "Juan Fuller", title: "Budget analyst", status: "idle", avatar: uiface, link: "link"},
          {_id: "jsilva", name: "Julia Silva", title: "Photographer", status: "online", avatar: uiface, link: "link"},
          {_id: "jhanson", name: "Joe Hanson", title: "Logistician", status: "offline", avatar: uiface, link: "link"},
          {_id: "bgriffin", name: "Brenda Griffin", title: "Medical Assistant", status: "online", avatar: uiface, link: "link"},
          {_id: "rjimenez", name: "Ryan Jimenez", title: "Photographer", status: "online", avatar: uiface, link: "link"},
          {_id: "bhayes", name: "Bryan Hayes", title: "Computer Systems Analyst", status: "busy", avatar: uiface, link: "link"},
        ]
        this.setState({summeryData,leadsSourceData,membersData})
      }catch(e){
        //turn state one step back
      }
    }
    handleInvite = (_id) => {
      console.log(`You Clicked on the InviteToTeam Button with Member ID: "@${_id}"`)
    }
    handleDelete = (_id) => {
      console.log(`You Clicked on the Delete Button with Member ID: "@${_id}"`)
    }
    handlePrivateMessage = (_id) => {
      console.log(`You Clicked on the SendPrivateMessage Button with Member ID: "@${_id}"`)
    }
    handleCopyID = (_id) => {
      console.log(`You Clicked on the CopyID Button with Member ID: "@${_id}"`)
    }
    render() { 
      const {summeryData,leadsSourceData,membersData} = this.state
        return ( 
          <React.Fragment>
            <div className="wrapper">
              <div className="page has-sidebar has-sidebar-expand-xl"><div className="sidebar-backdrop"></div>
                <div className="page-inner">
                  <Header/>
                  <div className="page-section">
                    <div className="section-block">
                      <div className="row mb-4">
                        <div className="col">
                          <div className="has-clearable">
                            <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button> <input type="text" className="form-control" placeholder="Search"/>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="dropdown">
                            <button className="btn btn-primary" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user-plus mr-1"></i> Invite</button> 
                            <div className="dropdown-menu dropdown-menu-rich stop-propagation">
                              <div className="dropdown-arrow"></div>
                              <div className="dropdown-menu-animation">
                                <div className="dropdown-header"> Add members </div>
                                <div className="form-group px-3 py-2 m-0">
                                  <input type="text" className="form-control" placeholder="e.g. @bent10" data-toggle="tribute" data-remote="assets/data/tribute.json" data-menu-container="#people-list" data-item-template="true" data-autofocus="true" data-tribute="true"/> <small className="form-text text-muted">Search people by username or email address to invite them.</small>
                                </div>
                                <div id="people-list" className="tribute-inline stop-propagation"></div><a href="#" className="dropdown-footer">Invite member by link <i className="far fa-clone"></i></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Members
                        data={membersData}
                        onInvite={this.handleInvite}
                        onDelete={this.handleDelete}
                        onPrivateMessage={this.handlePrivateMessage}
                        onCopyID={this.handleCopyID}
                      />
                    </div>
                  </div>
                </div>
                <SideBar leadsSourceData={leadsSourceData} summeryData={summeryData}/>           
              </div>
            </div>
          </React.Fragment>
         );
    }
}
 
export default TeamMembers;