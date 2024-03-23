import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/slice';

import useContacts from '../../hooks/useContacts';

const FilterContactsInput = () => {
  const dispatch = useDispatch();

  const { filter } = useContacts();

  const handleInputChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <>
      <label htmlFor="filterInputId">Find contacts by name</label>
      <input
        onChange={handleInputChange}
        type="text"
        name="filter"
        value={filter}
        id="filterInputId"
        autoComplete="off"
        pattern="^[a-zA-Z]+(([' \-][a-zA-Z ])?[a-zA-Z]*)*"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};

export default FilterContactsInput;
