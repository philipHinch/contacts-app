import { Icon } from "@iconify/react";




const ContactList = () => {

    return (
        <>
            <p className="total-contacts">Total Contacts: <span className="total-contacts-amount">3</span></p>
            <ul className="contact-list">
                <li><Icon icon="mdi:account-circle" className="user-avatar" />
                    <span>contact 1</span><Icon icon="mdi:close-thick" className="close-icon" /></li>
                <li><Icon icon="mdi:account-circle" className="user-avatar" /><span>contact 2</span><Icon icon="mdi:close-thick" className="close-icon" /></li>
                <li><Icon icon="mdi:account-circle" className="user-avatar" /><span>contact 3</span><Icon icon="mdi:close-thick" className="close-icon" /></li>
            </ul>
        </>

    );
}

export default ContactList;