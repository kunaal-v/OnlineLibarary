import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
function BookDetails()
{
    const params=useParams()
    const [book,setBook]=useState([]);
    const allBooks=useSelector(store=>store.books.data);
    useEffect(()=>{
        if(allBooks)
        {
            const data=allBooks.filter(book=>book.id==params.id);
            setBook(data);
        }
    },[params.id,allBooks])
    return(
        book.map(book=><li key={book.id} className="bookDetails_li" >
            <div className="BookDetails">
                <div className="BookDetails_img"> 
                    <img 
                    src={book.image_url} 
                    alt="This is image" 
                    width="200px"
                    height="300px"
                   style={{ border: "1px solid lightGray"}}
                    className='book-cover'/>
                </div>
                <div className="BookDetails_data">
                <h1>{book.title} </h1>
                <p style={{fontStyle:"italic"}}> {book.author}</p>
                <strong>Category: {book.category}</strong>
                <p>Description: {book.description}</p>
                <h5>Rating: {book.rating}</h5>
                <Link to="/browseBook"><button className="btn">Back to Browse</button></Link>
                </div>
            </div>
            {/* <span>{userInfo.loggedInUser}</span> */}
        </li>)
    )
}
export default BookDetails