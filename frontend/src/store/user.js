const USER_ADDED = "users/USER_ADDED";

const addUser = (user) => ({ type: USER_ADDED, user });

const postUser = (user) => async (dispatch) => {
  const res = await fetch("/api/session", {
    method: "POST",
    headers: "Content-Type: application/json",
    body: JSON.stringify(user),
  });
  if (res.ok) {
    const newUser = await res.json();
    dispatch(addUser(newUser));
  }
};

let initialState = { user: [] };

export default function userReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case USER_ADDED:
      newState = { ...state, user: action.user };
      return newState;
    default:
      return state;
  }
}
