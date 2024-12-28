import PropTypes from "prop-types"
import "../index.css"
import { Link } from "react-router-dom";
Book.prototypes={
    bookData: PropTypes.object
}
function Book(props)
{
    // eslint-disable-next-line react/prop-types
    const {id,title,author,image_url}=props.bookData;
    return(<>
        <div className="Book" key={id}>
            <img src={image_url} alt=""  className="image"/>
            <span className="title">Title: {title}</span><br />
            <span className="author">{author}</span><br />
            <Link to={`/Book/${id}`} >
            <button className="viewDetails_btn">View Details</button></Link>
        </div>
     </>)
}
export default Book