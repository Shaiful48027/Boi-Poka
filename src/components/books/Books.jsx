import React, { useEffect, useState } from 'react';
import Book from '../book/Book';

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('./public/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    } ,[])





    return (
        <div>
            <h2 className='text-5xl mx-auto text-center m-14'>Books</h2>
            <div className='grid grid-cols-3 gap-5  px-5'>
                {
                    books.map((book, idx) => <Book key={idx} book={book}></Book>)
                },

            </div>
        </div>
    );
};

export default Books;


