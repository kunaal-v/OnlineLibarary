import { useSelector } from "react-redux"
import Book from "./Book";

function Body()
{
    const books=useSelector(store=>store.books.selectedBooks)
    console.log(books);
    return (
        <>
         <p className="welcome_msg">Welcome to Online Library</p>
         <div className="Book_category_div">
         <ul className="Book_category">
            <li>Fiction</li>
            <li>Historical Fiction</li>
            <li>Classics</li>
            <li>Adventure</li>
            <li>Philosophical Fiction</li>
         </ul>
         </div>
         <div className="Books">
        {books.map(book=>
            <li key={book.id} style={{listStyle:"none"}}>
                <Book bookData={book}/>
                
            </li>
                
            )
        }
    </div>
        </>
    )
}
export default Body