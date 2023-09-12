
const Bookmark = ({ bookmark }) => {
    const { title } = bookmark
    return (
        <h1 className=" px-2 bg-white text-center mx-5 py-2 my-4 rounded">{title}</h1>
    );
};

export default Bookmark;