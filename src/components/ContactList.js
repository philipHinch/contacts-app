import { Icon } from "@iconify/react";
import { useState } from "react";
import ListItem from "./ListItem";

const ContactList = ({ contacts, setContacts }) => {

    const [AZ, setAZ] = useState(false)
    const [firstNameClicked, setFirstNameClicked] = useState(false)
    const [lastNameClicked, setLastNameClicked] = useState(false)

    const sortByFirstName = (arr) => {
        let newArr
        newArr = arr.sort(function (a, b) {
            var nameA = a.firstName.toUpperCase();
            var nameB = b.firstName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });
        if (AZ) {
            newArr = arr.sort(function (a, b) {
                var nameA = a.firstName.toUpperCase();
                var nameB = b.firstName.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
            });
        }
        setContacts(newArr)
    }

    const sortByLastName = (arr) => {
        let newArr
        newArr = arr.sort(function (a, b) {
            var nameA = a.lastName.toUpperCase();
            var nameB = b.lastName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
        });
        if (AZ) {
            newArr = arr.sort(function (a, b) {
                var nameA = a.lastName.toUpperCase();
                var nameB = b.lastName.toUpperCase();
                if (nameA < nameB) {
                    return 1;
                }
                if (nameA > nameB) {
                    return -1;
                }
            });
        }
        setContacts(newArr)
    }

    const handleSortClick = (e) => {
        if (e.target.classList.contains('col-2')) {
            sortByFirstName(contacts)
            if (AZ) {
                setAZ(false)
            } else {
                setAZ(true)
            }
        } else if (e.target.classList.contains('col-3')) {
            sortByLastName(contacts)
            if (AZ) {
                setAZ(false)
            } else {
                setAZ(true)
            }
        }
    }

    return (
        <>
            <p className="total-contacts">Total Contacts: <span className="total-contacts-amount">{contacts.length}</span></p>
            <ul className="contact-list responsive-table">
                <li className="info-li table-header">
                    <div className="col col-1" ></div>
                    <div onClick={(e) => handleSortClick(e)} className="col col-2">
                        {AZ ? <Icon icon="mdi:menu-down" style={{ fontSize: '1.6rem', color: '#666' }} /> : <Icon icon="mdi:menu-up" style={{ fontSize: '1.6rem', color: '#666' }} />}
                        First Name</div>
                    <div onClick={(e) => handleSortClick(e)} className="col col-3">
                        {AZ ? <Icon icon="mdi:menu-down" style={{ fontSize: '1.6rem', color: '#666' }} /> : <Icon icon="mdi:menu-up" style={{ fontSize: '1.6rem', color: '#666' }} />}
                        Last Name</div>
                    <div className="col col-4">Email</div>
                    <div className="col col-5">Phone</div>
                    <div className="col col-6">Sex</div>
                    <div className="col col-7" ></div>
                </li>
                {contacts.length === 0 && <div className="no-contacts-div">YOU HAVE NO CONTACTS</div>}
                {contacts && contacts.map(contact => (
                    <ListItem key={Math.random()} id={contact.id} avatarColor={contact.avatarColor} contactType={contact.contactType} firstName={contact.firstName} lastName={contact.lastName} email={contact.email} sex={contact.sex} phoneNumber={contact.phoneNumber} contacts={contacts} setContacts={setContacts} />
                ))}
            </ul>
        </>

    );
}

export default ContactList;