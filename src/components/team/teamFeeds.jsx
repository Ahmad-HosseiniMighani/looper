import React, { Component } from 'react';
import uiface from "../../imgs/uifaces17.jpg";
import profile from "../../imgs/profile.jpg";
import img1 from "../../imgs/img-1.jpg";
import img4 from "../../imgs/img-4.jpg";
import SideBar from './sideBar';
import Header from './header';
// i have no idea how to im getting Data for this component so i'll just leave HTMl Template for now
class TeamFeeds extends Component {
    state = { 
      summeryData: [],
      leadsSourceData: [],
     }
    componentDidMount(){
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
          this.setState({summeryData,leadsSourceData})
      }catch(e){
          //turn state one step back
      }
    }
    render() { 
      const {summeryData,leadsSourceData} = this.state
        return ( 
          <React.Fragment>
            <div className="wrapper">
              <div className="page has-sidebar has-sidebar-expand-xl"><div className="sidebar-backdrop"></div>
                <div className="page-inner">
                <Header/>
                  <div className="page-section">
                    <div className="section-block">
                      <div className="feed-publisher rounded">
                        <div className="media">
                          <figure className="user-avatar user-avatar-md">
                            <img src={profile} alt=""/>
                          </figure>
                          <div className="media-body">
                            <div className="publisher">
                              <div className="publisher-input">
                                <textarea className="form-control" placeholder="What happening?"></textarea>
                              </div>
                              <div className="publisher-actions">
                                <div className="publisher-tools ml-auto"> {/* RTL */}
                                  <div className="btn btn-light btn-icon fileinput-button">
                                    <i className="fa fa-paperclip"></i> <input type="file" id="pfAttachment" name="pfAttachment[]" multiple=""/>
                                  </div><button type="button" className="btn btn-light btn-icon"><i className="far fa-smile"></i></button>
                                </div>
                                <button type="submit" className="btn btn-primary">Publish</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feed">
                        <div className="feed-post card">
                          <div className="card-header card-header-fluid">
                            <a href="#" className="btn-account" role="button">
                              <div className="user-avatar user-avatar-lg">
                                <img src={profile} alt=""/>
                              </div>
                              <div className="account-summary">
                                <p className="account-name"> Beni arisandi </p>
                                <p className="account-description"> 3 Hours ago </p>
                              </div>
                            </a> 
                            <div className="dropdown align-self-start mr-auto"> {/* RTL */}
                              <button className="btn btn-icon btn-light text-muted" data-bs-toggle="dropdown"><i className="fa fa-fw fa-ellipsis-v"></i></button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-arrow"></div><a href="#" className="dropdown-item">Get notified</a> <a href="#" className="dropdown-item">Mute notified</a> <a href="#" className="dropdown-item">Permalink</a> <a href="#" className="dropdown-item">Block this user</a> <a href="#" className="dropdown-item">Remove</a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <p> Hey there! this is a post with engagement, <a href="#" className="mention">@stilearning</a> ratione doloremque eos <a href="#" className="hashtag">#looper</a> aliquid ipsam, molestias cumque asperiores mollitia nam corrupti dolore recusandae nihil? </p>
                            <div className="feed-summary">
                              <a href="#" className="feed-summary-item ml-auto"> {/* RTL */}
                                <div className="avatar-group ml-2"> {/* RTL */}
                                  <figure className="user-avatar user-avatar-xs">
                                    <img src={uiface} alt=""/>
                                  </figure>
                                  <figure className="user-avatar user-avatar-xs">
                                    <img src={uiface} alt=""/>
                                  </figure>
                                  <figure className="user-avatar user-avatar-xs">
                                    <img src={uiface} alt=""/>
                                  </figure>
                                </div>6.3K likes
                              </a> <a href="#" className="feed-summary-item">826 comments</a> <a href="#" className="feed-summary-item">·</a> <a href="#" className="feed-summary-item">2.9K shares</a>
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-heart"></i> Like</button>
                            </div>
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-comment"></i> Comment</button>
                            </div>
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-share"></i> Share</button>
                            </div>
                          </div>
                        </div>
                        <div className="feed-comments card">
                          <div className="card-header d-flex justify-content-between">
                            <a href="#">View more comments</a> <span className="text-muted">72 of 826</span>
                          </div>
                          <div role="log" className="conversations">
                            <ul className="conversation-list">
                              <li className="conversation-inbound">
                                <div className="conversation-avatar">
                                  <a href="#" className="user-avatar"><img src={profile} alt=""/></a>
                                </div>
                                <div className="conversation-message">
                                  <div className="conversation-meta">
                                    <a href="#"><strong>Beni arisandi</strong></a> <span className="mention mr-1">Author</span> <small className="time mr-1">1hr</small> {/* RTL */}
                                  </div>
                                  <div className="conversation-message-text"> Quaerat eum quia ad, obcaecati ex placeat autem, molestiae iusto ab ipsum eius dicta dolores corporis debitis quasi! Neque, modi impedit iusto! </div>
                                  <div className="conversation-meta">
                                    <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Edit</a> · <a href="#">Delete</a>
                                  </div>
                                </div>
                              </li>
                              <li className="conversation-inbound">
                                <div className="conversation-avatar">
                                  <a href="#" className="tile tile-circle bg-muted"><i className="fas fa-user"></i></a>
                                </div>
                                <div className="conversation-message">
                                  <div className="conversation-meta">
                                    <a href="#"><strong>Diane Peters</strong></a> <small className="time ml-1">32m</small>
                                  </div>
                                  <div className="conversation-message-text"> Consectetur quis veritatis aut maiores omnis, expedita officiis delectus perspiciatis a dolores. </div>
                                  <div className="conversation-meta">
                                    <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Edit</a> · <a href="#">Delete</a>
                                  </div>
                                  <ul className="conversation-list">
                                    <li className="conversation-inbound">
                                      <div className="conversation-message">
                                        <div className="conversation-meta">
                                        {/* <a href="#"><i className="fa fa-reply fa-rotate-180"> */}
                                          <a href="#"><i className="fa fa-reply fa-rotate-180 fa-flip-vertical"></i></a> <a href="#" className="user-avatar user-avatar-xs mx-1"><img src={uiface} alt=""/></a> <a href="#">Betty Simmons · 5 Replies</a> · 12m </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="conversation-inbound">
                                <div className="conversation-avatar">
                                  <a href="#" className="user-avatar"><img src={uiface} alt=""/></a>
                                </div>
                                <div className="conversation-message">
                                  <div className="conversation-meta">
                                    <a href="#"><strong>Jennifer Gray</strong></a> <small className="time ml-1">Edited 14m</small>
                                  </div>
                                  <div className="conversation-message-text"> Officiis numquam, repellat nam tempore sit aliquid nostrum autem excepturi quis nihil. </div>
                                  <div className="conversation-meta">
                                    <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Edit</a> · <a href="#">Delete</a>
                                  </div>
                                  <ul className="conversation-list">
                                    <li className="conversation-inbound">
                                      <div className="conversation-avatar">
                                        <a href="#" className="user-avatar user-avatar-sm"><img src={uiface} alt=""/></a>
                                      </div>
                                      <div className="conversation-message">
                                        <div className="conversation-meta">
                                          <a href="#"><strong>Russell Gilbert</strong></a> <small className="time ml-1">4m</small>
                                        </div>
                                        <div className="conversation-message-text"> Enim laborum, architecto molestias velit quod tempora! </div>
                                        <div className="conversation-meta">
                                          <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Edit</a> · <a href="#">Delete</a>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="conversation-inbound">
                                      <div className="conversation-avatar">
                                        <a href="#" className="user-avatar user-avatar-sm"><img src={profile} alt=""/></a>
                                      </div>
                                      <div className="conversation-message">
                                        <div className="conversation-meta">
                                          <a href="#"><strong>Beni Arisandi</strong></a> <span className="mention ml-1">Author</span> <small className="time ml-1">Just now</small>
                                        </div>
                                        <div className="conversation-message-text">
                                          <a href="#"><strong></strong></a> Adipisicing elit. </div>
                                        <div className="conversation-meta">
                                          <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Edit</a> · <a href="#">Delete</a>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="conversation-action mt-3">
                                      <div className="media">
                                        <figure className="user-avatar user-avatar-sm mt-1 ml-2">   {/* RTL */}
                                          <img src={profile} alt=""/>
                                        </figure>
                                        <div className="media-body">
                                          <div className="publisher publisher-alt">
                                            <div className="publisher-input">
                                              <textarea name="pcsPublisherInput" className="form-control" placeholder="Write a comment"></textarea>
                                            </div>
                                            <div className="publisher-actions">
                                              <div className="publisher-tools ml-auto">   {/* RTL */}
                                                <div className="btn btn-light btn-icon fileinput-button">
                                                  <i className="fa fa-paperclip"></i> <input type="file" id="pcs-attachment" name="pcsAttachment[]" multiple=""/>
                                                </div><button type="button" className="btn btn-light btn-icon"><i className="far fa-smile"></i></button>
                                              </div>
                                              <button type="submit" className="btn btn-primary">Publish</button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="conversation-inbound">
                                <div className="conversation-avatar">
                                  <a href="#" className="user-avatar"><img src={uiface} alt=""/></a>
                                </div>
                                <div className="conversation-message">
                                  <div className="conversation-meta">
                                    <a href="#"><strong>Zachary Fowler</strong></a> <small className="time ml-1">5m</small>
                                  </div>
                                  <div className="conversation-message-text"> Ad earum dolore excepturi itaque officia. </div>
                                  <div className="conversation-meta">
                                    <a href="#">Like</a> · <a href="#">Reply</a> · <a href="#">Edit</a> · <a href="#">Delete</a>
                                  </div>
                                  <ul className="conversation-list">
                                    <li className="conversation-inbound">
                                      <div className="conversation-message">
                                        <div className="conversation-meta">
                                        {/* <i className="fa fa-reply fa-rotate-180"></i> */}
                                          <a href="#"><i className="fa fa-reply fa-rotate-180 fa-flip-vertical"></i></a> <a href="#">View 8 Replies</a>   {/* RTL */}
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="conversation-action mt-3">
                                <div className="media">
                                  <figure className="user-avatar ml-2">   {/* RTL */}
                                    <img src={profile} alt=""/>
                                  </figure>
                                  <div className="media-body">
                                    <div className="publisher publisher-alt">
                                      <div className="publisher-input">
                                        <textarea name="pcPublisherInput" className="form-control" placeholder="Write a comment"></textarea>
                                      </div>
                                      <div className="publisher-actions">
                                        <div className="publisher-tools ml-auto">   {/* RTL */}
                                          <div className="btn btn-light btn-icon fileinput-button">
                                            <i className="fa fa-paperclip"></i> <input type="file" id="pc-attachment" name="pcAttachment[]" multiple=""/>
                                          </div><button type="button" className="btn btn-light btn-icon"><i className="far fa-smile"></i></button>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Publish</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="feed">
                        <div className="feed-post card">
                          <div className="card-header card-header-fluid">
                            <a href="#" className="btn-account" role="button">
                              <div className="user-avatar user-avatar-lg">
                                <img src={uiface} alt=""/>
                              </div>
                              <div className="account-summary">
                                <p className="account-name"> Christina Gray </p>
                                <p className="account-description"> New member · Yesterday at 5:48 PM </p>
                              </div>
                            </a> 
                            <div className="dropdown align-self-start mr-auto">   {/* RTL */}
                              <button className="btn btn-icon btn-light text-muted" data-bs-toggle="dropdown"><i className="fa fa-fw fa-ellipsis-v"></i></button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-arrow"></div><a href="#" className="dropdown-item">Get notified</a> <a href="#" className="dropdown-item">Mute notified</a> <a href="#" className="dropdown-item">Permalink</a> <a href="#" className="dropdown-item">Block this user</a> <a href="#" className="dropdown-item">Remove</a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <p className="mb-2"> Hey there! this is a post with Attachments, <a href="#" className="mention">@stilearning</a> ratione doloremque eos <a href="#" className="hashtag">#looper</a> aliquid ipsam, molestias cumque asperiores mollitia nam corrupti dolore recusandae nihil? </p>
                            <div className="pswp-gallery" data-pswp-uid="1">
                              <div className="feed-attachments">
                                <div className="attachment-item">
                                  <div className="card-figure">
                                    <figure className="figure">
                                      <div className="figure-img">
                                        <img className="img-fluid" src={img1} alt="Card image cap"/> <a href={img1} className="img-link" data-size="600x450"><span className="tile tile-circle bg-danger"><span className="fas fa-eye"></span></span> <span className="img-caption d-none">Card image cap</span></a>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                                <div className="attachment-item">
                                  <div className="card-figure">
                                    <figure className="figure">
                                      <div className="figure-img">
                                        <img className="img-fluid" src={img4} alt="Card image cap"/> <a href={img4} className="img-link" data-size="600x450"><span className="tile tile-circle bg-danger"><span className="fas fa-eye"></span></span> <span className="img-caption d-none">Card image cap</span></a>
                                      </div>
                                    </figure>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="feed-summary">
                              <a href="#" className="feed-summary-item ml-auto">6.3K likes</a> <a href="#" className="feed-summary-item">826 comments</a> <a href="#" className="feed-summary-item">·</a> <a href="#" className="feed-summary-item">2.9K shares</a>   {/* RTL */}
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-heart"></i> Like</button>
                            </div>
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-comment"></i> Comment</button>
                            </div>
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-share"></i> Share</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="feed">
                        <div className="feed-post card">
                          <div className="card-header card-header-fluid">
                            <a href="#" className="btn-account" role="button">
                              <div className="user-avatar user-avatar-lg">
                                <img src={uiface} alt=""/>
                              </div>
                              <div className="account-summary">
                                <p className="account-name"> Ethan Marshall </p>
                                <p className="account-description"> New member · Yesterday at 5:48 PM </p>
                              </div>
                            </a> 
                            <div className="dropdown align-self-start mr-auto">   {/* RTL */}
                              <button className="btn btn-icon btn-light text-muted" data-bs-toggle="dropdown"><i className="fa fa-fw fa-ellipsis-v"></i></button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-arrow"></div><a href="#" className="dropdown-item">Get notified</a> <a href="#" className="dropdown-item">Mute notified</a> <a href="#" className="dropdown-item">Permalink</a> <a href="#" className="dropdown-item">Block this user</a> <a href="#" className="dropdown-item">Remove</a>
                              </div>
                            </div>
                          </div>
                          <div className="card-body">
                            <p className="mb-2"> Hey there! this is a post with outbound link, <a href="#" className="mention">@stilearning</a> ratione doloremque eos <a href="#" className="hashtag">#looper</a> aliquid ipsam, molestias cumque asperiores mollitia nam corrupti dolore recusandae nihil? </p>
                            <a href="#" className="outbound-link">
                              <h5 className="outbound-title"> Expanding Your Home Network’s Reach </h5>
                              <p className="outbound-text"> Atque natus, quod quas commodi beatae inventore eligendi recusandae necessitatibus eum distinctio. </p>
                            </a> 
                            <div className="feed-summary">
                              <a href="#" className="feed-summary-item ml-auto">6.3K likes</a> <a href="#" className="feed-summary-item">826 comments</a> <a href="#" className="feed-summary-item">·</a> <a href="#" className="feed-summary-item">2.9K shares</a>   {/* RTL */}
                            </div>
                          </div>
                          <div className="card-footer">
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-heart"></i> Like</button>
                            </div>
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-comment"></i> Comment</button>
                            </div>
                            <div className="card-footer-item">
                              <button type="button" className="btn btn-reset text-nowrap text-muted"><i className="fa fa-fw fa-share"></i> Share</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <SideBar summeryData={summeryData} leadsSourceData={leadsSourceData}/>
              </div>
            </div>
          </React.Fragment>
         );
    }
}
 
export default TeamFeeds;