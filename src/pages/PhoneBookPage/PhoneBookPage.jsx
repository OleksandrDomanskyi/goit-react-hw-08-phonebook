import PhoneBook from 'components/PhoneBook';

import styles from './phone-book-page.module.scss';

const PhoneBookPage = () => {

    return (
        <div className={styles.container}>
            <h2>Phonebook</h2>
            <PhoneBook />
        </div>
    );
};

export default PhoneBookPage;