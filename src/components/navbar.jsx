import React, { Component } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import $ from "jquery";
import { Link } from 'react-router-dom';
import { getActivities,getMessages } from './../fakedata/fakedata';
import auth from "./../services/authService.js"

import profPic from "../imgs/profile.jpg";
import logo from "../imgs/logo.svg";
import team1 from "../imgs/team1.jpg";


class NavBar extends Component {
    state = { 
      activites:[],
      messages:[],
      tileMenu:[],

     }
    async componentDidMount(){
        $('.perfect-scrollbar:not(".aside-menu")').each(function () {
            new PerfectScrollbar(this, { suppressScrollX: !0 });
        });// fixing scrolls
        try{
          // for activites and messages since we need image url and we're on development mode + local server we cant do anything good on Json so i made 2 api's so you can see with and wihtout image
          // const activites = await getActivities();//with image
          // const messages = await getMessages();//with image
          const activites = await auth.getActivities();//without image
          const messages = await auth.getMessages();//without image
          const tileMenu= await auth.getTileMenuItems();
          this.setState({activites,messages,tileMenu})
        }
        catch(e){
          //Throw Errors here or turn back state to prev state :>
        }
    }
    searchBar(title,subTitle,textImg,img,icon,link,linkText){
      return (
        <div className="list-group-item py-2">
          <a href={link} className="stretched-link">{linkText!=="" && <span className="sr-only">{linkText}</span>}</a>
    
          {img!=="" && <div className="user-avatar user-avatar-sm bg-muted">
            <img src={img} alt=""/>
          </div>}
          {(icon!=="" || textImg!=="") && <div className="tile tile-sm bg-muted">
            {icon!=="" && <i className={icon}></i>}
            {textImg!=="" && textImg}
          </div>}
          {subTitle!=="" && <div className="mr-2"> {title} </div>}
          {subTitle=="" && <div className="mr-2"><div className="mb-n1"> {title} </div><small className="text-muted">{subTitle}</small></div>}
        </div>
    
      )
    }
    activitiesItems(unread,text,date,img,link){
      return(
        <a href={link} className={unread ? "dropdown-item unread" : "dropdown-item"}>
          <div className="user-avatar">
            <img src={img} alt=""/>
          </div>
          <div className="dropdown-item-body">
            <p className="text"> {text} </p><span className="date">{date}</span>
          </div>
        </a>
      )
    }
    messagesItems(unread,title,text,date,tileImg,img,link){
      return(
        <a href={link} className={unread ? "dropdown-item unread" : "dropdown-item"}>
          {tileImg!=="" && <div className="tile tile-circle bg-teal"> {tileImg} </div>}
          {img!=="" && <div className="user-avatar">
            <img src={img} alt=""/>
          </div>}
          <div className="dropdown-item-body">
            <p className="subject"> {title} </p>
            <p className="text text-truncate"> {text} </p><span className="date">{date}</span>
          </div>
        </a>
      )
    }
    tileItems({title,icon,tileOption,link}){
      return(
        <div className="dropdown-sheet-item">
          <a href={link} className="tile-wrapper"><span className={tileOption}><i className={icon}></i></span> <span className="tile-peek">{title}</span></a>
        </div>
      )
    }
    render() { 
      const {activites,messages,tileMenu} = this.state;
        return ( 
          <header className="app-header app-header-dark">
            <div className="top-bar">
              <div className="top-bar-brand">
                <button className="hamburger hamburger-squeeze mr-2" type="button" data-toggle="aside-menu" aria-label="toggle aside menu"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button> 
                <a href="link"><img src={logo} alt=""/></a>
              </div>
              <div className="top-bar-list">
                <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">
                  <button className="hamburger hamburger-squeeze" type="button" data-toggle="aside" aria-label="toggle menu"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button> 
                </div>
                <div className="top-bar-item top-bar-item-full">
                  <form className="top-bar-search">
                    <div className="input-group input-group-search dropdown">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><span className="fas fa-search"></span></span>
                      </div>
                      <input type="text" className="form-control" data-bs-toggle="dropdown" data-bs-offset="0,10" aria-label="Search" placeholder="Search"/> 
                      <div className="dropdown-menu dropdown-menu-rich dropdown-menu-xl dropdown-menu-right ml-n4 mw-100">
                        <div className="dropdown-arrow ml-3"></div>
                        <div className="dropdown-menu-animation py-0">
                          <div className="dropdown-scroll perfect-scrollbar h-auto" style={{maxHeight: "360px"}}>
                            <div className="list-group list-group-flush list-group-reflow mb-2">
                              <h6 className="list-group-header d-flex justify-content-between">
                                <span>Shortcut</span>
                              </h6>
                              {this.searchBar("Create user","","","","fas fa-user-plus","link","")}
                              {this.searchBar("Create invoice","","","","fas fa-dollar-sign","link","")}
                              <h6 className="list-group-header d-flex justify-content-between mt-2">
                                <span>In projects</span> <a href="link" className="font-weight-normal">Show more</a>
                              </h6>
                              {this.searchBar("Bootstrap","Just now","",team1,"","link","Go to search result")}
                              {this.searchBar("Slack","Updated 25 minutes ago","",team1,"","link","Go to search result")}
                              <h6 className="list-group-header d-flex justify-content-between mt-2">
                                <span>Another section</span> <a href="link" className="font-weight-normal">Show more</a>
                              </h6>
                              {this.searchBar("Product name","Updated 25 minutes ago","P","","","link","Go to search result")}
                            </div>
                          </div>
                          <a href="link" className="dropdown-footer">Show all results</a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">
                  <ul className="header-nav nav">
                    <li className="nav-item dropdown header-nav-dropdown has-notified">
                      <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="5,10" aria-expanded="false"><span className="fas fa-wave-square"></span></Link> 
                      <div className="dropdown-menu dropdown-menu-rich">
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu-animation py-0">
                          <h6 className="dropdown-header stop-propagation">
                            <span>Activities <span className="badge">(2)</span></span>
                          </h6>
                          <div className="dropdown-scroll perfect-scrollbar">
                            {activites.map((activity)=>{
                              return this.activitiesItems(activity.unread,activity.text,activity.date,activity.img,activity.link);
                            })}
                          </div>
                          <a href="user-activities" className="dropdown-footer">All activities <i className="fas fa-fw fa-long-arrow-alt-right"></i></a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown header-nav-dropdown has-notified">
                      <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="5,10" aria-expanded="false"><span className="fas fa-envelope-open-text"></span></Link> 
                      <div className="dropdown-menu dropdown-menu-rich">
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu-animation py-0">
                          <h6 className="dropdown-header stop-propagation">
                            <span>Messages</span> <a href="link">Mark all as read</a>
                          </h6>
                          <div className="dropdown-scroll perfect-scrollbar">
                          {messages.map((message)=>{
                              return this.messagesItems(message.unread,message.title,message.text,message.date,message.tileImg,message.img,message.link);
                            })}
                          </div>
                          <a href="page-messages.html" className="dropdown-footer">All messages <i className="fas fa-fw fa-long-arrow-alt-right"></i></a>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown header-nav-dropdown">
                      <Link className="nav-link" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="5,10" aria-expanded="false"><span className="fas fa-th"></span></Link> 
                      <div className="dropdown-menu dropdown-menu-rich">
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu-animation py-0">
                          <div className="dropdown-sheets">
                            {tileMenu.map(item=>(this.tileItems(item)))}
                            {/* {this.tileItems("Teams","fas fa-users","tile tile-lg bg-indigo","link")}
                            {this.tileItems("Projects","fas fa-code-branch","tile tile-lg bg-teal","link")}
                            {this.tileItems("Tasks","fa fa-tasks","tile tile-lg bg-pink","link")}
                            {this.tileItems("Feeds","fas fa-fire","tile tile-lg bg-yellow","link")}
                            {this.tileItems("Files","fas fa-file-alt","tile tile-lg bg-cyan","link")}                     */}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="dropdown d-none d-md-flex">
                    <button className="btn-account" type="button" data-bs-toggle="dropdown" data-bs-offset="68,9" aria-expanded="false">
                      <span className="user-avatar user-avatar-md">
                        <img src={profPic} alt=""/>
                      </span>
                      <span className="account-summary pr-lg-4 d-none d-lg-block">
                        <span className="account-name">Beni Arisandi</span>
                        <span className="account-description">Marketing Manager</span>
                      </span>
                    </button> 
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="dropdown-arrow d-lg-none"></div>
                      <div className="dropdown-arrow ml-3 d-none d-lg-block"></div>
                      <div className="dropdown-menu-animation">
                        <h6 className="dropdown-header d-none d-md-block d-lg-none"> Beni Arisandi </h6><a className="dropdown-item" href="user-profile.html"><span className="dropdown-icon fas fa-user"></span> Profile</a> <a className="dropdown-item" href="auth-signin-v1.html"><span className="dropdown-icon fas fa-sign-out-alt"></span> Logout</a>
                        <div className="dropdown-divider"></div><a className="dropdown-item" href="link">Help Center</a> <a className="dropdown-item" href="link">Ask Forum</a> <a className="dropdown-item" href="link">Keyboard Shortcuts</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
         );
    }
}
 
export default NavBar;