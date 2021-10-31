import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './styles.css'; 

const BookLoader = () => (
  <SkeletonTheme color="#e9e9e9" highlightColor="#d8d8d8">
   <div className="book">
      <div className="book__img">
        <Skeleton height='100%'/>
      </div>
      <div className="book__data">
        <div className="book__data__header">
          <h3 className='book__data__title'><Skeleton /></h3>
          <p style={{ fontSize: 12, width: 120 }}> <Skeleton /> </p>
        </div>

        <div className="book__data__body">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>

        <Skeleton style={{ fontSize: 16, lineHeight: 2, width: 120 }} />
      </div>
    </div>
  </SkeletonTheme>
)

const ListOfBooksLoader = ()=> {
  return [...Array(10).keys()].map(idx=> <BookLoader key={idx} />)
}

export {
  BookLoader,
  ListOfBooksLoader
}