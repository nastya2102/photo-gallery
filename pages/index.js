import React, {useEffect, useState} from "react";
import Router from 'next/router';
import {deleteImage, getData} from "../store/data/action";
import styles from "../styles/home.module.scss";
import Input from "../components/Input";
import DragAndDrop from "../components/DragAndDrop";
import Button from "../components/Button";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
  const state = useSelector(state => state.data)
  console.log(state)
  const {title, description, images} = useSelector(state => state.data)
  console.log(title)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: state.title || '',
    description: state.description || '',
    images: [],
  })

  useEffect(() => {
    const curFormData = {}
    console.log("use efect",title)
    if (title) curFormData.title = title;
    if (description) curFormData.description = description;
    if (images) curFormData.images = images;

    if (Object.keys(curFormData).length) setFormData(preVal => ({...preVal, curFormData}))
  }, []);

  useEffect(() => {
    dispatch(getData(formData))
  }, [formData])

  const handleChangeForm = (value, key) => {
    setFormData((preValue) => ({...preValue, [key]: value}))
  };

  const deleteAllImage = () => {
    dispatch(deleteImage(formData))
  };

  return (
    <div className={styles.container}>
      <Input
        value={title}
        handleChangeInput={(e) => handleChangeForm(e, 'title')}
      />
      <Input
        value={description}
        handleChangeInput={(e) => handleChangeForm(e, 'description')}
      />
      <DragAndDrop onLoadImage={(e) => handleChangeForm(e, 'images')}/>
      <Button onClick={() => deleteAllImage()}>Delete All photos</Button>

      <Link href="/gallery">Go to gallery</Link>
    </div>
  )
}

export default MainPage;
