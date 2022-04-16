const ViewComments = ({data}) => {
    return ( 
        data.map(comment => (
            <div className="media" key={"comment"+comment._id}>
                <figure className="user-avatar user-avatar-md ml-2">
                    <img src={comment.sender.avatar} alt=""/>
                </figure>
                <div className="media-body">
                    <div className="publisher keep-focus focus">
                        <span className="mb-2">{comment.sender.name}</span>
                        <div className="mb-3 text-muted">
                            {comment.content}
                        </div>
                    </div>
                </div>
            </div>
        ))
     );
}
 
export default ViewComments;