import { AddContactsBtnStyled, AddContactsBtnTextStyled } from './AddContactsBtn.styled';
import { TbUserPlus } from 'react-icons/tb';

export const AddContactsBtn = ({onClickAddContactsBtn}) => {
    return (
        <AddContactsBtnStyled type="button" onClick={onClickAddContactsBtn}>
                <TbUserPlus />
                <AddContactsBtnTextStyled>Add contact</AddContactsBtnTextStyled>
            </AddContactsBtnStyled>
    )
};