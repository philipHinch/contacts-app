import { Icon } from "@iconify/react";
import { useState } from "react";
import Button from "../UI/Button";

const avatarColors = ['crimson', 'steelblue', 'hotpink', 'rebeccapurple', 'forestgreen', 'goldenrod']

const AddContact = ({ setUserFormVisible, contacts, setContacts }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState('')
    const [avatarColor, setAvatarColor] = useState('')
    const [contactType, setContactType] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setUserFormVisible(false)
        const id = contacts && contacts.length
        const newContact = { firstName, lastName, phoneNumber, email, sex, avatarColor, contactType, id }
        const contactList = [...contacts, newContact]
        setContacts(contactList)
    }


    const handleContactTypeClick = (e) => {
        if (e.target.id) {
            setContactType(e.target.id)
        } else if (e.target.id) {
            setContactType(e.target.parentElement.id)
        } else if (e.target.parentElement.parentElement.id) {
            setContactType(e.target.parentElement.parentElement.id)
        }
    }



    return (
        <div className="add-contact-form-container">
            <form className="add-contact-form" onSubmit={handleSubmit}>
                <Icon icon="mdi:account-circle" className="user-avatar add-contact-avatar" style={{ color: avatarColor }} />
                <div className="contact-type-container">
                    <div className="contact-type" id="home-contact" title="Home" value="home" onClick={(e) => handleContactTypeClick(e)}><Icon icon="mdi:home-outline" />
                    </div>
                    <div className="contact-type" id="mobile-contact" title="Mobile" value="mobile" onClick={(e) => handleContactTypeClick(e)}><Icon icon="mdi:cellphone" />
                    </div>
                    <div className="contact-type" id="work-contact" title="Work" value="work" onClick={(e) => handleContactTypeClick(e)}><Icon icon="mdi:briefcase-outline" />
                    </div>
                </div>
                <label htmlFor="fisrt-name-input">First Name:</label>
                <input
                    type="text"
                    id="first-name-input"
                    autoFocus
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="last-name-input">Last Name:</label>
                <input
                    type="text"
                    id="last-name-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="phone-number-input">Phone Number:</label>
                <input
                    type="number"
                    id="phone-number-input"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label htmlFor="email-input">Email Address:</label>
                <input
                    type="email"
                    id="email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <div className="sex-container">
                    <input
                        type="radio"
                        name="sex"
                        id="sex-input-male"
                        value="male"
                        onClick={(e) => setSex(e.target.value)} />
                    <label htmlFor="sex-input-male">Male</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex-input-female"
                        value="female"
                        onClick={(e) => setSex(e.target.value)} />
                    <label htmlFor="sex-input-female">Female</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex-input-other"
                        value="other"
                        onClick={(e) => setSex(e.target.value)} />
                    <label htmlFor="sex-input-other">Other</label>
                </div>
                <div className="color-choice-container">
                    <span className="color-choice" onClick={(e) => setAvatarColor(e.target.id)} id={avatarColors[0]} style={{ backgroundColor: avatarColors[0] }}></span>
                    <span className="color-choice" onClick={(e) => setAvatarColor(e.target.id)} id={avatarColors[1]} style={{ backgroundColor: avatarColors[1] }}></span>
                    <span className="color-choice" onClick={(e) => setAvatarColor(e.target.id)} id={avatarColors[2]} style={{ backgroundColor: avatarColors[2] }}></span>
                    <span className="color-choice" onClick={(e) => setAvatarColor(e.target.id)} id={avatarColors[3]} style={{ backgroundColor: avatarColors[3] }}></span>
                    <span className="color-choice" onClick={(e) => setAvatarColor(e.target.id)} id={avatarColors[4]} style={{ backgroundColor: avatarColors[4] }}></span>
                    <span className="color-choice" onClick={(e) => setAvatarColor(e.target.id)} id={avatarColors[5]} style={{ backgroundColor: avatarColors[5] }}></span>
                </div>
                <div className="buttons-container">
                    <Button buttonText={'Add'} type={'submit'} className={'add-btn btn'} setUserFormVisible={setUserFormVisible} onClick={handleSubmit} />
                    <Button buttonText={'Close'} className={'close-btn btn'} setUserFormVisible={setUserFormVisible} />
                </div>
            </form>
        </div>
    );
}

export default AddContact;