import { Icon } from "@iconify/react";
import Button from "../UI/Button";

const avatarColors = ['crimson', 'steelblue', 'hotpink', 'rebeccapurple', 'forestgreen', 'goldenrod']

const AddContact = ({ setUserFormVisible }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        setUserFormVisible(false)
    }

    return (
        <div className="add-contact-form-container">
            <form className="add-contact-form" onSubmit={handleSubmit}>
                <Icon icon="mdi:account-circle" className="user-avatar add-contact-avatar" />
                <div className="contact-type-container">
                    <div className="contact-type" id="home-contact" title="Home"><Icon icon="mdi:home-outline" />
                    </div>
                    <div className="contact-type" id="mobile-contact" title="Mobile"><Icon icon="mdi:cellphone" />
                    </div>
                    <div className="contact-type" id="work-contact" title="Work"><Icon icon="mdi:briefcase-outline" />
                    </div>
                </div>
                <label htmlFor="fisrt-name-input">First Name:</label>
                <input type="text" id="first-name-input" autoFocus required />
                <label htmlFor="last-name-input">Last Name:</label>
                <input type="text" id="last-name-input" />
                <label htmlFor="phone-number-input">Phone Number:</label>
                <input type="number" id="phone-number-input" />
                <label htmlFor="email-input">Email Address:</label>
                <input type="email" id="email-input" />
                <div className="sex-container">
                    <input type="radio" name="sex" id="sex-input-male" value="male" />
                    <label htmlFor="sex-input-male">Male</label>
                    <input type="radio" name="sex" id="sex-input-female" value="female" />
                    <label htmlFor="sex-input-female">Female</label>
                    <input type="radio" name="sex" id="sex-input-other" value="other" />
                    <label htmlFor="sex-input-other">Other</label>
                </div>
                <div className="color-choice-container">
                    <span className="color-choice" id={avatarColors[0]} style={{ backgroundColor: avatarColors[0] }}></span>
                    <span className="color-choice" id={avatarColors[1]} style={{ backgroundColor: avatarColors[1] }}></span>
                    <span className="color-choice" id={avatarColors[2]} style={{ backgroundColor: avatarColors[2] }}></span>
                    <span className="color-choice" id={avatarColors[3]} style={{ backgroundColor: avatarColors[3] }}></span>
                    <span className="color-choice" id={avatarColors[4]} style={{ backgroundColor: avatarColors[4] }}></span>
                    <span className="color-choice" id={avatarColors[5]} style={{ backgroundColor: avatarColors[5] }}></span>
                </div>
                <div className="buttons-container">
                    <Button buttonText={'Add'} type={'submit'} className={'add-btn btn'} setUserFormVisible={setUserFormVisible} />
                    <Button buttonText={'Close'} className={'close-btn btn'} setUserFormVisible={setUserFormVisible} />
                </div>
            </form>
        </div>
    );
}

export default AddContact;