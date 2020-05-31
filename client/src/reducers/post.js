import * as actionTypes from "../actions/actionTypes";

const initialState = {
  posts: [],
  post: {},
  loading: true,
  error: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case actionTypes.GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };

    case actionTypes.ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false,
      };

    case actionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };

    case actionTypes.POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case actionTypes.UPDATE_LIKES:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.id ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };

    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false,
      };

    case actionTypes.REMOVE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };

    default:
      return state;
  }
};
