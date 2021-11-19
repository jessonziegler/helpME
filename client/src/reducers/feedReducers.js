const {
  FEED_LIST_REQUEST,
  FEED_LIST_SUCCESS,
  FEED_LIST_FAIL,
  FEED_CREATE_REQUEST,
  FEED_CREATE_SUCCESS,
  FEED_CREATE_FAIL,
  FEED_CREATE_RESET,
  INDIVIDUAL_FEED_DETAILS_REQUEST,
  INDIVIDUAL_FEED_DETAILS_SUCCESS,
  INDIVIDUAL_FEED_DETAILS_FAIL
} = require('../constants/feedConstants');

export const feedListReducer = (
  state = { loading: true, feeds: [] },
  action
) => {
  switch (action.type) {
    case FEED_LIST_REQUEST:
      return { loading: true };
    case FEED_LIST_SUCCESS:
      return {
        loading: false,
        feeds: action.payload.feeds
      };
    case FEED_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const feedCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case FEED_CREATE_REQUEST:
      return { loading: true };
    case FEED_CREATE_SUCCESS:
      return { loading: false, success: true, feed: action.payload };
    case FEED_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case FEED_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const individualFeedDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case INDIVIDUAL_FEED_DETAILS_REQUEST:
      return { loading: true };
    case INDIVIDUAL_FEED_DETAILS_SUCCESS:
      return { loading: false, feed: action.payload };
    case INDIVIDUAL_FEED_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};