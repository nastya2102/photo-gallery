import styles from './DragAndDrop.module.scss'
import {useDropzone} from "react-dropzone";
import {useCallback} from "react";


const DragAndDrop = ({onLoadImage}) => {

    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onload = () => {
                const binaryStr = reader.result
                let binary = '';
                let bytes = new Uint8Array(binaryStr);
                let len = bytes.byteLength;
                for (let i = 0; i < len; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                onLoadImage([window.btoa(binary)]);
            }
            reader.readAsArrayBuffer(file)
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop});

    return(
        <div {...getRootProps()} className={styles.drag}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag photos here</p>
            }
        </div>
    )
}

export default DragAndDrop;