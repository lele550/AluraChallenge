import { NavLink } from 'react-router-dom';
import { toggleTheme } from "../../../utils/toggleTheme.js"
import { toggleShowClass } from "../../../utils/headerUtils/toggleShowClass.js"
import { BsFillMoonStarsFill } from "react-icons/bs";
import '../../../styles/header.css';

// eslint-disable-next-line react/prop-types
export default function NavList({loginMenuRef}) {
	return (
		<ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Productos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Contacto
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Sobre nosotros
            </NavLink>
          </li>

          {/* Usar la referencia para mostrar el menú de ingreso */}
          <li className="login-ingresar" onClick={() => toggleShowClass(loginMenuRef)}>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
              Ingresar
            </NavLink>
          </li>

          {/* Ingresar icono para cambiar de tema de claro a oscuro */}
          <li className="theme" onClick={toggleTheme}>
            {/* <img src={moonIcon} alt="Icono" /> */}
            <BsFillMoonStarsFill className="icon-large"/>
          </li>
        </ul>
	)
}