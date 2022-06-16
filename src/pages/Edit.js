import axios from "axios"
import { Alert } from "bootstrap"
import { useEffect, useState } from "react"
import { Card , Container ,Row ,Col ,Form, Button } from "react-bootstrap"
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
       
        const response = await axios.get(`https://dhiyo-api-article.herokuapp.com/articles/${id}`)
        const data = await response.data.data
        
        console.log(data)
        setTittle(data.tittle)
        setDescription(data.description)
    }
    
    const EditData = async (e) => {
        e.preventDefault()
        
        await axios.put(`https://dhiyo-api-article.herokuapp.com/articles/${id}`,{
            tittle: tittle,
            description: description
        }).then(() => {
            navigate('/')
        }).catch((error) => {
            setValidation(error.response.data)
        })
        
    }


    return (
        <Container className="mt-3">
                <Row>
                    
                    <Col md="12">
                        <Card className="border-0 rounded shadow-sm">
                            <Card.Body>
                                {
                                    validation.error && 
                                    <Alert variant="danger">
                                        <ul className="mt-0 mb-0">
                                            {validation.error.map((error,index) => (
                                            <li key={index}>{`${error.param} : ${error.msg}`}

                                            </li>

                                            ))}
                                        </ul>
                                    </Alert>
                                }
                                <Form onSubmit={ EditData }>
                                <Form.Group className="mb-3">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={tittle} onChange={(e) => setTittle(e.target.value)} placeholder="Masukkan Title" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>DESCRIBTION</Form.Label>
                                    <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Masukkan description" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    UPDATE
                                </Button>
                            </Form>

                            </Card.Body>
                        </Card>
                    
                    </Col>
                </Row>
        </Container>
    )
}