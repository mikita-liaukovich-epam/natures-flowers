import actions from "./actions";

export const initialState = {
  messages: [],
  user: localStorage.getItem('assistant_user') || null,
  darkTheme: localStorage.getItem('assistant_theme') || false,
  queue: [],
  isPlaying: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ],
        queue: action.payload.type === 'ai' ? [...state.queue, action.payload] : state.queue,
      }
    }
    case actions.POP_QUEUE: {
      return {
        ...state,
        queue: state.queue.slice(1),
        isPlaying: false,
      }
    }
    case actions.SET_PLAY: {
      return {
        ...state,
        isPlaying: action.payload,
      }
    }
    case actions.SET_THEME: {
      localStorage.setItem('assistant_theme', action.payload)
      return {
        ...state,
        darkTheme: action.payload
      }
    }
    case actions.SET_USER: {
      localStorage.setItem('assistant_user', action.payload)
      return {
        ...state,
        user: action.payload
      }
    }
    default:
      return state;
  }
}
