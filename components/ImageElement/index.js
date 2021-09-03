import Eye from "../../svg/eye";
import styles from "./ImageElement.module.scss"


const ImageElement = ({imageArray}) => {

    return (
        <div className={styles.images}>

            {imageArray.map((item) => {
                return(
                    <div className={styles.eyesContainer}>
                        <img src={`data:image/gif;base64,${item}`} className={styles.image}>
                        </img>
                        <div className={styles.eyes}>
                            <Eye/>
                        </div>
                    </div>

                )
            })}

        </div>
    )
}

export default ImageElement;
