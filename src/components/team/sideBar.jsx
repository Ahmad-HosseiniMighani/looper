import Summery from './teamOverView/summery';
import LeadsSource from './teamOverView/leadsSource';
import uiface from "../../imgs/uifaces17.jpg"

const SideBar = ({summeryData,leadsSourceData}) => {
    return ( 
        <div className="page-sidebar">
            <header className="sidebar-header d-sm-none">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">
                        {/* <a href="#" onclick="Looper.toggleSidebar()"><i className="breadcrumb-icon fa fa-angle-left mr-2"></i>Back</a> <<<<<<< Default + LTR*/}
                        <a href="#" data-toggle="sidebar"><i className="breadcrumb-icon fa fa-angle-right ml-2"></i>Back</a>
                        </li>
                    </ol>
                </nav>
            </header>
            <div className="sidebar-section-fill">
                <div className="card card-reflow">
                    <Summery data={summeryData}/>
                    <LeadsSource data={leadsSourceData}/>
                    {/* this part can be a single or mixed component but i have no idea how im receiving data for it so i'll leave it as HTML Template */}
                    <div className="card-body border-top">
                        <div className="d-flex justify-content-between my-3">
                            <h4 className="card-title"> Recent activity </h4>
                            <a href="#">View all</a>
                        </div>
                        <ul className="timeline timeline-fluid">
                            <li className="timeline-item">
                                <div className="timeline-figure">
                                    <span className="tile tile-circle tile-sm"><i className="far fa-calendar-alt fa-lg"></i></span>
                                </div>
                                <div className="timeline-body">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="mb-0">
                                                <a href="#">Jeffrey Wells</a> created a <a href="#">schedule</a>
                                            </p>
                                            <span className="timeline-date">About a minute ago</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-figure">
                                    <span className="tile tile-circle tile-sm"><i className="fas fa-comments fa-lg"></i></span>
                                </div>
                                <div className="timeline-body">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="mb-0">
                                                <a href="#">Anna Vargas</a> logged a <a href="#">chat</a> with team
                                            </p>
                                            <span className="timeline-date">3 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-figure">
                                    <span className="tile tile-circle tile-sm"><i className="fa fa-tasks fa-lg"></i></span>
                                </div>
                                <div className="timeline-body">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="mb-0">
                                                <a href="#">Arthur Carroll</a> created a <a href="#">task</a>
                                            </p>
                                            <span className="timeline-date">8:14pm</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-figure">
                                    <span className="tile tile-circle tile-sm"><i className="fas fa-user-plus fa-lg"></i></span>
                                </div>
                                <div className="timeline-body">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="mb-0">
                                                <a href="#">Sara Carr</a> invited to <a href="#">Stilearn Admin</a> project
                                            </p>
                                            <span className="timeline-date">7:21pm</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-figure">
                                    <span className="tile tile-circle tile-sm"><i className="fa fa-folder fa-lg"></i></span>
                                </div>
                                <div className="timeline-body">
                                    <div className="media">
                                        <div className="media-body">
                                            <p className="mb-0">
                                                <a href="#">Angela Peterson</a> added <a href="#">Looper Admin</a> to collection
                                            </p>
                                            <span className="timeline-date">5:21pm</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="timeline-item">
                                <div className="timeline-figure">
                                    <span className="tile tile-circle tile-sm"><i className="fas fa-user fa-lg"></i></span>
                                </div>
                                <div className="timeline-body">
                                    <div className="media">
                                        <div className="media-body">
                                            <div className="avatar-group mb-2">
                                                <a href="#" className="user-avatar user-avatar-sm"><img src={uiface} alt=""/></a>
                                                <a href="#" className="user-avatar user-avatar-sm"><img src={uiface} alt=""/></a>
                                                <a href="#" className="user-avatar user-avatar-sm"><img src={uiface} alt=""/></a>
                                                <a href="#" className="user-avatar user-avatar-sm"><img src={uiface} alt=""/></a>
                                            </div>
                                            <p className="mb-0">
                                                <a href="#">Willie Dixon</a> and 3 others followed you
                                            </p>
                                            <span className="timeline-date">4:32pm</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* this part can be a single or mixed component but i have no idea how im receiving data for it so i'll leave it as HTML Template */}
                </div>
            </div>
        </div>
     );
}
 
export default SideBar;