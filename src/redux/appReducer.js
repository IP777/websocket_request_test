import { combineReducers } from "redux";
import { Type } from "./appAction";

export function data(state = [], { type, payload }) {
	switch (type) {
		case Type.WEBSOCKET_GET_DATA:
			return payload.data;

		default:
			return state;
	}
}

export const getData = (state = {}) => state.data;

export const rootReducer = combineReducers({
	data,
});
