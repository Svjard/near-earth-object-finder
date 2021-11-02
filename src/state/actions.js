const APP_NAME = 'near-earth-object-finder';

export const SET_START_DATE = `${APP_NAME}/setStartDate`;
export const SET_END_DATE = `${APP_NAME}/setEndDate`;
export const SET_SEARCH = `${APP_NAME}/setSearch`;

const createAction = (type, payload) => ({
  type,
  payload,
});

export const setStartDate = (dispatch) => async (startDate) => {
  dispatch(
    createAction(SET_START_DATE, {
      startDate,
    })
  );
};

export const setEndDate = (dispatch) => async (endDate) => {
  dispatch(
    createAction(SET_END_DATE, {
      endDate,
    })
  );
};

export const setSearch = (dispatch) => async (search) => {
  dispatch(
    createAction(SET_SEARCH, {
      search,
    })
  );
};
