
//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Row, Col, Button, Table, Form } from 'react-bootstrap';

//import axios
import axios from 'axios';
import Pagenation from '../components/Pagenation';


export default function Home() {

    //define state
    const [ambil, setAmbil] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [getPerPage] = useState(5)
    const [searchTabel,setSearchTabel] = useState("")
    const [order, setOrder] = useState("ASC")
    
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

    const indexTerakhir = currentPage * getPerPage;
    const indexPertama = indexTerakhir - getPerPage;
    const currentGet = ambil.slice(indexPertama, indexTerakhir);

    // Merubah Halaman
    const paginate = noHalaman => setCurrentPage(noHalaman);

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...ambil].sort((a, b) => 
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setAmbil(sorted)
            setOrder("DSC")
        }if(order === "DSC"){
            const sorted = [...ambil].sort((a, b) => 
            a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
        )
        setAmbil(sorted)
        setOrder("ASC")
        }
    }
    return (
        <div className='p-5'>

                
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm ">
                        <Card.Body>
                            <Button as={Link} to="/tambah" variant="secondary" className="mb-3">TAMBAH DATA</Button>
                            <Row>
                                <Col xs={3}>
                            <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control  type="text" onChange={(e) => setSearchTabel(e.target.value)} placeholder="Search..." />
                            </Form.Group>
                            </Form>
                                </Col>
                            </Row>

                            
                            
                            <Table className="mb-1">
                                <thead>
                                    <tr>
                                        <th onClick={() => sorting("id")} scope='col' className='text-center'>NO.</th>
                                        <th onClick={() => sorting("tittle")} scope='col'>TITLE </th>
                                        <th onClick={() => sorting("description")} width='60%'>DESCRIBTION</th>
                                        <th width='20%' className='text-center'>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { currentGet.filter((val )=> {
                                        if(searchTabel === ""){
                                            return val;
                                        }else if(
                                            val.tittle.toLowerCase().includes(searchTabel.toLowerCase()) || 
                                            val.description.toLowerCase().includes(searchTabel.toLowerCase()) 
                                        ){
                                          return val;  
                                        }
                                    }).map((ambil) => (
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
                            <Pagenation getPerPage={getPerPage} totalGet={ambil.length} paginate={paginate}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        
          
</div>
    );
}

