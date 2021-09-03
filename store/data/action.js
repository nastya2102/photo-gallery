import {GET_DATA} from "./constains";
import {DELETE_IMAGE} from "./constains";

export const getData = ({title, description, images}) => ({
    type: GET_DATA,
    payload: {title, description, images}
})
export const deleteImage = () => ({
    type: DELETE_IMAGE,
    payload: {}
})