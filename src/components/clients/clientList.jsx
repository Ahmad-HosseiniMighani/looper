const Clientlist = ({data, onSelect}) => {
    return ( 
        <div className="page-inner page-inner-fill position-relative">
            <header className="page-navs bg-light shadow-sm">
                
                <div className="input-group has-clearable">
                <button type="button" className="close" aria-label="Close"><span aria-hidden="true"><i className="fa fa-times-circle"></i></span></button> <label className="input-group-prepend" for="searchClients"><span className="input-group-text"><span className="fas fa-search"></span></span></label> <input type="text" className="form-control" id="searchClients" data-filter=".board .list-group-item" placeholder="Find clients"/>
                </div>
            </header>
            <button type="button" className="btn btn-primary btn-floated position-absolute" data-bs-toggle="modal" data-bs-target="#clientNewModal" title="Add new client"><i className="fa fa-plus"></i></button> 
            <div className="board p-0 perfect-scrollbar ps ps--active-y">
                <div className="list-group list-group-flush list-group-divider border-top" data-toggle="radiolist">
                    {data.map((item)=>(
                        <div className="list-group-item" data-toggle="sidebar" data-sidebar="show" onClick={()=>onSelect(item._id)} key={item._id}>
                            {/* className="list-group-item active" use this class if its active :)*/}
                            <a href="#" className="stretched-link"></a> 
                            <div className="list-group-item-figure">
                                <div className={"tile tile-circle bg-"+item.colorTag}> {item.title[0]} </div>
                            </div>
                            <div className="list-group-item-body">
                                <h4 className="list-group-item-title"> {item.title} </h4>
                                <p className="list-group-item-text"> {item.address} </p>
                            </div>
                        </div>
                    ))}
                    {/* You can make conditional for this Div so make it apear when you need to */}
                    <div className="list-group-item">
                        <div className="list-group-item-body text-center py-4">
                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Clientlist;