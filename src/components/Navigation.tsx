import { NavLink } from "react-router-dom";
import classes from './Navigation.module.css'

const Navigation: React.FC = () => {
    console.log('Navigation.tsx')
    return (
        <ul className={classes.nav}>
            <li className={classes['nav-item']}>
                <NavLink to='/home' className={({ isActive }) => isActive ? classes.active : undefined}>Home</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/list' className={({ isActive }) => isActive ? classes.active : undefined}>List(components)</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/listfetch' className={({ isActive }) => isActive ? classes.active : undefined}>List(fetch)</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/listcustomhook' className={({ isActive }) => isActive ? classes.active : undefined}>List(customhook)</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/listthunkredux' className={({ isActive }) => isActive ? classes.active : undefined} style={{color:'rgb(149, 158, 193)'}}>List(thunk)</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/listfetchproxy' className={({ isActive }) => isActive ? classes.active : undefined} style={{color:'rgb(149, 158, 193)'}}>List(fetchproxy)</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/pagination' className={({ isActive }) => isActive ? classes.active : undefined} style={{color:'rgb(149, 158, 193)'}}>List(pagination)</NavLink>
            </li>
            <li className={classes['nav-item']}>
                <NavLink to='/tanStack' className={({ isActive }) => isActive ? classes.active : undefined} style={{color:'rgb(149, 158, 193)'}}>tanStack(Query)</NavLink>
            </li>
        </ul>
    );
}
  
export default Navigation;