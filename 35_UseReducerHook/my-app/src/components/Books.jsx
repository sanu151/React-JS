import { useReducer, useState } from "react";
import PropTypes from "prop-types";

import bookList from "./bookList.json";
import reducer from "./reducer";
import { FaRegTrashCan } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";

const Modal = ({ modalText }) => {
  return <p>{modalText}</p>;
};
Modal.propTypes = {
  modalText: PropTypes.string,
};

const initialState = {
  books: bookList,
  isModalOpen: false,
  modalText: "",
};

const Books = () => {
  const [bookState, dispatch] = useReducer(reducer, initialState);
  const [bookName, setBookName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: uuidv4(), title: bookName };
    dispatch({ type: "ADD", payload: newBook });
    setBookName("");
  };

  const removeBook = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const modalElement = bookState.isModalOpen && (
    <Modal modalText={bookState.modalText} />
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="বইএর নাম - লেখক - সাল"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Add Book</button>
      </form>
      {modalElement}

      {bookState.books.map((book) => {
        const { id, title } = book;
        return (
          <>
            <li key={id}>
              {title}
              <button
                onClick={() => {
                  removeBook(id);
                }}
              >
                <FaRegTrashCan />
              </button>
            </li>
          </>
        );
      })}
    </div>
  );
};

export default Books;
