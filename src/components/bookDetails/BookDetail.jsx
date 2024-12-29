import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {

    const { bookId } = useParams();

    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);


    const { bookId: currentId, image, bookName, author, category, review, tags, publisher, rating, totalPages, yearOfPublishing } = book;

    const handleMarkRead = () => {

    }


    return (
        <div className="grid grid-cols-2 gap-10">
            <div className="w-[500] h-[700] p-3">
                <img className="w-full h-[700px]" src={image} alt="" />
            </div>
            <div className="w-[500] flex flex-col justify-center">
                <h2 className="text-5xl font-bold text-[#131313]">{bookName}</h2>
                <h3 className="text-xl font-medium my-5">By : {author}</h3>
                <div className="divider m-0 p-0"></div>
                <h3>{category}</h3>
                <div className="divider m-0 p-0"></div>
                <p><span className="font-bold uppercase text-[#131313]" >review : </span>{review}</p>

                <div className="grid grid-cols-1 my-8">
                    <div className="grid grid-cols-2 gap-5">
                        <span>Number of Pages:</span>
                        <span>{totalPages}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <span>Publisher::</span>
                        <span>{publisher}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <span>Year of Publishing:</span>
                        <span>{yearOfPublishing}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <span>Rating:</span>
                        <span>{rating}</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button onClick={handleMarkRead} className="btn btn-accent text-white">Read</button>
                    {/* <button onClick={} className="btn btn-primary text-white">Wishlist</button> */}
                </div>
            </div>
        </div>
    );
};

export default BookDetail;