
const Book = () => {
    return (
        <div id="book">
          <div className="book-description">
            <h4 className="categories">Categories</h4>
            <h1 className="title">Title</h1>
            <h4 className="author"><span>Author</span></h4>
              <div className="action-buttons">
                  <button className="comments">Comments</button>
                  <button className="remove">Remove</button>
                  <button className="edit">Edit</button>
              </div>
          </div>
          <div className="book-progress">
               <h3>64%</h3>
               <h3>Completed</h3>
          </div>
          <div className="current-chapter">
              <h2>Current Chapter</h2>
              <h3>Chapter 17</h3>
              <button>Update Progres</button>
          </div>
        </div>

    )
}

export default Book;