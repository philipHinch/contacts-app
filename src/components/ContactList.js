import { Icon } from "@iconify/react";
import ListItem from "./ListItem";

const ContactList = ({ contacts, setContacts }) => {

    return (
        <>
            <p className="total-contacts">Total Contacts: <span className="total-contacts-amount">{contacts.length}</span></p>
            <ul className="contact-list responsive-table">
                <li className="info-li table-header">
                    <div className="col col-1" ></div>
                    <div className="col col-2"><Icon icon="mdi:menu-up" style={{ fontSize: '1.6rem', color: '#666' }} />
                        First Name</div>
                    <div className="col col-3"><Icon icon="mdi:menu-up" style={{ fontSize: '1.6rem', color: '#666' }} />Last Name</div>
                    <div className="col col-4">Email</div>
                    <div className="col col-5">Phone</div>
                    <div className="col col-6">Sex</div>
                    <div className="col col-7" ></div>
                </li>
                {contacts.length === 0 && <div className="no-contacts-div">NO CONTACTS</div>}
                {contacts && contacts.map(contact => (
                    <ListItem key={Math.random()} id={contact.id} avatarColor={contact.avatarColor} contactType={contact.contactType} firstName={contact.firstName} lastName={contact.lastName} email={contact.email} sex={contact.sex} phoneNumber={contact.phoneNumber} contacts={contacts} setContacts={setContacts} />
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