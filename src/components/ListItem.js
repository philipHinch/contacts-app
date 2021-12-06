import { Icon } from "@iconify/react";


const ListItem = ({ avatarColor, contactType, firstName, lastName, email, phoneNumber, sex, id, contacts, setContacts }) => {

    const handleClick = (e) => {
        console.log(e.target);
    }

    return (

        <li id={id}>
            <div className="li-icons-container">
                <div className="li-user-avatar" title="Avatar"><Icon icon="mdi:account-circle" className="user-avatar" style={{ color: avatarColor }} /></div>
                <div className="li-contact-type" title="Home"><Icon icon="mdi:home-outline" className="contact-type-icon" /></div>
            </div>
            <span className="li-first-name" title="First Name">{firstName}</span>
            <span className="li-last-name" title="Last Name">{lastName}</span>
            <span className="li-email" title="Email">{email}</span>
            <span className="li-phone-number" title="Phone">{phoneNumber}</span>
            <span className="li-sex" title="Sex">{sex}</span>

            <span className="li-close-icon" onClick={(e) => handleClick(e)}><Icon icon="mdi:close-thick" className="close-icon" /></span>
        </li>

    );
}

export default ListItem;