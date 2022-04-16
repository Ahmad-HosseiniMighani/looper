import React, { Component } from 'react';
import uifaces15 from "../../imgs/uifaces15.jpg";
import uifaces16 from "../../imgs/uifaces16.jpg";
import uifaces17 from "../../imgs/uifaces17.jpg";
import uifaces18 from "../../imgs/uifaces18.jpg";
import uifaces19 from "../../imgs/uifaces19.jpg";
import { fixTooltip } from '../../js/fixTooltip';
import { Bar } from 'react-chartjs-2';
import Flatpickr from "react-flatpickr";
import LeadsFunnel from './teamOverView/leadsFunnel';
import LeaderBoard from './../common/leaderBoard';
import SideBar from './sideBar';
import Header from './header';

class TeamOverview extends Component {
    state = { 
        date: [],
        dpRadio: "dpPastWeek",
        months : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        leadsfunnel: [],
        leaderboardData:{
            data: [],
            titles: [],
        },
        summeryData: [],
        leadsSourceData: [],
    }
    componentDidUpdate(){
        fixTooltip(window.bs);
    }
    componentDidMount(){
        fixTooltip(window.bs);
        //API CALLS HERE
        try{
            const leadsfunnel = [
                {_id: 1, title: "New", colorTag: "purple", percentage: 30},
                {_id: 2, title: "Initial Contact", colorTag: "pink", percentage: 20.5},
                {_id: 3, title: "Qualified", colorTag: "yellow", percentage: 13},
                {_id: 4, title: "Proposal", colorTag: "green", percentage: 8.75},
                {_id: 5, title: "Conversion to clients", colorTag: "teal", percentage: 1.6}
            ];
            const leaderboardData = {
                data: [
                    {name: "Martha Myers", img: uifaces15, mailchimp: {amount: 275, percentage: 15.1}, facebook: {amount: 614, percentage: 33.9}, google: {amount: 534, percentage: 29.4}, linkedin: {amount: 388, percentage: 21.4}, link: "link"},
                    {name: "Tammy Beck", img: uifaces16, mailchimp: {amount: 556, percentage: 33.8}, facebook: {amount: 406, percentage: 24.7}, google: {amount: 432, percentage: 26.2}, linkedin: {amount: 249, percentage: 15.1}, link: "link"},
                    {name: "Susan Kelley", img: uifaces17, mailchimp: {amount: 98, percentage: 6.8}, facebook: {amount: 587, percentage: 40.8}, google: {amount: 271, percentage: 18.8}, linkedin: {amount: 482, percentage: 33.5}, link: "link"},
                    {name: "Albert Newman", img: uifaces18, mailchimp: {amount: 248, percentage: 24.0}, facebook: {amount: 205, percentage: 19.8}, google: {amount: 427, percentage: 41.4}, linkedin: {amount: 151, percentage: 14.6}, link: "link"},
                    {name: "Kyle Grant", img: uifaces19, mailchimp: {amount: 108, percentage: 11.4}, facebook: {amount: 265, percentage: 28.1}, google: {amount: 443, percentage: 46.9}, linkedin: {amount: 127, percentage: 13.4}, link: "link"},
                ],
                titles: [
                    {_id: 1, name: "Mailchimp", shapeTag: "square", colorTag: "teal", ignoreInData: false},
                    {_id: 2, name: "Facebook", shapeTag: "square", colorTag: "indigo", ignoreInData: false},
                    {_id: 3, name: "Google", shapeTag: "square", colorTag: "pink", ignoreInData: false},
                    {_id: 4, name: "Linkedin", shapeTag: "square", colorTag: "purple", ignoreInData: false},
                ],
            }
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
            this.setState({leadsfunnel,leaderboardData,summeryData,leadsSourceData})
        }catch(e){
            //turn state one step back
        }
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
    handleDPChange(dpRadio){
        this.setState({dpRadio})
    }
    verticalBar(){
        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: 'Projects',
                data: [41, 20, 68, 17, 100, 83, 53],
                backgroundColor: "#00a28a",
                stack: 'Stack 0',
              },
              {
                label: 'Completed',
                data: [51, 14, 51, 63, 59, 83, 34],
                backgroundColor: "#5f4b8b",
                stack: 'Stack 1',
              },
            ]
        };
        const options= {
            plugins: {
            title: {
                display: false,
                text: 'Chart.js Bar Chart - Stacked'
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
                stacked: true,
            },
            y: {
                grid:{
                borderDash: [8,4],
                },
                stacked: true
            }
            }
        };
        return {options,data};
    }
    render() { 
        const {months,dpRadio,leadsfunnel,leaderboardData,summeryData,leadsSourceData} = this.state;
        const dates = this.datePickerDates();
        return ( 
            <React.Fragment>
                <div className="wrapper">
                    <div className="page has-sidebar has-sidebar-expand-xl"><div className="sidebar-backdrop"></div>
                        <div className="page-inner">
                            <Header/>
                            <div className="page-section">
                                <div className="section-block">
                                    <div className="metric-row metric-flush">
                                        <div className="col">
                                            <a href="page-team-members.html" className="metric metric-bordered align-items-center">
                                                <h2 className="metric-label"> Members </h2>
                                                <p className="metric-value h3">
                                                    <sub><i className="fas fa-user-friends fa-lg"></i></sub> <span className="value">12</span>
                                                </p>
                                            </a> 
                                        </div>
                                        <div className="col">
                                            <a href="page-team-projects.html" className="metric metric-bordered align-items-center">
                                                <h2 className="metric-label"> Projects </h2>
                                                <p className="metric-value h3">
                                                    <sub><i className="fas fa-code-branch fa-lg"></i></sub> <span className="value">26</span>
                                                </p>
                                            </a> 
                                        </div>
                                        <div className="col">
                                            <a href="page-team-projects.html" className="metric metric-bordered align-items-center">
                                                <h2 className="metric-label"> Active Projects </h2>
                                                <p className="metric-value h3">
                                                    <sub><i className="fas fa-history fa-lg"></i></sub> <span className="value">5</span>
                                                </p>
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                                <div className="section-block d-flex justify-content-between align-items-center my-3">
                                    <h1 className="section-title mb-0"> Achievement </h1>
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
                                
                                <div className="card card-body">
                                    <ul className="list-inline small">
                                        <li className="list-inline-item">
                                        <i className="fa fa-fw fa-circle text-teal"></i> Projects </li>
                                        <li className="list-inline-item">
                                        <i className="fa fa-fw fa-circle text-purple"></i> Completed </li>
                                    </ul>
                                    <div className="chartjs">{/* <div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div> */}
                                        <Bar {...this.verticalBar()}/>
                                    </div>
                                </div>
                                <div className="card-deck-xl">
                                    <LeadsFunnel data={leadsfunnel}/>
                                <div className="card card-fluid">
                                    <LeaderBoard data={leaderboardData.data} titles={leaderboardData.titles}/>
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
 
export default TeamOverview;