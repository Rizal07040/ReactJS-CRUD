import { Link, Outlet } from "react-router-dom"
export default function About() {
    return (
        <>
        <h1>Halaman About</h1>
        <p>
            Halo ini adalah halaman about , untuk lebih tau tentang kami siahkan klik link dibawah ini :
        </p>
        <ul>
            <li>
                <Link to="/about/team">Team</Link>
            </li>
        </ul>
        <Outlet/>
        </>
    ) 
}