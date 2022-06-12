import { useSelector, shallowEqual } from 'react-redux';
import { useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

// import styles from './user-menu.module.scss';

const UserMenu = () => {

    const {email} = useSelector(getUser, shallowEqual);
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(logout());
    };
    
    return (
        <div>
            {email} | <button onClick={logoutUser}>Logout</button>
        </div>
    )
};

export default UserMenu;