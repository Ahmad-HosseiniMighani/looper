const MetricRow = ({data}) => {
    return ( 
        <div className="section-block">
            <div className="metric-row">
                {data.map(item => (
                    <div className="col" key={item._id}>
                        <div className="metric metric-bordered">
                        <h2 className="metric-label"> {item.title} </h2>
                        <p className="metric-value h1">
                            {item.valueSign == "$" && <sup>{item.valueSign}</sup>} <span className="value">{item.value}</span> {item.valueSign != "$" && <sup>{item.valueSign}</sup>}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default MetricRow;