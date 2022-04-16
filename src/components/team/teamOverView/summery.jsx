const Summery = ({data}) => {
    return ( 
        <div className="card-body">
            {/* <button type="button" className="close mt-n1 d-none d-xl-none d-sm-block" onclick="Looper.toggleSidebar()" aria-label="Close"><span aria-hidden="true">×</span></button> */}
            <button type="button" className="close mt-n1 d-none d-xl-none d-sm-block" data-toggle="sidebar" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 className="card-title"> Summary </h4>
            <div className="row">
                {data.map(item => (
                    <div key={item._id} className="col-6">
                        <div className="metric">
                        <h6 className="metric-value"> {item.value} </h6>
                        <p className="metric-label mt-1"> {item.title} </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Summery;