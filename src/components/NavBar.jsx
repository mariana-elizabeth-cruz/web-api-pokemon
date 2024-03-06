import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}> Home </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/lista"}> Lista </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/ordenar"}> Ordenar </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default NavBar;
