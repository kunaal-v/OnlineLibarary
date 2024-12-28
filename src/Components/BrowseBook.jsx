import Book from "./Book"
import "../index.css"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";
import { searchBook } from "../utils/BooksSlice";

function BrowseBook()
{
    const filteredBooks=useSelector(store=>store.books.filteredData);
    const allBooks=useSelector(store=>store.books.data);
    const [searchedText,setSearchedText]=useState("");
    const [category,setCategory]=useState("");
    var books=allBooks
    if(searchedText==""&&(category==""||category=="All"))
    {
        books=allBooks;
    }
    else{
         books=filteredBooks;
    }
    const dispatch=useDispatch();
    function handleSearch()
    {
        const ct=document.getElementById("category").value;
        setCategory(ct);
    }
    useEffect(()=>{
        dispatch(searchBook({searchedText,category}));
    },[searchedText,category,dispatch])
    function handleForm(e)
    {
        e.preventDefault();
    }
    // function handleCategory()
    // {
    //     dispatch(searchBook(document.getElementById("category").value));
    // }
    if(books.length==0)
    {
        return(<>
        <form onSubmit={(e)=>handleForm(e)} className="form_search">
        <select name="dropDown" id="category" className="Dropdown" onChange={handleSearch}>
            <option className="option" value="All">All</option>
            <option className="option"value="Fiction">Fiction</option>
            <option className="option" value="Philosophical Fiction">Philosophical Fiction</option>
            <option className="option" value="Science Fiction">Science Fiction</option>
            <option className="option" value="Historical Fiction">Historical Fiction</option>
            <option className="option" value="Gothic Fiction">Gothic Fiction</option>
            <option className="option" value="Political Fiction">Political Fiction</option>
            <option className="option" value="Adventure">Adventure</option>
            <option className="option" value="Romance">Romance</option>
            <option className="option" value="Horror">Horror</option>
            <option className="option" value="Classics">Classics</option>
            <option className="option" value="Fantasy">Fantasy</option>
            <option className="option" value="Young Adult">Young Adult</option>
            <option className="option" value="Satire">Satire</option>
        </select> 
        <input type="text" name="text" id="" onChange={(e)=>setSearchedText(e.target.value)} 
        value={searchedText} placeholder="Search..." className="search_input"/>
        <button onClick={handleSearch} className="search_btn">Q</button>
    </form>
    <div><h1 >There is no such Book</h1>
        </div></>)
    }
    return(<>
    <form onSubmit={(e)=>handleForm(e)} className="form_search">
        <select name="dropDown" id="category" className="Dropdown" onChange={handleSearch}>
            <option className="option" value="All">All</option>
            <option className="option"value="Fiction">Fiction</option>
            <option className="option" value="Philosophical Fiction">Philosophical Fiction</option>
            <option className="option" value="Science Fiction">Science Fiction</option>
            <option className="option" value="Historical Fiction">Historical Fiction</option>
            <option className="option" value="Gothic Fiction">Gothic Fiction</option>
            <option className="option" value="Political Fiction">Political Fiction</option>
            <option className="option" value="Adventure">Adventure</option>
            <option className="option" value="Romance">Romance</option>
            <option className="option" value="Horror">Horror</option>
            <option className="option" value="Classics">Classics</option>
            <option className="option" value="Fantasy">Fantasy</option>
            <option className="option" value="Young Adult">Young Adult</option>
            <option className="option" value="Satire">Satire</option>
        </select> 
        <input type="text" name="text" id="" onChange={(e)=>setSearchedText(e.target.value)} 
        value={searchedText} placeholder="Search..." className="search_input"/>
        <button onClick={handleSearch} className="search_btn">Q</button>
    </form>
    <div className="Books">
        {books.map(book=>
            <li key={book.id} style={{listStyle:"none"}}>
                <Book bookData={book}/>
                
            </li>
                
            )
        }
    </div>
    
    </>)
}
export default BrowseBook