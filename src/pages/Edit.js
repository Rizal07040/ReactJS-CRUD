import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Edit () {
    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')
    const [validation, setValidation] = useState({})

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        getDataById()
    },[])

    const getDataById = async () => {
        const response = await axios.get(`https://dhiyo-api-article.herokuapp.com/articles/ ${id}`)
        const data = await response.data.data

        setTittle(data.tittle)
        setTittle(data.description)
    }

    const EditData = async (e) => {
        e.preventDefault()
        
    }


    return <h1>sfglsdsgfgsegrfefegsfug</h1>
}