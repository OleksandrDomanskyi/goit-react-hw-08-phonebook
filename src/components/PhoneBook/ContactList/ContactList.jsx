import PropTypes from 'prop-types';

import styles from './contact-list.module.scss'

const ContactList = ({contacts, deleteContact}) => {

    const elements = contacts.map(item => (
            <li key={item._id}>{item.name}: {item.number}
                <button className={styles.btn} onClick={() => deleteContact(item.id)}>Delete</button>
            </li>
        ));
    return (
        <ul className={styles.list}>
            {elements}
        </ul>
    )
};

ContactList.defaultProps = {
    contacts: [],
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    deleteContact: PropTypes.func.isRequired,
};

export default ContactList;