

const AddBook = () => {
    return (
        <div id="new_book">
          <h2>ADD NEW BOOK</h2>
          <form className="form">
             <input 
                type="text" 
                palceholder="Book title"
                name="title"  
              />
              <select
                name="category"
                palceholder="Category"
              >
                <option>Action</option>
                <option>Drama</option>
              </select>
              <button>Add Book</button>
          </form>
        </div>
    )
}

export default AddBook;