import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image, bookId, bookName, author, category, tags} = book;
    
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-slate-200 w-auto shadow-xl text-black">
                <figure className='w-full h-[300px]'>
                    <img
                    src={image} alt="Shoes" />
                </figure>
                
                <div className="card-body">
                    <div className='flex gap-2 justify-start mb-4'>
                        {
                            tags.map((tag, index) => <button key={index} className="bg-green-300 text-green-700 badge border-none p-3 w-[110px]">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <div className='divider  m-0 p-0'></div>
                    <div className='flex justify-between'>
                        <div className=" text-black font-bold">{category}</div>
                        <div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-1" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-0" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;