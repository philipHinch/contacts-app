import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
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
    const [colorAlert, setColorAlert] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserFormVisible(false)
        const id = contacts && contacts.length
        const newContact = { firstName, lastName, phoneNumber, email, sex, avatarColor, contactType, id }
        const contactList = [...contacts, newContact]
        setContacts(contactList)
    }

    const handleContactTypeClick = (e) => {
        if (e.target.value) {
            setContactType(e.target.value)
        }
    }

    const showColorAlert = () => {
        setColorAlert(true)
        setTimeout(() => {
            setColorAlert(false)
        }, 2000)
    }

    useEffect(() => {
        showColorAlert()
    }, [avatarColor])


    return (
        <div className="add-contact-form-container">
            <form className="add-contact-form" onSubmit={handleSubmit}>
                <Icon icon="mdi:account-circle" className="user-avatar add-contact-avatar" style={{ color: avatarColor }} />
                <div className="contact-type-container icon-thread">
                    <div className="contact-type" id="home-contact" title="Home">
                        <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios1"
                            value="home-contact"
                            onClick={(e) => handleContactTypeClick(e)} />
                        <label htmlFor="optionsRadios1" className="radio"><Icon icon="mdi:home-outline" className='contact-icon' /></label>
                    </div>
                    <div className="contact-type" id="mobile-contact" title="Mobile">
                        <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios2"
                            value="mobile-contact"
                            onClick={(e) => handleContactTypeClick(e)} />
                        <label htmlFor="optionsRadios2" className="radio"><Icon icon="mdi:cellphone" className='contact-icon' /></label>
                    </div>
                    <div className="contact-type" id="work-contact" title="Work">
                        <input
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios3"
                            value="work-contact"
                            onClick={(e) => handleContactTypeClick(e)} />
                        <label htmlFor="optionsRadios3" className="radio"><Icon icon="mdi:briefcase-outline" className='contact-icon' /></label>
                    </div>
                </div>
                <label htmlFor="fisrt-name-input">First Name: </label>
                <input
                    type="text"
                    id="first-name-input"
                    autoFocus
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <label htmlFor="last-name-input">Last Name: </label>
                <input
                    type="text"
                    id="last-name-input"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                <label htmlFor="phone-number-input">Phone Number: </label>
                <input
                    type="number"
                    id="phone-number-input"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label htmlFor="email-input">Email Address: </label>
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
                        value="Male"
                        onClick={(e) => setSex(e.target.value)} />
                    <label htmlFor="sex-input-male">Male</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex-input-female"
                        value="Female"
                        onClick={(e) => setSex(e.target.value)} />
                    <label htmlFor="sex-input-female">Female</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex-input-other"
                        value="Other"
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
                    {colorAlert && <small className="color-alert">Color Changed</small>}
                </div>
                <div className="buttons-container">
                    <Button buttonText={'Add'} type={'submit'} className={'add-btn btn'} setUserFormVisible={setUserFormVisible} onClick={handleSubmit} />
                    <Button buttonText={'Close'} className={'close-btn btn'} setUserFormVisible={setUserFormVisible} />
                </div>
            </form>
        </div >
    );
}

export default AddContact;