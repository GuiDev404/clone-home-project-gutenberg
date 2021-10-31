import React from "react";
import "./styles.css";
import { Downloads, Tag, Lang } from "../Icons";

const Book = ({ imgSrc, title, authors, languages, categories, downloadCount , readMore }) => {
  const authorsList = authors.map(author=> author.name).join(' - ');

  const someCategories = [
    ...new Set(
      categories.map(
        (category) => category.split("--")[1] || category.split("--")[0]
      )
    ),
  ];

  // const alLCategories = categories
  //   .map((category) => category.split("--").map((a) => a.trim()))
  //   .reduce((acc, arr) => {
  //     return acc.concat(arr);
  //   }, []);
  // const withouCategoriesRepeat = [...new Set(test)];

  const img = imgSrc.replaceAll("small", "medium");

  const formatoLectura =  readMore["text/html; charset=utf-8"] && readMore["text/html; charset=utf-8"].endsWith('.htm')
    ? readMore["text/html; charset=utf-8"] 
    : readMore["text/plain; charset=utf-8"]

  return (
    <div className="book">
      <div className="book__img">
        <img
          className="book__img__cover"
          src={img}
          alt={`${title} by ${authorsList}`}
          title={title}
        />
      </div>
      <div className="book__data">
        <div className="book__data__header">
          <h3 className='book__data__title' title={title}>{title}</h3>
          <p className='book__data__author'> {authorsList} </p>
        </div>

        <div className="book__data__body">
          <p> {Lang} {languages.map(lang=> <span key={lang}>{lang}</span> )} </p>
          <p className='tags' title={someCategories.join(', ')} > {Tag}  {someCategories.join(', ')} </p>
          <p> {Downloads} <span> {downloadCount} downloads </span> </p>
        </div>

        <a href={formatoLectura} target='_blank' className='btn__see-more'> <span>Read book</span> </a>
      </div>
    </div>
  );
};

export default Book;
