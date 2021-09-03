import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import styles from "../../styles/gallery.module.scss";
import ImageElement from "../../components/ImageElement";
import Pagination from "../../components/Pagination";
import { useSelector } from "react-redux";
import Link from "next/link";

const Gallery = () => {

  const imageOnPage = 9;
  const router = useRouter();
  const { title, description, images } = useSelector(state => state.data)
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPageImageArray, setCurrentPageImageArray] = useState([])

  useEffect(() => {
    setCurrentPageImageArray(images.filter((item, index) => {
      if (index >= pageNumber * imageOnPage && index < (pageNumber + 1) * imageOnPage) {
        return item
      }
    }))
  }, [pageNumber])

  const goToPreviousPage = () => {
    setPageNumber(pageNumber > 0 ? pageNumber - 1 : 0)
  }

  const goToNextPage = () => {
    setPageNumber((Math.abs((images.length - imageOnPage * pageNumber)) > imageOnPage) ? pageNumber + 1 : pageNumber)
  }
  return (
    <div className={styles.container}>
      {
        images.length ?
          <>
            <div className={styles.header}>
              {title}
            </div>
            <div className={styles.label}>
              {description}
            </div>
            <ImageElement imageArray={currentPageImageArray}/>
            <Pagination
              nextPage={goToNextPage}
              previousPage={goToPreviousPage}
            />
          </> :
          <div className={styles.nothing}>
            Nothing found
            <div className={styles.nothing_link}>
              <Link href="/">go to home page</Link>
            </div>
          </div>
      }
    </div>
  )
}

export default Gallery;
