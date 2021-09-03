import {GET_DATA} from "./constains";

export const getData = ({title, description, images}) => ({
    type: GET_DATA,
    payload: {title, description, images}
})