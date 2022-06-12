import { NavLink } from "react-router-dom";

import styles from './header-menu.module.scss';

import { items } from "./items";

const getActiveLink = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`
}

const HeaderMenu = ({ isLogin }) => {
    
    const menuItems = items.filter(item => item.private === isLogin);

    const elements = menuItems.map(({ id, to, text }) => (
        <li key={id}>
            <NavLink to={to} className={getActiveLink}>{text}</NavLink>
        </li>
    ));

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )
}

export default HeaderMenu;