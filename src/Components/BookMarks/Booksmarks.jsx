import Bookmark from "./BookMark/Bookmark";



const Booksmarks = ({ bookMark, readingTime }) => {
    // console.log(bookMark)
    return (
        <div className="w-1/3 border-2 bg-gray-300 ml-4 mt-3 pt-4">
            <div>
                <h2 className="text-2xl text-center mb-4">Reading Time: {readingTime}</h2>
            </div>
            <h1 className="text-3xl text-center">Books Mark: {bookMark.length}</h1>

            <div>
                {
                    bookMark.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
                }

            </div>
        </div>
    );
};

export default Booksmarks;