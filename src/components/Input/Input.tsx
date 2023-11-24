import { FC, useEffect } from "react";
import { StyledInput } from "./styles";
import { fetchUsers } from "../../actions/getUsers";
import { connect } from "react-redux";

interface Props {
  fetchUsers: (value: string) => void;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ fetchUsers, value, onChange }) => {
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (value.length > 0) {
        fetchUsers(value);
      }
    }, 700)

    return () => clearTimeout(delayDebounceFn)
  }, [value, fetchUsers])

  return (
      <StyledInput
        type="number"
        id="users-input"
        placeholder="Enter the number of users"
        onChange={onChange}
        value={value}
        min="1"
      />
  )
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchUsers: (inputValue: string) => dispatch(fetchUsers(inputValue)),
});

export default connect(null, mapDispatchToProps)(Input);
