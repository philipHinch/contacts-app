import { Icon } from "@iconify/react";


const Header = () => {
    return (

        <header>
            <h1 className="header-title"><Icon icon="mdi:account-group-outline" className="header-icon" />
                My Contacts</h1>
        </header>

    );
}

export default Header;