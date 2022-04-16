import React, { Component } from 'react';
import Flatpickr from "react-flatpickr";
import { Bar , Pie } from 'react-chartjs-2';
import { fixTooltip } from '../js/fixTooltip';
import team1 from "../imgs/team1.jpg";
import team2 from "../imgs/team2.png";
import team3 from "../imgs/team3.png";
import team4 from "../imgs/team4.jpg";
import uifaces15 from "../imgs/uifaces15.jpg";
import uifaces16 from "../imgs/uifaces16.jpg";
import uifaces17 from "../imgs/uifaces17.jpg";
import uifaces18 from "../imgs/uifaces18.jpg";
import uifaces19 from "../imgs/uifaces19.jpg";
import ActiveProjects from './dashboard/activeProjects';
// import LeaderBoard from './dashboard/leaderBoard';
import LeaderBoard from "./common/leaderBoard"
import ActiveTasksToDos from './dashboard/activeTasksToDos';

class DashBoard extends Component {
    state = { 
      date: [],
      dpRadio: "dpPastWeek",
      months : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      todos:{
        todo1 : false,
        todo2 : true,
        todo3 : false,
        todo4 : false,
        todo5 : false,
        todo6 : false,
        todo8 : false,
        todo8 : false,
      },
      leaderboardData:{
        data: [
          {name: "Martha Myers", img: uifaces15, completed: {amount: 2065, percentage: 73.4}, active: {amount: 231, percentage: 8.2}, overdue: {amount: 54, percentage: 1.9}, link: "link"},
          {name: "Tammy Beck", img: uifaces16, completed: {amount: 1432, percentage: 54.1}, active: {amount: 406, percentage: 15.3}, overdue: {amount: 49, percentage: 1.8}, link: "link"},
          {name: "Susan Kelley", img: uifaces17, completed: {amount: 1271, percentage: 52.1}, active: {amount: 87, percentage: 3.5}, overdue: {amount: 82, percentage: 3.3}, link: "link"},
          {name: "Albert Newman", img: uifaces18, completed: {amount: 1527, percentage: 75.1}, active: {amount: 205, percentage: 10.1}, overdue: {amount: 151, percentage: 7.4}, link: "link"},
          {name: "Kyle Grant", img: uifaces19, completed: {amount: 643, percentage: 36.8}, active: {amount: 265, percentage: 15.2}, overdue: {amount: 127, percentage: 7.2}, link: "link"},
        ],
        titles: [
          {_id: 1, name: "Tasks", shapeTag: "circle", colorTag: "light", ignoreInData: true},
          {_id: 2, name: "Completed", shapeTag: "circle", colorTag: "purple", ignoreInData: false},
          {_id: 3, name: "Active", shapeTag: "circle", colorTag: "teal", ignoreInData: false},
          {_id: 4, name: "Overdue", shapeTag: "circle", colorTag: "red", ignoreInData: false},
        ],
      },
     }
    datePickerDates(){
      let dates = [
        new Date(),// today
        new Date(),// yesterday
        new Date(),// pastWeek
        new Date()// pastMonth
      ]
      dates[1].setDate(dates[1].getDate() - 1)
      dates[2].setDate(dates[2].getDate() - 7)
      dates[3].setDate(dates[3].getDate() - 30)
      return dates;
    }
    datePickerItems(id,time,date){
      const dpRadio = this.state.dpRadio;
      return(
        <div className="custom-control custom-radio">
          {/* <input type="radio" className="custom-control-input" id="dpToday" name="dpFilter" data-start="2019/03/27" data-end="2019/03/27"/> <label className="custom-control-label d-flex justify-content-between" for="dpToday"><span>Today</span> <span className="text-muted">Mar 27</span></label> */}
          <input type="radio" className="custom-control-input" id={id} onClick={()=>{this.handleDPChange(id)}} checked={dpRadio === id}/> <label className="custom-control-label d-flex justify-content-between" for={id}><span>{time}</span> <span className="text-muted">{date}</span></label>
        </div>
      )
    }
    metricItems(title,icon,value,link){
      return(
        <div className="col">
          <a href={link} className="metric metric-bordered align-items-center">
            <h2 className="metric-label"> {title} </h2>
            <p className="metric-value h3">
              <sub><i className={icon}></i></sub> <span className="value">{value}</span>
            </p>
          </a> 
        </div>
      )
    }
    handleDPChange(dpRadio){
      this.setState({dpRadio})
    }
    verticalBar(){
      const data = {
        labels: ['21 Mar', '22 Mar', '23 Mar', '24 Mar', '25 Mar', '26 Mar', '27 Mar'],
        datasets: [
          {
            data: [155, 65, 465, 265, 225, 325, 80],
            backgroundColor: 'rgb(52 108 176)',
            borderColor: 'rgb(52 108 176)',
          },
        ],
      };

      const options = {
        plugins: {
          responsive: true,
          legend: {
            display: false
          },
          title: {
            display: false
          }
        },
        scales: {
          x: {
            gridLines: {
              display: true,
              drawBorder: false,
              drawOnChartArea: false
            },
            ticks: {
              maxRotation: 0,
              maxTicksLimit: 3,
            }
          },
          y: {
            gridLines: {
              display: true,
              drawBorder: false
            },
            ticks: {
              beginAtZero: true,
              stepSize: 100
            }
          }
        }
      }
        return {options,data};
    }
    handlePieChart(){
      const data = {
        datasets: [
          {
            backgroundColor: ['#00a28a', '#100'],
            hoverBorderWidth: 0,
            hoverBorderColor: '#0000',
            borderRadius: 100,
            data: [60, 40]
          },
          {
            backgroundColor: ['#2000', '#300'],
            hoverBorderWidth: 0,
            hoverBorderColor: '#0000',
            borderRadius: 100,
            data: [65, 35]
          },
          {
            backgroundColor: ['#5f4b8b', '#400'],
            hoverBorderWidth: 0,
            hoverBorderColor: '#0000',
            borderRadius: 100,
            data: [75, 25]
          },
          {
            backgroundColor: ['#00a28a', '#100'],
            hoverBorderWidth: 0,
            hoverBorderColor: '#0000',
            borderRadius: 100,
            data: [60, 40]
          },
        ]
      };
      const options = {

          responsive: true,
          plugins: {
            tooltip: {
              enabled: false,
            },
          }
        };
      return {data, options};
    }
    handleToDo = (id) => {
      // you can make this function Async and do some Api Calls here to work with backend
      const todos = {...this.state.todos};
      todos[id] = !todos[id];
      this.setState({todos})
    }
    componentDidMount(){
      fixTooltip(window.bs);
      //fetch Data here and call you api's
  }
    render() { 
      const {months,dpRadio,todos,leaderboardData} = this.state;
      const dates = this.datePickerDates();
        return (
        <React.Fragment>
          <div className="wrapper">
            <div className="page">
              <div className="page-inner">
                <header className="page-title-bar">
                  <div className="d-flex flex-column flex-md-row">
                    <p className="lead">
                      <span className="font-weight-bold">Hi, Beni.</span> <span className="d-block text-muted">Here’s what’s happening with your business today.</span>
                    </p>
                    <div className="mr-auto"> {/* RTL */}
                      <div className="dropdown">
                        <button className="btn btn-secondary" data-bs-toggle="dropdown" aria-expanded="false"><span>This Week</span> <i className="fa fa-fw fa-caret-down"></i></button> 
                        <div className="dropdown-menu dropdown-menu-md stop-propagation">
                          <div className="dropdown-arrow"></div>
                          <div className="dropdown-menu-animation">
                          {this.datePickerItems("dpToday","Today",`${months[dates[0].getMonth()]} ${dates[0].getDate()}`)}
                          {this.datePickerItems("dpYesterday","Yesterday",`${months[dates[1].getMonth()]} ${dates[1].getDate()} - ${months[dates[0].getMonth()]} ${dates[0].getDate()}`)}
                          {this.datePickerItems("dpPastWeek","Past Week",`${months[dates[2].getMonth()]} ${dates[2].getDate()} - ${months[dates[0].getMonth()]} ${dates[0].getDate()}`)}
                          {this.datePickerItems("dpPastMonth","Past Month",`${months[dates[3].getMonth()]} ${dates[3].getDate()} - ${months[dates[0].getMonth()]} ${dates[0].getDate()}`)}
                          {this.datePickerItems("dpPastYear","Past Year", dates[0].getFullYear())}
                          <div className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="dpCustom" name="dpFilter" onClick={()=>{this.handleDPChange("dpCustom")}} checked={dpRadio === "dpCustom"}/> <label className="custom-control-label" for="dpCustom">Custom</label>
                            <div className="custom-control-hint my-1">
                              <Flatpickr
                                options={{
                                  altInput:true,
                                  altInputClass:"form-control",
                                  mode: "range",
                                  dateFormat: "Y-m-d"
                                }}
                                onChange={date => {
                                  this.setState({ date });
                                }}
                              />
                            </div>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="page-section">
                  <div className="section-block">
                    <div className="metric-row">
                      <div className="col-lg-9">
                        <div className="metric-row metric-flush">
                          {this.metricItems("Teams","fas fa-user-friends","8","link")}
                          {this.metricItems("Projects","fas fa-code-branch","12","link")}
                          {this.metricItems("Active Tasks","fa fa-tasks","64","link")}
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <a href="link" className="metric metric-bordered">
                          <div className="metric-badge">
                            <span className="badge badge-lg badge-success"><span className="fas fa-circle pulse mr-1"></span> ONGOING TASKS</span>
                          </div>
                          <p className="metric-value h3">
                            <sub><i className="fas fa-history"></i></sub> <span className="value">8</span>
                          </p>
                        </a> 
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-lg-12 col-xl-4"> 
                      <div className="card card-fluid">
                        <div className="card-body">
                          <h3 className="card-title mb-4"> Completion Tasks </h3>
                            <Bar {...this.verticalBar()}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                      <div className="card card-fluid">
                        
                        <div className="card-body">
                          <h3 className="card-title"> Tasks Performance </h3>
                          <div className="text-center pt-3">
                            <div className="chart-inline-group">
                            {/* <Pie {...this.handlePieChart()}/> */}
                            </div>
                          </div>
                        </div>
                        
                        <div className="card-footer">
                          <div className="card-footer-item">
                            <i className="fa fa-fw fa-circle text-indigo"></i> 100% <div className="text-muted small"> Assigned </div>
                          </div>
                          <div className="card-footer-item">
                            <i className="fa fa-fw fa-circle text-purple"></i> 75% <div className="text-muted small"> Completed </div>
                          </div>
                          <div className="card-footer-item">
                            <i className="fa fa-fw fa-circle text-teal"></i> 60% <div className="text-muted small"> Active </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                      <div className="card card-fluid">
                        <LeaderBoard data={leaderboardData.data} titles={leaderboardData.titles} customClasses={"bg-transparent"}/>
                      </div>
                    </div>
                  </div>
                  <div className="card-deck-xl">
                    <ActiveProjects data={[
                      {projectName:"Looper Admin Theme", projectShortName:"LT", teamLogo:team1, colorTag:"purple", progress:"74", lastUpdate:"1d", projectLink:"link", teamLink:"link"},
                      {projectName:"Smart Paper", projectShortName:"SP", teamLogo:team2, colorTag:"indigo", progress:"22", lastUpdate:"2h", projectLink:"link", teamLink:"link"},
                      {projectName:"Online Store", projectShortName:"OS", teamLogo:team3, colorTag:"yellow", progress:"99", lastUpdate:"2d", projectLink:"link", teamLink:"link"},
                      {projectName:"Booking App", projectShortName:"BA", teamLogo:team4, colorTag:"blue", progress:"35", lastUpdate:"4h", projectLink:"link", teamLink:"link"},
                      {projectName:"SVG Icon Bundle", projectShortName:"SB", teamLogo:team1, colorTag:"teal", progress:"32", lastUpdate:"1d", projectLink:"link", teamLink:"link"},
                      {projectName:"Syrena Project", projectShortName:"SP", teamLogo:team2, colorTag:"pink", progress:"93", lastUpdate:"8h", projectLink:"link", teamLink:"link"},
                    ]}/>
                    <div className="card card-fluid">
                      <div className="card-header"> Active Tasks: To-Dos </div>
                      <div className="card-body">
                        <div className="todo-list">
                          <div className="todo-header"> Looper Admin Theme (1/3) </div>
                          <ActiveTasksToDos 
                          handleClick={this.handleToDo}
                          data={[
                            {label: "Eat corn on the cob", id: "todo1", overdue: "", isChecked: todos.todo1},
                            {label: "Mix up a pitcher of sangria", id: "todo2", overdue: "", isChecked: todos.todo2},
                            {label: "Have a barbecue", id: "todo3", overdue: "", isChecked: todos.todo3},
                            {label: "Ride a roller coaster", id: "todo4", overdue: "Overdue in 3 days", isChecked: todos.todo4},
                          ]}/>
                          <div className="todo-header"> Smart Paper (0/2) </div>
                          <ActiveTasksToDos 
                            handleClick={this.handleToDo}
                            data={[
                              {label: "Bring a blanket and lie on the grass at an outdoor concert", id: "todo5", overdue: "", isChecked: todos.todo5},
                              {label: "Collect seashells at the beach", id: "todo6", overdue: "", isChecked: todos.todo6},
                              {label: "Swim in a lake", id: "todo7", overdue: "", isChecked: todos.todo7},
                              {label: "Get enough sleep!", id: "todo8", overdue: "", isChecked: todos.todo8},
                            ]}/>
                        </div>
                      </div>
                      <div className="card-footer">
                        <a href="#" className="card-footer-item">View all <i className="fa fa-fw fa-angle-right"></i></a>
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
 
export default DashBoard;