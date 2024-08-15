import axios from "axios"

const homeLoader = async({params, request}) => {
    let {data} = await axios.get('http://localhost:8000/api/v1/feed/home-page')
    return data.data
}

export default homeLoader