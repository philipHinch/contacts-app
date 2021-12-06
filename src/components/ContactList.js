import { Icon } from "@iconify/react";
import ListItem from "./ListItem";





const ContactList = ({ contacts, setContacts }) => {

    return (
        <>
            <p className="total-contacts">Total Contacts: <span className="total-contacts-amount">3</span></p>
            <ul className="contact-list">
                <li className="info-li">
                    <div className="info" style={{ minWidth: '70px', color: 'transparent' }}>*</div>
                    <span className="info"><Icon icon="mdi:menu-up" style={{ fontSize: '1.6rem', color: '#666' }} />
                        First Name</span>
                    <span className="info"><Icon icon="mdi:menu-up" style={{ fontSize: '1.6rem', color: '#666' }} />Last Name</span>
                    <span className="info">Email</span>
                    <span className="info">Phone</span>
                    <span className="info">Sex</span>
                    <span className="info" style={{ color: 'transparent' }}>*</span>
                </li>
                {contacts.map(contact => (
                    <ListItem key={Math.random()} id={contact.id} userAvatar={contact.avatarColor} contactType={contact.contactType} firstName={contact.firstName} lastName={contact.lastName} email={contact.email} sex={contact.sex} phoneNumber={contact.phoneNumber} contacts={contacts} setContacts={setContacts} />
                ))}
                {/* <li><Icon icon="mdi:account-circle" className="user-avatar" />
                    <span>contact 1</span><Icon icon="mdi:close-thick" className="close-icon" /></li>
                <li><Icon icon="mdi:account-circle" className="user-avatar" /><span>contact 2</span><Icon icon="mdi:close-thick" className="close-icon" /></li>
                <li><Icon icon="mdi:account-circle" className="user-avatar" /><span>contact 3</span><Icon icon="mdi:close-thick" className="close-icon" /></li> */}
            </ul>
        </>

    );
}

export default ContactList;