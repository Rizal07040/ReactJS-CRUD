import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";


const Pagenation =({ getPerPage, totalGet ,paginate}) => {
    const items = [];
    
    
    for (let i = 1; i<= Math.ceil(totalGet / getPerPage); i++){
        items.push(i);
        
    }

    return (
        <nav>

            <ul className="pagination">
                {items.map(nomer => (
                    <li key={nomer} >
                       

                        <Pagination.Item onClick={ () => paginate(nomer)} as={Link} to="/" >
                            {nomer}
                        </Pagination.Item>
                        
                    </li>
                ))}
               
            </ul>
                </nav>
               
    )
}

export default Pagenation;