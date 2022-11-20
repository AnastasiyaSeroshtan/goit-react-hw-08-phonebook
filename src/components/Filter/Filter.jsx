import { useSelector, useDispatch } from "react-redux";
import { selectFilterContacts } from "redux/filter/selector";
import { filterContacts } from "redux/filter/slice";
import { Box } from "components/Box";
import { LabelStyled, InputStyled } from "./Filter.styled";

export const Filter = () => {
    const filter = useSelector(selectFilterContacts);
    const dispatch = useDispatch();
    const handleFilterChange = (e) => dispatch(filterContacts(e.currentTarget.value))
    return (
        <Box mb={4}>
            <LabelStyled>
                Find contacts by name
                <InputStyled type="text" value={filter} onChange={handleFilterChange}/>
            </LabelStyled>
        </Box>
    )
};