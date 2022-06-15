// import { useEffect, useState } from "react"
// import { Table , Container ,Button } from "reactstrap"

// export default function Home(){
//     const [name, setName ] = useState([])
//     const [loading, setLoading ] = useState(true)

//     useEffect(function (){
//         async function getName() {
//             const reques = await fetch(
//                 'https://reqres.in/api/users'
//             )
//             const response = await reques.json()

//             setName(response.data)
//             setLoading(false)
//         }
//         getName()
//     },[])

//     function removeTodoHandler() {
//         // hapus todo
//      console.log()
//       }
    

//     return (
        
//         <section>
            
//             <Container>
//             <h1>Home</h1>
           
//             <Button variant="primary" type="submit">
//                 Tamba Data
//             </Button>
        
// {loading && <i>loading ...</i>}
// {!loading &&(
//     <div>
//          <Table responsive>
//             <thead>
//                 <tr>
//                 <th>ID</th>
//                 <th>Email</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//             {name.map(function (user) {
//                 return (
//                 <tr key={user.id}>
//                 <td >{user.id}</td>
//                 <td >{user.email}  </td>  
//                 <td >{user.first_name}  </td> 
//                 <td >{user.last_name}  </td>
//                 <td ><Button color="primary">Create</Button> </td>
//                 <td ><Button OnClick={removeTodoHandler} color="primary">Update</Button> </td>
//                 <td ><Button color="primary">Delete</Button> </td>
                
//                 </tr>   
//                    )
                   
//                 })}
            
//         </tbody>
//         </Table>
//     </div>
// )}



//             </Container>
            
           

//           </section>
    
//     )
// }

//import hook useState dan useEffect from react
import { useState, useEffect } from 'react';

//import react router dom
import { Link } from "react-router-dom";

//import component Bootstrap React
import { Card, Container, Row, Col, Button, Table } from 'react-bootstrap';

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

    return (
            <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>

                            <Button as={Link} to="/tambah" variant="success" className="mb-3">TAMBAH DATA</Button>
                            
                            <Table striped bordered hover className="mb-1">
                                <thead>
                                    <tr>
                                        <th>NO.</th>
                                        <th>TITLE</th>
                                        <th >DESCRIBTION</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { ambil.map((ambil) => (
                                        <tr key={ ambil.id }>
                                            <td>{ ambil.id }</td>
                                            <td>{ ambil.tittle }</td>
                                            <td>{ ambil.description }</td>
                                            <td ><Button as={Link} to={'/edit'} className='me-4' color="primary">Update</Button> 
                                            <Button color="primary">Delete</Button> </td>
                                            <td className="text-center"></td>
                                        </tr>
                                    )) }
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

