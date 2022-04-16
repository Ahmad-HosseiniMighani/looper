import team4 from "../../imgs/team4.jpg"
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="page-title-bar">
            <div className="d-flex justify-content-between align-items-center">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active">
                            {/* <a href="page-teams.html"><i className="breadcrumb-icon fa fa-angle-left mr-2"></i>Teams</a> <<<<<<<<<<< LTR*/}
                            <a href="page-teams.html"><i className="breadcrumb-icon fa fa-angle-right ml-2"></i>Teams</a>
                        </li>
                    </ol>
                </nav>
                {/* <button type="button" className="btn btn-light btn-icon d-xl-none" data-toggle="sidebar"><i className="fa fa-angle-double-left"></i></button> */}
                <button type="button" className="btn btn-light btn-icon d-xl-none" data-toggle="sidebar"><i className="fa fa-angle-double-right"></i></button>
            </div>
            <div className="row text-center text-sm-left">
                <div className="col-sm-auto col-12 mb-2">
                    <div className="has-badge has-badge-bottom">
                        <a href="#" className="user-avatar user-avatar-xl"><img src={team4} alt=""/></a> <span className="tile tile-circle tile-xs" data-bs-toggle="tooltip" title="" data-bs-original-title="Public"><i className="fas fa-globe"></i></span>
                    </div>
                </div>
                <div className="col" style={{"text-align": "right"}}>{/* RTL     text-align: right; */}
                    <h1 className="page-title"> Creative Division </h1>
                    <p className="text-muted"> We make stunning and cool responsive web and app design which suitable for any project purpose for your business. </p>
                </div>
            </div>
            <div className="nav-scroller border-bottom">
                <div className="nav nav-tabs">
                    <NavLink className="nav-link" to="teamoverview">Overview</NavLink>
                    <NavLink className="nav-link" to="teamfeeds">Feeds</NavLink>
                    <NavLink className="nav-link" to="teamprojects">Projects</NavLink>
                    <NavLink className="nav-link" to="teammembers">Members</NavLink>
                    <a className="nav-link" href="setting">Settings</a>
                </div>
            </div>
        </header>
     );
}
 
export default Header;