const DropDown = ({children}) => {
    return ( 
        <div className="dropdown-menu">
            
            <div className="dropdown-menu-animation">
            {children}
            </div>
        </div>
     );
}
 
export default DropDown;