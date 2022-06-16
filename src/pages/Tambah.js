import axios from "axios"
import { useState } from "react"
import { Container } from "react-bootstrap"
import {  useNavigate } from "react-router-dom"
import { Row , Alert , Col ,Button , Form ,Card } from "react-bootstrap"

export default function Tambah(){

    const [tittle, setTittle] = useState('')
    const [description, setDescription] = useState('')
    //const [data, setData] = useState('')

    const [validation, setValidation] = useState({})

    const navigate = useNavigate()


    const createData = async (e) => {
        e.preventDefault()

        await axios.post('https://dhiyo-api-article.herokuapp.com/articles', {
            
            tittle: tittle,
            description: description
        }).then(() =>{
            navigate('/')
        })
        .catch((error) => {
            setValidation(error.response.data)
        })
    }
    
    return(
       

        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                <h1>Tambah Data</h1>
                <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                        
                            {
                                validation.errors &&
                                    <Alert variant="danger">
                                        <ul class="mt-0 mb-0">
                                            { validation.errors.map((error, index) => (
                                                <li key={index}>{ `${error.param} : ${error.msg}` }</li>
                                                )) }
                                        </ul>
                                    </Alert>
                            }
                            
                            <Form onSubmit={createData}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={tittle} onChange={(e) => setTittle(e.target.value)} placeholder="Masukkan Title..." />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>DESCRIBTION</Form.Label>
                                    <Form.Control type="text-area" as='textarea' value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Masukkan Description..." />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    SIMPAN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                                                
                
                </Col>
            </Row>
        </Container>


    ) 
}