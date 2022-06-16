
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Row, Col, Button, Table } from 'react-bootstrap';

//import axios
import axios from 'axios';

export default function Home() {

    //define state
    const [ambil, setAmbil] = useState([]);

    //useEffect hook
    useEffect(() => {

        //panggil method "fetchData"
        getData();

    }, []);

    //function "fetchData"
    const getData = async () => {
        //fetching
        const response = await axios.get('https://dhiyo-api-article.herokuapp.com/articles');
        //get response data
        const data = await response.data.data;

         //assign response data to state "posts"
        setAmbil(data);
    }

    const deletePost = async (id) => {

        //sending
        await axios.delete(`https://dhiyo-api-article.herokuapp.com/articles/${id}`);
    
        //panggil function "fetchData"
        getData();
    }

    return (
        <div className='p-5'>

                
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>

                            <Button as={Link} to="/tambah" variant="secondary" className="mb-3">TAMBAH DATA</Button>
                            
                            <Table striped className="mb-1">
                                <thead>
                                    <tr>
                                        <th scope='col' className='text-center'>NO.</th>
                                        <th scope='col'>TITLE</th>
                                        <th width='60%'>DESCRIBTION</th>
                                        <th width='20%' className='text-center'>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { ambil.map((ambil) => (
                                        <tr key={ ambil.id }>
                                            <td>{ ambil.id }</td>
                                            <td>{ ambil.tittle }</td>
                                            <td width={'60%'}>{ ambil.description }</td>
                                            <td align='center'><Button as={Link} to={`/edit/${ambil.id}`} className='me-4' size='sm' variant="primary">Update</Button> 
                                            <Button onClick={() => deletePost(ambil.id)} variant="danger" size="sm">Delete</Button></td>
                                            
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        
                                    </div>
    );
}

