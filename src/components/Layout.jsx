
import {Link, Navigate, Outlet} from "react-router-dom"

export default function Layout(){

    return(

        <div className="container">

            {/* NAv of the page */}
            <nav className="nav">
                <ol className="nav__list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/episodios">Episodios</Link>
                    </li>
                    <li>
                        <Link to="/actores">Actor</Link>
                    </li>
                </ol>
            </nav>

            {/* //Where info is going to go */}
            <Outlet>

            </Outlet>
        </div>
    )
}