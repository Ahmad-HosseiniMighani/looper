import React, { Component } from 'react';
import uiface from "../../imgs/uifaces17.jpg"
import team4 from "../../imgs/team4.jpg"
import { Link, NavLink } from 'react-router-dom';
import MetricRow from './projectOverview/metricRow';
import { Bar, Doughnut } from 'react-chartjs-2';
import TimeTracking from './projectOverview/timeTracking';
import SideBar from './projectOverview/sideBar';


class ProjectOverview extends Component {
    state = { 
      metricRowData: [],
      timeTrackingData: [],
      contributorsData: [],
      filesData: [],
    }
    componentDidMount(){
      const metricRowData = [
        {_id: 1, title: "Budget", value: "5,000", valueSign: "$"},
        {_id: 2, title: "Invoiced", value: "3,600", valueSign: "$"},
        {_id: 3, title: "Expenses", value: "450", valueSign: "$"},
        {_id: 4, title: "Progress", value: "93", valueSign: "%"}
      ]
      const timeTrackingData = [
        {_id: 1, title: "Redesign website", date: "09/25/2018", time: "12:20pm", hoursSpend: "15:20"},
        {_id: 2, title: "Write new content", date: "10/07/2018", time: "8:13pm", hoursSpend: "12:40"},
        {_id: 3, title: "Redesign website", date: "10/15/2018", time: "5:22pm", hoursSpend: "34:30"},
        {_id: 4, title: "Redesign website", date: "10/15/2018", time: "7:36am", hoursSpend: "23:41"},
        {_id: 5, title: "Apply new styles", date: "10/19/2018", time: "9:32pm", hoursSpend: "11:12"}
      ]
      const contributorsData = [
        {_id: 1, name: "Brenda Griffin", avatar: uiface, status: "online", title: "Medical Assistant", link: "link"},
        {_id: 2, name: "Ryan Jimenez", avatar: uiface, status: "online", title: "Photographer", link: "link"},
        {_id: 3, name: "Bryan Hayes", avatar: uiface, status: "busy", title: "Computer Systems Analyst", link: "link"},
        {_id: 4, name: "Cynthia Clark", avatar: uiface, status: "idle", title: "Web Developer", link: "link"},
        {_id: 5, name: "Martha Myers", avatar: uiface, status: "online", title: "Writer", link: "link"},
        {_id: 6, name: "Tammy Beck", avatar: uiface, status: "online", title: "Designer", link: "link"},
        {_id: 7, name: "Susan Kelley", avatar: uiface, status: "busy", title: "Web Developer", link: "link"},
        {_id: 8, name: "Albert Newman", avatar: uiface, status: "offline", title: "Web Developer", link: "link"},
      ]
      const filesData = [
        {date: "Today", files: [
            {_id: 1, name: "double-broccoli-quinoa.pdf", fileType: "pdf", tileColor: "teal", volume: "1.07 MB", uploadedBy: "Emma Griffin", time: "12:20pm", link: "link"},
            {_id: 2, name: "Baked-Chicken-and-Spinach-Flautas.pdf", fileType: "pdf", tileColor: "teal", volume: "0.39 MB", uploadedBy: "Peter Willis", time: "5:22pm", link: "link"},
            {_id: 3, name: "Cajun Chicken Egg Pasta.jpg", fileType: "image", tileColor: "pink", volume: "0.93 MB", uploadedBy: "Danielle Garza", time: "9:32pm", link: "link"}
        ]},
        {date: "Jan 28, 2018", files: [
            {_id: 4, name: "looper_build-1209.zip", fileType: "archive", tileColor: "purple", volume: "0.53 MB", uploadedBy: "Rose McCoy", time: "3:13am", link: "link"},
            {_id: 5, name: "looper_design-brief.zip", fileType: "archive", tileColor: "purple", volume: "2.04 MB", uploadedBy: "Rose McCoy", time: "11:27pm", link: "link"}
        ]},
        {date: "Jan 21, 2018", files: [
            {_id: 6, name: "Usulan Beasiswa Tahun 2018.pdf", fileType: "pdf", tileColor: "teal", volume: "1.1 MB", uploadedBy: "Peter Willis", time: "6:20pm", link: "link"},
            {_id: 7, name: "Daftar Peserta Ujian.xlsx", fileType: "excel", tileColor: "green", volume: "0.37 MB", uploadedBy: "Peter Willis", time: "1:32pm", link: "link"},
            {_id: 8, name: "data_not_verified.docx", fileType: "word", tileColor: "blue", volume: "0.94 MB", uploadedBy: "Kathryn Black", time: "5:11am", link: "link"}
        ]},
        {date: "Jan 19, 2018", files: [
            {_id: 9, name: "mockup-presentation.pptx", fileType: "powerpoint", tileColor: "red", volume: "0.59 MB", uploadedBy: "Kathryn Black", time: "6:50am", link: "link"}
        ]},
      ]
      this.setState({metricRowData,timeTrackingData,contributorsData,filesData})
    }
    verticalBar(){
      const data = {
          labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          datasets: [
            {
              label: 'Time Spent',
              data: [41.3, 53.2, 68.27, 44.17, 100.32, 83.56, 53.04],
              backgroundColor: "#00a28a",
            },
          ]
      };
      const options= {
          plugins: {
          title: {
              display: false,
              text: 'Chart.js Bar Chart'
          },
          legend: {
              display: false
          },
          },
          responsive: true,
          maintainAspectRatio: false,
          interaction: {
          intersect: false,
          },
          scales: {
          x: {
              grid:{
              display:false,
              },
          },
          y: {
              grid:{
              borderDash: [8,4],
              },
          }
          }
      };
      return {options,data};
    }
    doughnutChartData(){
      const data = {
        labels: ['Balance', 'Expenses', 'Not invoiced'],
        datasets: [
          {
            label: 'XXX',
            data: [3150, 450, 1400],
            backgroundColor: ["#00a28a","#b76ba3","#888c9b"],
          },
        ]
    };
    const options= {
        plugins: {
          title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
          },
          legend: {
              display: false
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
        },
      };
      return {options,data};
    }
    handleEditTimeTracking = (_id) => {
      console.log(`You Clicked on Edit button for TimeTracking with id: "${_id}"`)
    }
    handleDeleteTimeTracking = (_id) => {
      console.log(`You Clicked on Delete button for TimeTracking with id: "${_id}"`)
    }
    handleMessageContributors = (_id) => {
      console.log(`You Clicked on Message Button for Contributors with id: "${_id}"`)
    }
    handleInviteContributors = (_id) => {
      console.log(`You Clicked on Invite Button for Contributors with id: "${_id}"`)
    }
    handleCopyIDContributors = (_id) => {
      console.log(`You Clicked on CopyID Button for Contributors with id: "${_id}"`)
    }
    handleDeleteContributors = (_id) => {
      console.log(`You Clicked on Delete Button for Contributors with id: "${_id}"`)
    }
    handleDownloadFiles = (_id) => {
      console.log(`You Clicked on Download Button for File with id: "${_id}"`)
    }
    handleViewFiles = (_id) => {
      console.log(`You Clicked on View Button for File with id: "${_id}"`)
    }
    handleShareFiles = (_id) => {
      console.log(`You Clicked on Share Button for File with id: "${_id}"`)
    }
    handleCopyLinkFiles = (_id) => {
      console.log(`You Clicked on CopyLink Button for File with id: "${_id}"`)
    }
    handleDeleteFiles = (_id) => {
      console.log(`You Clicked on Delete Button for File with id: "${_id}"`)
    }
    render() { 
      const {metricRowData,timeTrackingData,contributorsData,filesData} = this.state
        return ( 
          <React.Fragment>
            <div className="wrapper">
              <div className="page has-sidebar"><div className="sidebar-backdrop"></div>
                {/* <header className="page-navs shadow-sm pr-3"> */}
                <header className="page-navs shadow-sm pl-3">
                  <Link to="/teamprojects" className="btn-account">
                    <div className="user-avatar mr-2">
                      <img src={team4} alt=""/>
                    </div>
                    <div className="account-summary">
                      <h1 className="card-title"> Creative Division </h1>
                      <h6 className="card-subtitle text-muted"> 53 days left · Last update 1h </h6>
                    </div>
                  </Link> 
                  <div className="mr-auto"> {/* RTL */}
                    <div className="dropdown d-inline-block">
                      <button type="button" className="btn btn-light btn-icon" title="Invite members" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user-plus"></i></button> 
                      <div className="dropdown-menu dropdown-menu-left dropdown-menu-rich stop-propagation">
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu-animation py-0">
                          <div className="dropdown-header"> Add members </div>
                          <div className="form-group px-3 py-2 m-0">
                            <input type="text" className="form-control" placeholder="e.g. @bent10" data-toggle="tribute" data-remote="assets/data/tribute.json" data-menu-container="#people-list" data-item-template="true" data-autofocus="true" data-tribute="true"/> <small className="form-text text-muted">Search people by username or email address to invite them.</small>
                          </div>
                          <div id="people-list" className="tribute-inline stop-propagation"></div>
                          <a href="#" className="dropdown-footer">Invite member by link <i className="far fa-clone"></i></a>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-light btn-icon" data-toggle="sidebar"><i className="fa fa-angle-double-right"></i></button> {/* RTL */}
                  </div>
                </header>
                <div className="page-inner">
                  <header className="page-title-bar">
                    <div className="row text-center text-sm-left">
                      <div className="col-sm-auto col-12 mb-2">
                        <span className="tile tile-xl bg-pink">SP</span>
                      </div>
                      <div className="col" style={{"text-align": "right"}}>{/* RTL     text-align: right; */}
                        <h1 className="page-title"> Syrena Project </h1>
                        <p> Is a Responsive Admin Theme designed with focus on simplicity, user experience, interactions, and flows. It enables you to build rich and beautiful experiences for your project. <a href="#">Read more...</a>
                        </p>
                      </div>
                    </div>
                    <div className="nav-scroller border-bottom">
                      <div className="nav nav-tabs">
                        <NavLink className="nav-link" to="projectoverview">Overview</NavLink>
                        <NavLink className="nav-link" to="projectboard">Board</NavLink>
                        <NavLink className="nav-link" to="projectgantt">Gantt View</NavLink>
                        <Link className="nav-link" to="setting">Settings</Link>
                      </div>
                    </div>
                  </header>
                  <div className="page-section">
                    <MetricRow data={metricRowData}/>
                    <div className="card-deck-xl">
                      <div className="card card-fluid">
                        <div className="card-body">
                          <h3 className="card-title"> Activity by day </h3>
                          <div className="chartjs"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                            <Bar {...this.verticalBar()}/>
                          </div>
                        </div>
                      </div>
                      <div className="card card-fluid">
                        <div className="card-body">
                          <h3 className="card-title"> Balance: $3,150 </h3>
                          <div className="row align-items-center">
                            <div className="col-12 col-sm-8">
                              <div className="chartjs"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                                <Doughnut {...this.doughnutChartData()}/>
                              </div>
                            </div>
                            <div className="col-12 col-sm-4 pl-3 pt-3 p-sm-0">
                              <ul className="list-unstyled">
                                <li>
                                  <i className="fa fa-square text-teal mr-2"></i> Balance </li>
                                <li>
                                  <i className="fa fa-square text-pink mr-2"></i> Expenses </li>
                                <li>
                                  <i className="fa fa-square text-muted mr-2"></i> Not invoiced </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <TimeTracking 
                      data={timeTrackingData}
                      onEdit={this.handleEditTimeTracking}
                      onDelete={this.handleDeleteTimeTracking}
                    />
                  </div>
                </div>
                <SideBar 
                  contributorsData={contributorsData}
                  filesData={filesData}
                  contributorsOnMessage={this.handleMessageContributors}
                  contributorsOnInvite={this.handleInviteContributors}
                  contributorsOnCopyID={this.handleCopyIDContributors}
                  contributorsOnDelete={this.handleDeleteContributors}
                  filesOnDownload={this.handleDownloadFiles}
                  filesOnView={this.handleViewFiles}
                  filesOnShare={this.handleShareFiles}
                  filesOnCopyLink={this.handleCopyLinkFiles}
                  filesOnDelete={this.handleDeleteFiles}
                />
              </div>
            </div>
          </React.Fragment>
         );
    }
}
 
export default ProjectOverview;