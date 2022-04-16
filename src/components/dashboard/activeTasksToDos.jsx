const ActiveTasksToDos = ({data,handleClick}) => {
    return ( 
        <div>
            {data.map(item=>(
                <div className="todo">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={item.id} checked={item.isChecked} onClick={()=>handleClick(item.id)}/> <label className="custom-control-label" htmlFor={item.id}>{item.label} {item.overdue !== "" &&  " — " && <span className="text-red small">Overdue in 3 days</span>}</label>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default ActiveTasksToDos;