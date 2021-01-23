import { webSocketGetData } from "./appAction";

const SOCKET_URL = "ws://testapi.marit.expert:3004";

export const getDB = (credentials) => async (dispath) => {
	try {
		const socket = await new WebSocket(SOCKET_URL);

		socket.onopen = () => socket.send(credentials);
		socket.onmessage = (message) => {
			dispath(webSocketGetData(JSON.parse(message.data)));
		};
	} catch (error) {
		throw new Error(error);
	}
};
