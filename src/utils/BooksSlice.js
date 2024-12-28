import { createSlice } from "@reduxjs/toolkit";
 const BookSlice=createSlice({
    name:"books",
    initialState:{
        data : [
            {
              id: 1,
              title: "To Kill a Mockingbird",
              author: "Harper Lee",
              description: "A novel set in the American South during the 1930s, focusing on themes of racial injustice and moral growth.",
              rating: 4.8,
              category: "Fiction",
              image_url: "https://covers.openlibrary.org/b/id/1234567-L.jpg"
            },
            {
              id: 2,
              title: "1984",
              author: "George Orwell",
              description: "A dystopian novel exploring the dangers of totalitarianism and extreme political ideology.",
              rating: 4.7,
              category: "Science Fiction",
              image_url: "https://covers.openlibrary.org/b/id/2345678-L.jpg"
            },
            {
              id: 3,
              title: "Pride and Prejudice",
              author: "Jane Austen",
              description: "A classic novel that delves into themes of love, reputation, and class in early 19th-century England.",
              rating: 4.6,
              category: "Romance",
              image_url: "https://books.google.co.in/books/content?id=kQ0mAAAAMAAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U37zPGoOr2IU2f0PCVIexnC5nPGag&w=1280"
            },
            {
              id: 4,
              title: "The Great Gatsby",
              author: "F. Scott Fitzgerald",
              description: "A story of the American dream, wealth, and social change in the Roaring Twenties.",
              rating: 4.5,
              category: "Fiction",
              image_url: "https://covers.openlibrary.org/b/id/4567890-L.jpg"
            },
            {
              id: 5,
              title: "Moby-Dick",
              author: "Herman Melville",
              description: "An epic tale of obsession and revenge centered around the hunt for the elusive white whale.",
              rating: 4.4,
              category: "Adventure",
              image_url: "https://covers.openlibrary.org/b/id/5678901-L.jpg"
            },
            {
              id: 6,
              title: "War and Peace",
              author: "Leo Tolstoy",
              description: "A historical novel that intertwines the lives of several families against the backdrop of the Napoleonic Wars.",
              rating: 4.3,
              category: "Historical Fiction",
              image_url: "https://covers.openlibrary.org/b/id/6789012-L.jpg"
            },
            {
              id: 7,
              title: "The Catcher in the Rye",
              author: "J.D. Salinger",
              description: "A narrative exploring teenage angst and alienation through the eyes of Holden Caulfield.",
              rating: 4.2,
              category: "Fiction",
              image_url: "https://covers.openlibrary.org/b/id/7890123-L.jpg"
            },
            {
              id: 8,
              title: "The Odyssey",
              author: "Homer",
              description: "An ancient Greek epic poem detailing Odysseus's adventurous journey home after the Trojan War.",
              rating: 4.1,
              category: "Classics",
              image_url: "https://covers.openlibrary.org/b/id/8901234-L.jpg"
            },
            {
              id: 9,
              title: "Crime and Punishment",
              author: "Fyodor Dostoevsky",
              description: "A psychological drama exploring morality, guilt, and redemption in 19th-century Russia.",
              rating: 4.0,
              category: "Philosophical Fiction",
              image_url: "https://covers.openlibrary.org/b/id/9012345-L.jpg"
            },
            {
              id: 10,
              title: "The Hobbit",
              author: "J.R.R. Tolkien",
              description: "A fantasy novel following the journey of Bilbo Baggins as he embarks on an unexpected adventure.",
              rating: 4.9,
              category: "Fantasy",
              image_url: "https://covers.openlibrary.org/b/id/0123456-L.jpg"
            },
            {
              id: 11,
              title: "Brave New World",
              author: "Aldous Huxley",
              description: "A dystopian novel depicting a technologically advanced society that sacrifices individuality for stability.",
              rating: 4.8,
              category: "Science Fiction",
              image_url: "https://covers.openlibrary.org/b/id/1234568-L.jpg"
            },
            {
              id: 12,
              title: "The Catcher in the Rye",
              author: "J.D. Salinger",
              description: "A narrative exploring teenage angst and alienation through the eyes of Holden Caulfield.",
              rating: 4.7,
              category: "Fiction",
              image_url: "https://covers.openlibrary.org/b/id/2345679-L.jpg"
            },
            {
              id: 13,
              title: "The Lord of the Rings",
              author: "J.R.R. Tolkien",
              description: "An epic fantasy trilogy chronicling the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
              rating: 4.6,
              category: "Fantasy",
              image_url: "https://static.dw.com/image/39075988_902.jpg"
            },
            {
              id: 14,
              title: "The Brothers Karamazov",
              author: "Fyodor Dostoevsky",
              description: "A philosophical novel exploring faith, doubt, and morality through the lives of three brothers.",
              rating: 4.5,
              category: "Philosophical Fiction",
              image_url: "https://covers.openlibrary.org/b/id/4567901-L.jpg"
            },
            {
              id: 15,
              title: "The Divine Comedy",
              author: "Dante Alighieri",
              description: "An epic poem depicting the journey of the soul through Hell, Purgatory, and Paradise.",
              rating: 4.4,
              category: "Classics",
              image_url: "https://covers.openlibrary.org/b/id/5679012-L.jpg"
            },
            {
              id: 16,
              title: "The Iliad",
              author: "Homer",
              description: "An ancient Greek epic poem set during the Trojan War, focusing on the hero Achilles.",
              rating: 4.3,
              category: "Classics",
              image_url: "https://covers.openlibrary.org/b/id/6789123-L.jpg"
            },
            {
              id: 17,
              title: "Jane Eyre",
              author: "Charlotte Brontë",
              description: "A Gothic novel focusing on the emotional and moral development of the orphaned protagonist, Jane Eyre.",
              rating: 4.2,
              category: "Romance",
              image_url: "https://covers.openlibrary.org/b/id/7891234-L.jpg"
            },
            {
              id: 18,
              title: "Wuthering Heights",
              author: "Emily Brontë",
              description: "A passionate tale of love and revenge on the Yorkshire moors.",
              rating: 4.1,
              category: "Gothic Fiction",
              image_url: "https://covers.openlibrary.org/b/id/8902345-L.jpg"
            },
            {
              id: 19,
              title: "The Picture of Dorian Gray",
              author: "Oscar Wilde",
              description: "A philosophical novel exploring aestheticism, corruption, and the nature of beauty.",
              rating: 4.0,
              category: "Philosophical Fiction",
              image_url: "https://covers.openlibrary.org/b/id/9013456-L.jpg"
            },
            {
              id: 20,
              title: "The Outsiders",
              author: "S.E. Hinton",
              description: "A coming-of-age novel set in the 1960s, detailing the struggles of two rival gangs, the Greasers and Socs.",
              rating: 4.9,
              category: "Young Adult",
              image_url: "https://covers.openlibrary.org/b/id/0124567-L.jpg"
            },
            {
              id: 21,
              title: "Animal Farm",
              author: "George Orwell",
              description: "A political allegory about a group of farm animals who rebel against their human farmer, only to be exploited by the pigs.",
              rating: 4.8,
              category: "Political Fiction",
              image_url: "https://covers.openlibrary.org/b/id/1234678-L.jpg"
            },
            {
              id: 22,
              title: "The Sun Also Rises",
              author: "Ernest Hemingway",
              description: "A story of a group of expatriates in the post-World War I era, dealing with love, loss, and disillusionment.",
              rating: 4.7,
              category: "Fiction",
              image_url: "https://covers.openlibrary.org/b/id/2345789-L.jpg"
            },
            {
              id: 23,
              title: "Les Misérables",
              author: "Victor Hugo",
              description: "A tale of redemption, revolution, and sacrifice set against the backdrop of post-revolutionary France.",
              rating: 4.6,
              category: "Historical Fiction",
              image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4Flm6TDLC3wzKIV1dSZUC24jXEqdQDc2EQ&s"
            },
            {
              id: 24,
              title: "Catch-22",
              author: "Joseph Heller",
              description: "A satirical novel focusing on the absurdity of war, particularly World War II.",
              rating: 4.5,
              category: "Satire",
              image_url: "https://covers.openlibrary.org/b/id/4567902-L.jpg"
            },
            {
              id: 25,
              title: "Slaughterhouse-Five",
              author: "Kurt Vonnegut",
              description: "A science fiction novel about a soldier who becomes 'unstuck in time' and witnesses moments from his life, including the bombing of Dresden.",
              rating: 4.4,
              category: "Science Fiction",
              image_url: "https://covers.openlibrary.org/b/id/5679013-L.jpg"
            },
            {
              id: 26,
              title: "Frankenstein",
              author: "Mary Shelley",
              description: "A gothic novel that deals with the dangers of scientific knowledge and the pursuit of immortality through the character of Victor Frankenstein and his monstrous creation.",
              rating: 4.3,
              category: "Gothic Fiction",
              image_url: "https://covers.openlibrary.org/b/id/6789124-L.jpg"
            },
            {
              id: 27,
              title: "Dracula",
              author: "Bram Stoker",
              description: "A gothic horror novel about the mysterious and sinister Count Dracula.",
              rating: 4.2,
              category: "Horror",
              image_url: "https://covers.openlibrary.org/b/id/7891235-L.jpg"
            },
            {
              id: 28,
              title: "The Shining",
              author: "Stephen King",
              description: "A psychological horror novel about a family’s stay at a haunted hotel, unraveling terror and insanity.",
              rating: 4.1,
              category: "Horror",
              image_url: "https://covers.openlibrary.org/b/id/8902346-L.jpg"
            },
            {
              id: 29,
              title: "Beloved",
              author: "Toni Morrison",
              description: "A haunting novel exploring themes of memory, trauma, and the haunting legacy of slavery.",
              rating: 4.0,
              category: "Historical Fiction",
              image_url: "https://covers.openlibrary.org/b/id/9013457-L.jpg"
            },
            {
              id: 30,
              title: "The Road",
              author: "Cormac McCarthy",
              description: "A post-apocalyptic novel about a father and son struggling to survive in a barren and dangerous world.",
              rating: 4.9,
              category: "Post-Apocalyptic Fiction",
              image_url: "https://covers.openlibrary.org/b/id/0124568-L.jpg"
            }
        ],
        selectedBooks:[
            {
                id: 5,
                title: "Moby-Dick",
                author: "Herman Melville",
                description: "An epic tale of obsession and revenge centered around the hunt for the elusive white whale.",
                rating: 4.4,
                category: "Adventure",
                image_url: "https://covers.openlibrary.org/b/id/5678901-L.jpg"
            },
            {
                id: 24,
                title: "Catch-22",
                author: "Joseph Heller",
                description: "A satirical novel focusing on the absurdity of war, particularly World War II.",
                rating: 4.5,
                category: "Satire",
                image_url: "https://covers.openlibrary.org/b/id/4567902-L.jpg"
            },
            {
                id: 20,
                title: "The Outsiders",
                author: "S.E. Hinton",
                description: "A coming-of-age novel set in the 1960s, detailing the struggles of two rival gangs, the Greasers and Socs.",
                rating: 4.9,
                category: "Young Adult",
                image_url: "https://covers.openlibrary.org/b/id/0124567-L.jpg"
            },
            {
                id: 1,
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                description: "A novel set in the American South during the 1930s, focusing on themes of racial injustice and moral growth.",
                rating: 4.8,
                category: "Fiction",
                image_url: "https://covers.openlibrary.org/b/id/1234567-L.jpg"
            },
            {
              id: 6,
              title: "War and Peace",
              author: "Leo Tolstoy",
              description: "A historical novel that intertwines the lives of several families against the backdrop of the Napoleonic Wars.",
              rating: 4.3,
              category: "Historical Fiction",
              image_url: "https://covers.openlibrary.org/b/id/6789012-L.jpg"
            },
            {
              id: 13,
              title: "The Lord of the Rings",
              author: "J.R.R. Tolkien",
              description: "An epic fantasy trilogy chronicling the quest to destroy the One Ring and defeat the Dark Lord Sauron.",
              rating: 4.6,
              category: "Fantasy",
              image_url: "https://static.dw.com/image/39075988_902.jpg"
            },
            {
              id: 16,
              title: "The Iliad",
              author: "Homer",
              description: "An ancient Greek epic poem set during the Trojan War, focusing on the hero Achilles.",
              rating: 4.3,
              category: "Classics",
              image_url: "https://covers.openlibrary.org/b/id/6789123-L.jpg"
            },
            {
              id: 17,
              title: "Jane Eyre",
              author: "Charlotte Brontë",
              description: "A Gothic novel focusing on the emotional and moral development of the orphaned protagonist, Jane Eyre.",
              rating: 4.2,
              category: "Romance",
              image_url: "https://covers.openlibrary.org/b/id/7891234-L.jpg"
            },
            {
                id: 3,
                title: "Pride and Prejudice",
                author: "Jane Austen",
                description: "A classic novel that delves into themes of love, reputation, and class in early 19th-century England.",
                rating: 4.6,
                category: "Romance",
                image_url: "https://books.google.co.in/books/content?id=kQ0mAAAAMAAJ&pg=PP1&img=1&zoom=3&hl=en&sig=ACfU3U37zPGoOr2IU2f0PCVIexnC5nPGag&w=1280"
            },
            {
              id: 19,
              title: "The Picture of Dorian Gray",
              author: "Oscar Wilde",
              description: "A philosophical novel exploring aestheticism, corruption, and the nature of beauty.",
              rating: 4.0,
              category: "Philosophical Fiction",
              image_url: "https://covers.openlibrary.org/b/id/9013456-L.jpg"
            },
            
            {
              id: 21,
              title: "Animal Farm",
              author: "George Orwell",
              description: "A political allegory about a group of farm animals who rebel against their human farmer, only to be exploited by the pigs.",
              rating: 4.8,
              category: "Political Fiction",
              image_url: "https://covers.openlibrary.org/b/id/1234678-L.jpg"
            },
            {
              id: 22,
              title: "The Sun Also Rises",
              author: "Ernest Hemingway",
              description: "A story of a group of expatriates in the post-World War I era, dealing with love, loss, and disillusionment.",
              rating: 4.7,
              category: "Fiction",
              image_url: "https://covers.openlibrary.org/b/id/2345789-L.jpg"
            },
            {
                id: 2,
                title: "1984",
                author: "George Orwell",
                description: "A dystopian novel exploring the dangers of totalitarianism and extreme political ideology.",
                rating: 4.7,
                category: "Science Fiction",
                image_url: "https://covers.openlibrary.org/b/id/2345678-L.jpg"
              },
            {
              id: 23,
              title: "Les Misérables",
              author: "Victor Hugo",
              description: "A tale of redemption, revolution, and sacrifice set against the backdrop of post-revolutionary France.",
              rating: 4.6,
              category: "Historical Fiction",
              image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4Flm6TDLC3wzKIV1dSZUC24jXEqdQDc2EQ&s"
            },
            
            {
              id: 25,
              title: "Slaughterhouse-Five",
              author: "Kurt Vonnegut",
              description: "A science fiction novel about a soldier who becomes 'unstuck in time' and witnesses moments from his life, including the bombing of Dresden.",
              rating: 4.4,
              category: "Science Fiction",
              image_url: "https://covers.openlibrary.org/b/id/5679013-L.jpg"
            },
            {
              id: 26,
              title: "Frankenstein",
              author: "Mary Shelley",
              description: "A gothic novel that deals with the dangers of scientific knowledge and the pursuit of immortality through the character of Victor Frankenstein and his monstrous creation.",
              rating: 4.3,
              category: "Gothic Fiction",
              image_url: "https://covers.openlibrary.org/b/id/6789124-L.jpg"
            },
            {
              id: 28,
              title: "The Shining",
              author: "Stephen King",
              description: "A psychological horror novel about a family’s stay at a haunted hotel, unraveling terror and insanity.",
              rating: 4.1,
              category: "Horror",
              image_url: "https://covers.openlibrary.org/b/id/8902346-L.jpg"
            },
            {
              id: 30,
              title: "The Road",
              author: "Cormac McCarthy",
              description: "A post-apocalyptic novel about a father and son struggling to survive in a barren and dangerous world.",
              rating: 4.9,
              category: "Post-Apocalyptic Fiction",
              image_url: "https://covers.openlibrary.org/b/id/0124568-L.jpg"
            }
        ],
        searchedData:[],
        filteredData:[],
        categoryData:[],
    },
    reducers:{
        addBook:(state,action)=>{
            console.log(action.payload)
            var flag=true;
            state.data.map((book)=>{if((book.title.toLowerCase()==action.payload.title.toLowerCase())&&(book.author.toLowerCase()==action.payload.author.toLowerCase()))
            {
                alert("Can't add the Book. Book is already there");
                flag=false;
            }
            })
            if(flag)
            {
                state.data.push({...action.payload,id:state.data.length+1});
            }
        },
        searchBook:(state,action)=>{
            if(action.payload.searchedText!="")
            {
                state.searchedData=state.data.filter((book)=>((book.title.toLowerCase().includes(action.payload.searchedText.toLowerCase()))||(book.author.toLowerCase().includes(action.payload.searchedText.toLowerCase()))));
            }
            else{
                state.searchedData=[];
            }
            if(action.payload.category!="")
            {  
                state.categoryData=state.data.filter((book)=>(book.category.toLowerCase().includes(action.payload.category.toLowerCase())));
            }
            else
            {
                state.categoryData=[];
            }
            if(action.payload.searchedText==""&&state.categoryData.length!=0)
            {
                state.filteredData=state.categoryData;
            }
            else if((action.payload.category==""||action.payload.category=="All")&&state.searchedData.length!=0)
            {
                state.filteredData=state.searchedData;
            }
            else
            {
                state.filteredData=state.searchedData.filter((book)=>(book.category.toLowerCase()==action.payload.category.toLowerCase()));
            }
        }
    }
 });
 export const {addBook,searchBook}=BookSlice.actions;
 export default BookSlice.reducer;