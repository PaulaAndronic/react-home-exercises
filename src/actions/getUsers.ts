import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess } from "../reducers/usersReducer";

export const fetchUsers = (inputValue: string) => {
  return (dispatch: any) => {
    dispatch(fetchUsersRequest());

    fetch(`https://randomuser.me/api/?results=${inputValue}`)
      .then((response) => { return response.json() })
      .then((data) => {
        const users = data.results;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message));
      });
  };
};