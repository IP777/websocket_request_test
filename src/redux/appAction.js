export const Type = {
	WEBSOCKET_GET_DATA: "WEBSOCKET_GET_DATA",
};

export const webSocketGetData = (data) => ({
	type: Type.WEBSOCKET_GET_DATA,
	payload: { data },
});
