import * as WebSocket from 'ws';

export class WSServer {
	private _server: WebSocket.Server;

	public constructor() {
		this._server = this.start(8080);
	}

	private start(port: number): WebSocket.Server {
		const server = new WebSocket.Server({port});
		server.on('connection', this.onConnection.bind(this));
		return server;
	}

	public onConnection(ws: WebSocket) {
		console.log('On Connection');
	}
}
