import { CREATE_MESSAGE, GET_ERRORS, RESET_ERRORS } from './types';

// CREATE MESSAGE
export const createMessage = (msg) => {
  return {
    type: CREATE_MESSAGE,
    payload: msg,
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};

export const resetErrors = () => {
	return {
		type: RESET_ERRORS
	}
}