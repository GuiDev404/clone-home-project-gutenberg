import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import Book from "../Book";
import { ListOfBooksLoader } from "../LoaderBook";
import "./styles.css";

function ListOfBooks({ isLoading, data }) {

  return (
    <ScrollContainer className="books">
      {!isLoading
        ? data.results.map((book) => (
            <Book
              key={book.id}
              title={book.title}
              imgSrc={book.formats["image/jpeg"]}
              languages={book.languages}
              readMore={book.formats}
              authors={book.authors}
              downloadCount={book.download_count}
              categories={book.subjects}
            />
          ))
        : <ListOfBooksLoader />
        }
    </ScrollContainer>
  );
}

export default ListOfBooks;
