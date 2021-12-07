import { Icon } from "@iconify/react";


const ListItem = ({ avatarColor, contactType, firstName, lastName, email, phoneNumber, sex, id }) => {

    const handleClick = (e) => {
        console.log(e.target);
    }

    let icon
    let title
    if (contactType === 'mobile-contact') {
        icon = 'cellphone'
        title = 'Mobile'
    } else if (contactType === 'home-contact') {
        icon = 'home-outline'
        title = 'Home'
    } else if (contactType === 'work-contact') {
        icon = 'briefcase-outline'
        title = 'Work'
    }

    return (

        <li id={id} className="table-row">
            <div className="li-icons-container col col-1">
                <div className="li-user-avatar" title="Avatar"><Icon icon="mdi:account-circle" className="user-avatar" style={{ color: avatarColor }} /></div>
                <div className="li-contact-type" title={title}><Icon icon={`mdi:${ icon }`} className="contact-type-icon" /></div>
            </div>
            <div className="li-first-name col col-2" title="First Name">{firstName}</div>
            <div className="li-last-name col col-3" title="Last Name">{lastName}</div>
            <div className="li-email col col-4" title="Email">{email}</div>
            <div className="li-phone-number col col-5" title="Phone">{phoneNumber}</div>
            <div className="li-sex col col-6" title="Sex">{sex}</div>

            <div className="li-close-icon col col-7" onClick={(e) => handleClick(e)}><Icon icon="mdi:close-thick" className="close-icon" /></div>
        </li>

    );
}

export default ListItem;