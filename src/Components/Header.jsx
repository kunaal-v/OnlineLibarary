import "../index.css"
import { Link } from "react-router-dom"
function Header()
{
    
    return(<>
    <div className="header">
        <div className="header_text">Library System</div>
        <div className="header_btns">
            <Link to="/home" className="btn">Home</Link>
            <Link to="browseBook" className="btn">Browse Book</Link>
            <Link to="addBook" className="btn">Add Book</Link>
        </div>
        <div></div>
        <div></div>
    </div>
    
    </>)
}
export default Header