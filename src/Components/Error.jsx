import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
function Error()
{
    const err=useRouteError();
    return(<>
    <div className="Error_message">
    <h1>{err.status} {err.statusText}</h1> 
        <p>{err.data}</p>
        <Link><button className="Error_btn">:Back to Home</button></Link>
    
    </div>
        </>)
}
export default Error;