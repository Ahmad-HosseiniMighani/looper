import Contributors from './contributors';
import Files from './files';

const SideBar = ({contributorsData,filesData,
    contributorsOnMessage,contributorsOnInvite,contributorsOnCopyID,contributorsOnDelete,
    filesOnDownload,filesOnView,filesOnShare,filesOnCopyLink,filesOnDelete
}) => {
    return ( 
        <div className="page-sidebar">
            <header className="sidebar-header d-sm-none">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        {/* <a className="prevent-default" href="#" onclick="Looper.toggleSidebar()"> */}
                        <a className="prevent-default" href="#" data-toggle="sidebar"><i className="breadcrumb-icon fa fa-angle-right ml-2"></i>Back</a>
                    </li>
                </ol>
            </header>
            <ul className="nav nav-tabs nav-fill" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#team-profile" role="tab" aria-controls="team-profile" aria-selected="true">Contributors</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#message-files" role="tab" aria-controls="message-files" aria-selected="false">Files</a>
                </li>
            </ul>
            <div className="sidebar-section-fill">
            <div className="tab-content">
                <Contributors
                    data={contributorsData}
                    OnMessage={contributorsOnMessage}
                    OnInvite={contributorsOnInvite}
                    OnCopyID={contributorsOnCopyID}
                    OnDelete={contributorsOnDelete}
                />
                <Files
                    data={filesData}
                    OnDownload={filesOnDownload}
                    OnView={filesOnView}
                    OnShare={filesOnShare}
                    OnCopyLink={filesOnCopyLink}
                    OnDelete={filesOnDelete}
                />
            </div>
            </div>
        </div>
     );
}
 
export default SideBar;