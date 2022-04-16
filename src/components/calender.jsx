import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

class calendar extends Component {
    state = { 
        calendarIsToday: true,
        calendarViewMode: "dayGridMonth",
        calendarTitle: "Loading...",
    }
    calendarRef = React.createRef()
    componentDidMount(){
        this.setState({calendarTitle: this.getCalendarTitle()})
    }
    calendarNext(){
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.next()
        this.setState({
            calendarIsToday: this.isCalendarShowsToday(),
            calendarTitle: this.getCalendarTitle()
        })
    }
    calendarPrev(){
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.prev()
        this.setState({
            calendarIsToday: this.isCalendarShowsToday(),
            calendarTitle: this.getCalendarTitle()
        })
    }
    calendarToday(){
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.today()
        this.setState({
            calendarIsToday: this.isCalendarShowsToday(),
            calendarTitle: this.getCalendarTitle()
        })
    }
    isCalendarShowsToday(){
        try{
            let calendarApi = this.calendarRef.current.getApi()
            return calendarApi.getDate().toDateString() == (new Date()).toDateString()
        }catch(e){
            return false //
        }
    }
    changeCalendarView(viewName){
        let calendarApi = this.calendarRef.current.getApi()
        calendarApi.changeView(viewName)
        this.setState({
            calendarViewMode: viewName,
            calendarTitle: this.getCalendarTitle()
        })
    }
    getCalendarTitle(){
        let calendarApi = this.calendarRef.current.getApi()
        return calendarApi.getCurrentData().viewTitle
    }
    render() { 
        const {calendarIsToday,calendarViewMode,calendarTitle} = this.state
        return ( 
            <div className="wrapper">
                <div className="page has-sidebar has-sidebar-fixed has-sidebar-expand-xl"><div className="sidebar-backdrop"></div>
                    <div className="page-inner page-inner-fill">
                        <nav className="page-navs pl-3">
                            <div className="btn-group" dir="ltr">
                                <button className="btn btn-secondary" onClick={()=>this.calendarPrev()} data-nav="prev"><i className="fa fa-chevron-left"></i></button>
                                <button className="btn btn-secondary" onClick={()=>this.calendarToday()} data-nav="today" disabled={calendarIsToday}>Today</button>
                                <button className="btn btn-secondary" onClick={()=>this.calendarNext()} data-nav="next"><i className="fa fa-chevron-right"></i></button>
                            </div>
                            <div className="mr-auto">
                                <button type="button" className="btn btn-success">Add event</button>{" "}
                                <button type="button" className="btn btn-secondary d-xl-none" data-toggle="sidebar"><i className="fas fa-tasks"></i></button>
                            </div>
                        </nav>
                        <div className="board">
                            <div className="card">
                                <header className="card-header d-flex flex-column flex-sm-row align-items-center justify-content-between">
                                    <h5 className="card-title mb-sm-0" id="calendar-title">{calendarTitle}</h5>
                                    <div className="btn-group" dir="ltr">
                                        <button type="button" className={"btn btn-secondary " + (calendarViewMode == "dayGridMonth" && "active")} onClick={() => this.changeCalendarView("dayGridMonth")}>Month</button>
                                        <button type="button" className={"btn btn-secondary " + (calendarViewMode == "timeGridWeek" && "active")} onClick={() => this.changeCalendarView("timeGridWeek")}>Week</button>
                                        <button type="button" className={"btn btn-secondary " + (calendarViewMode == "timeGridDay" && "active")} onClick={() => this.changeCalendarView("timeGridDay")}>Day</button>
                                    </div>
                                </header>
                                <FullCalendar
                                    ref={this.calendarRef}
                                    headerToolbar={false}
                                    plugins={[ dayGridPlugin,timeGridPlugin ]}
                                    initialView="dayGridMonth"
                                />
                            </div>
                        </div>
                        <div className="page-sidebar page-sidebar-fixed">
                            <header className="sidebar-header d-sm-none">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active">
                                            {/* <a href="#" onclick="Looper.toggleSidebar()"><i className="breadcrumb-icon fa fa-angle-left mr-2"></i>Back</a> */}
                                            <a href="#" data-toggle="sidebar"><i className="breadcrumb-icon fa fa-angle-right ml-2"></i>Back</a>
                                        </li>
                                    </ol>
                                </nav>
                            </header>
                            <div className="sidebar-section-fill">
                                <div id="calendar-list" className="fc fc-media-screen fc-direction-ltr fc-theme-bootstrap">
                                    <div className="fc-view-harness fc-view-harness-passive">
                                        <div className="fc-list table-bordered fc-list-sticky fc-listMonth-view fc-view">
                                            <div className="fc-scroller" style={{overflow: "visible"}}>
                                                <div className="fc-list-empty">
                                                    <div className="fc-list-empty-cushion">No events to display</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default calendar;