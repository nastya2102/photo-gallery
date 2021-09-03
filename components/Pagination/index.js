import Button from "../Button";
import Link from "next/link";

import styles from "./Pagination.module.scss";

const Pagination = ({nextPage, previousPage}) => {
    return (
        <div className={styles.Pagination}>
          <Button onClick={previousPage}> <i className="ri-arrow-left-line"/></Button>
          <Button onClick={() => {}}><Link href="/"><i className="ri-home-line"/></Link></Button>
          <Button onClick={nextPage} ><i className="ri-arrow-right-line"></i></Button>
        </div>
    )
}

export default Pagination;
