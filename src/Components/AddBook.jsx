import { useDispatch } from "react-redux";
import { addBook } from "../utils/BooksSlice";
import { useNavigate } from 'react-router-dom';
function AddBook()
{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    function handleForm(e)
    {
        e.preventDefault();
        const title=document.getElementById("title").value;
        const author=document.getElementById("author").value;
        const description=document.getElementById("description").value;
        const rating= document.getElementById("rating").value;
        const image_URL=document.getElementById("image").value;
        const category=document.getElementById("category").value;
        const data={title,author,description,rating,image_URL,category};
        console.log(data);
        dispatch(addBook(data));
        navigate('/browseBook');
    }
    return(<>
    <div className="Form_Div">
    <form onSubmit={e=>handleForm(e)} className="form">
        <div className="AddBook_Form">
        <label htmlFor="title" className="form_text">Title:</label>
        <input type="text" id="title" placeholder="Enter Title..." required className="form_input"/>
        <br /><label htmlFor="author" className="form_text">Author:</label>
        <input type="text" className="form_input" id="author" placeholder="Enter Author..." required />
        <br /><label htmlFor="description" className="form_text">Description:</label>
        <textarea  className="form_description" id="description" placeholder="Enter Description..." required />
        <br /><label htmlFor="rating" className="form_text">Rating:</label>
        <input type="number" className="form_input" id="rating" placeholder="Enter Rating..." required min="0" max="5" step="0.1"/>
        <br /><label htmlFor="image" className="form_text">Image-URL:</label>
        <input type="url" className="form_input" id="image" placeholder="Enter Image-URL..." required />
        <br /><label htmlFor="category" className="form_text">Category:</label>
        <select name="dropDown" id="category" className="form_input" required placeholder="Enter Category...">
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
        <br />
        </div>
        <div style={{textAlign:"center"}}>
        <button type="submit" className="form_btn">Add New Book</button>
        </div>
    </form>
    </div>
    </>)
}
export default AddBook