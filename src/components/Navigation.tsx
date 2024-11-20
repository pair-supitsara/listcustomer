import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

const Navigation: React.FC = () => {

    return (
        <ul className={classes.nav}>
            <li className={classes['nav-item']}>
                <NavLink to='/home' className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/list' className={({ isActive }) => isActive ? classes.active : undefined}>List</NavLink>
            </li>
            
        </ul>
    );
}
  
export default Navigation;