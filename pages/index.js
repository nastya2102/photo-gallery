import React, {useEffect, useState} from "react";
import Router from 'next/router';
import {getData} from "../store/data/action";
import styles from "../styles/home.module.scss";
import Input from "../components/Input";
import DragAndDrop from "../components/DragAndDrop";
import Button from "../components/Button";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
  const state = useSelector(state => state)
  const {title, description, images} = useSelector(state => state.data)
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    images: [],
  })

  useEffect(() => {
    const curFormData = {}
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
    // setFormData((images) => ({...preValue, images: []}));
  };

  return (
    <div className={styles.container}>
      <Input
        value={formData.title}
        handleChangeInput={(e) => handleChangeForm(e, 'title')}
      />
      <Input
        value={formData.description}
        handleChangeInput={(e) => handleChangeForm(e, 'description')}
      />
      <DragAndDrop onLoadImage={(e) => handleChangeForm(e, 'images')}/>
      <Button onClick={() => deleteAllImage()}>Delete All photos</Button>

      <Link href="/gallery">Go to gallery</Link>
    </div>
  )
}

export default MainPage;
