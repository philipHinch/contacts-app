import { Icon } from "@iconify/react";
import Button from "../UI/Button";


const plusIcon = <Icon icon="mdi:plus" className="plus-icon" />



const SearchInput = ({ setUserFormVisible, filterValue, setFilterValue }) => {


    const handleFilter = (e) => {
        let value = e.target.value
        setFilterValue(value)
    }

    return (

        <form className="search-input-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" id="search-input" placeholder="Filter contacts.." aria-label="filter" onChange={(e) => handleFilter(e)} value={filterValue} />
            <Button buttonText={'Add Contact'} className={'add-contact-btn btn'} icon={plusIcon} setUserFormVisible={setUserFormVisible} />
        </form>

    );
}

export default SearchInput;