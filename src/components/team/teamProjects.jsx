import React, { Component } from 'react';
import uiface from "../../imgs/uifaces17.jpg";
import { fixTooltip } from '../../js/fixTooltip';
import Header from './header';
import SideBar from './sideBar';
import Projects from './teamProjects/projects';

class TeamProjects extends Component {
  state = { 
    summeryData: [],
    leadsSourceData: [],
    projects: [],
    modalData: [],
   }
   componentDidUpdate(){
    fixTooltip(window.bs);
  }
  componentDidMount(){
    fixTooltip(window.bs);
    //API CALLS HERE
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
        const projects = [
          {_id: 1, progress: {title: "Deadline", date:"07 Aug 2018", percentage: "74"}, lastUpdate: "1d", colorTag: "purple", shortName: "LT", name :"Looper Admin Theme",
            people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "21", budget: "40,000$", tasks: "775", link: "link"},
          {_id: 2, progress: {title: "Deadline", date:"15 Sep 2018", percentage: "22"}, lastUpdate: "2h", colorTag: "indigo", shortName: "SP", name :"Smart Paper", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "6", budget: "10,000$", tasks: "3090", link: "link"},
          {_id: 3, progress: {title: "Deadline", date:"15 Jul 2018", percentage: "99"}, lastUpdate: "2d", colorTag: "yellow", shortName: "OS", name :"Online Store", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "42", budget: "100,000$", tasks: "100", link: "link"},
          {_id: 4, progress: {title: "Deadline", date:"20 Sep 2018", percentage: "35"}, lastUpdate: "4h", colorTag: "blue", shortName: "BA", name :"Booking App", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "8", budget: "5,000$", tasks: "209", link: "link"},
          {_id: 5, progress: {title: "Deadline", date:"15 Nov 2018", percentage: "32"}, lastUpdate: "1d", colorTag: "teal", shortName: "SB", name :"SVG Icon Bundle", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "8", budget: "6,000$", tasks: "958", link: "link"},
          {_id: 6, progress: {title: "Deadline", date:"18 Aug 2018", percentage: "93"}, lastUpdate: "8h", colorTag: "pink", shortName: "SP", name :"Syrena Project", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "32", budget: "50,000$", tasks: "314", link: "link"},
          {_id: 7, progress: {title: "Finished", date:"???", percentage: "100"}, lastUpdate: "1m", colorTag: "green", shortName: "MG", name :"Mobile App Gex", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "26", budget: "40,000$", tasks: "0", link: "link"},
          {_id: 8, progress: {title: "Finished", date:"???", percentage: "100"}, lastUpdate: "1w", colorTag: "red", shortName: "LB", name :"Landing Page Booster", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "2", budget: "1,000$", tasks: "0", link: "link"},
          {_id: 9, progress: {title: "Finished", date:"???", percentage: "100"}, lastUpdate: "2m", colorTag: "orange", shortName: "SB", name :"Stilearn Branding", people: [
              {name: "Andrew Kim", avatar: uiface},
              {name: "Bryan Morgan", avatar: uiface},
              {name: "Larry Robinson", avatar: uiface},
              {name: "Beverly Simpson", avatar: uiface},
              {name: "Robinson", avatar: uiface},
            ],
            peopleCount: "12", budget: "20,000$", tasks: "0", link: "link"},
        ]
        const modalData = [
          {_id: 1, name: "Craig Hansen", avatar: uiface, title: "Software Developer", link: "link"},
          {_id: 2, name: "Jane Barnes", avatar: uiface, title: "Social Worker", link: "link"},
          {_id: 3, name: "Nicole Barnett", avatar: uiface, title: "Marketing Manager", link: "link"},
          {_id: 4, name: "Michael Ward", avatar: uiface, title: "Lawyer", link: "link"},
          {_id: 5, name: "Juan Fuller", avatar: uiface, title: "Budget analyst", link: "link"},
          {_id: 6, name: "Julia Silva", avatar: uiface, title: "Photographer", link: "link"},
          {_id: 7, name: "Joe Hanson", avatar: uiface, title: "Logistician", link: "link"},
          {_id: 8, name: "Brenda Griffin", avatar: uiface, title: "Medical Assistant", link: "link"},
          {_id: 9, name: "Ryan Jimenez", avatar: uiface, title: "Photographer", link: "link"},
          {_id: 10, name: "Bryan Hayes", avatar: uiface, title: "Computer Systems Analyst", link: "link"},
        ]
        this.setState({summeryData,leadsSourceData,projects,modalData})
    }catch(e){
        //turn state one step back
    }
  }
  handleDelete = (_id) => {
    console.log(`You click on the Delete Button for project with ID: ${_id}`)
  }
  handleEdit = (_id) => {
    console.log(`You click on the Edit Button for project with ID: ${_id}`)
  }
  handleAddMember = (_id) => {
    console.log(`You click on the AddMember Button for project with ID: ${_id}`)
  }
  render() { 
    const {summeryData,leadsSourceData,projects,modalData} = this.state
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
                          <button className="btn btn-primary">Add project</button>
                        </div>
                      </div>
                      <div className="row">
                        <Projects
                          data={projects}
                          onEdit={this.handleEdit}
                          onDelete={this.handleDelete}
                          onAddMember={this.handleAddMember}
                        />
                      </div>
                    </div>
                    {/* you can make this Modal a Component too i'll leave a template of how should you do it here ^-^ */}
                    <div className="modal fade" id="membersModal" tabindex="-1" role="dialog" aria-hidden="true">
                      <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <div className="input-group has-clearable">
                              <button type="button" className="close" aria-label="Close"><i className="fa fa-times-circle"></i></button>
                              <div className="input-group-prepend">
                                <span className="input-group-text"><span className="fas fa-search"></span></span>
                              </div><input type="text" className="form-control" placeholder="Search Members"/>
                            </div>
                          </div>
                          <div className="modal-body px-0">
                            <div className="list-group list-group-flush">
                              {modalData.map(item => (
                                <div className="list-group-item" key={item._id}>
                                  <div className="list-group-item-figure">
                                    <a href={item.link} className="user-avatar"><img src={item.avatar} alt={item.name}/></a>
                                  </div>
                                  <div className="list-group-item-body">
                                    <h4 className="list-group-item-title">
                                      <a href={item.link}>{item.name}</a>
                                    </h4>
                                    <p className="list-group-item-text"> {item.title} </p>
                                  </div>
                                  <div className="list-group-item-figure dropdown">
                                    <button className="btn btn-sm btn-icon btn-light" data-bs-toggle="dropdown" data-bs-offset="0,9"><i className="fa fa-fw fa-ellipsis-v"></i></button>
                                    <div className="dropdown-menu">
                                      <div className="dropdown-arrow"></div>
                                      <div className="dropdown-menu-animation">
                                        <button type="button" className="dropdown-item">Message</button>
                                        <button type="button" className="dropdown-item">Invite to a team</button>
                                        <button type="button" className="dropdown-item">Copy member ID</button>
                                        <div className="dropdown-divider"></div>
                                        <button type="button" className="dropdown-item">Remove</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              
                            </div>
                          </div>
                          
                          <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
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
 
export default TeamProjects;