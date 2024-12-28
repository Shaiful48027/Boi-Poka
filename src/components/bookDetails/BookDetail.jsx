import { useParams } from "react-router-dom";


const BookDetail = () => {
    const {bookId} = useParams();


    return (
        <div>
            <h2>Book Details</h2>
        </div>
    );
};

export default BookDetail;