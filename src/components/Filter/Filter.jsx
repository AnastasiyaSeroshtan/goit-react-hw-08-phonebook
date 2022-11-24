import { useSelector, useDispatch } from "react-redux";
import { selectFilterContacts } from "redux/filter/filter-selector";
import { filterContacts } from "redux/filter/filter-slice";
import { Box } from "components/Box";
import { LabelStyled, InputStyled } from "./Filter.styled";

export const Filter = () => {
    const filter = useSelector(selectFilterContacts);
    const dispatch = useDispatch();
    const handleFilterChange = (e) => dispatch(filterContacts(e.currentTarget.value))
    return (
        <Box display="block" margin='0 auto'>
            <LabelStyled>
                <InputStyled type="text" value={filter} onChange={handleFilterChange} placeholder='Find contact by name'/>
            </LabelStyled>
        </Box>
    )
};