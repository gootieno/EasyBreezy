//---------------------------ACTIONS

const DESTINATION_ADDED = "destinations/DESTINATIONS_ADDED";
const DESTINATION_EDITED = "destinations/DESTINATIONS_ADDED";
const DESTINATION_DELETED = "destinations/DESTINATIONS_ADDED";
const DESTINATIONS_LOADED = "destinations/DESTINATIONS_LOADED";

//---------------------------THUNK ACTIONS

const addDestination = (destination) => {
  return {
    type: DESTINATION_ADDED,
    destination,
  };
};

const editDestination = (destination) => ({
  type: DESTINATION_EDITED,
  destination,
});

const deleteDestination = (id) => ({ type: DESTINATION_DELETED, id });

const loadDestinations = (destinations) => ({
  type: DESTINATIONS_LOADED,
  destinations,
});

//----------------------------THUNKS

export const getDestinations = (payload) => async (dispatch) => {
  const { id } = payload;
  console.log("this is the user id", id);
  const res = await fetch(`/api/destinations/${id}`);
  if (res.ok) {
    const destinations = await res.json();
    console.log("destination backend stuff", destinations);
    dispatch(loadDestinations(destinations));
  }
};

export const addOneDestination = (payload) => async (dispatch) => {
  const { name, userId } = payload;
  const res = await fetch("/api/destinations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, name }),
  });
  if (res.ok) {
    const destination = await res.json();
    dispatch(addDestination(destination));
  }
};

export const editOneDestination = (payload) => async (dispatch) => {
  const { id, name, userId } = payload;
  const res = await fetch(`/api/destinations/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, userId }),
  });
  if (res.ok) {
    const updatedDestination = await res.json();
    dispatch(editDestination(updatedDestination));
  }
};

export const deleteOneDestination = (id) => async (dispatch) => {
  const res = await fetch(`/api/destinations/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const deleted = await res.json();
    if (deleted) {
      dispatch(deleteDestination(id));
    }
  }
};

export default function destinationReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case DESTINATION_ADDED:
      newState = {
        ...state,
        [action.destination.id]: action.destination,
      };
      return newState;
    case DESTINATION_DELETED:
      newState = { ...state };
      delete newState[action.id];
      return newState;
    case DESTINATIONS_LOADED:
      newState = { ...state };
      action.destinations.forEach((destination) => {
        newState[destination.id] = destination;
      });
      return newState;
    case DESTINATION_EDITED:
      newState = { ...state };
      newState[action.destination.id] = action.destination;
      return newState;
    default:
      return state;
  }
}
