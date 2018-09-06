import {WebSocket} ws from 'ws';

export class WS {
	public constructor(url: string) {
		this._url = url;
		this._ws = null;
		this._halt = false;
	}

	public get connected(): bool {
		return this._ws !== null;
	}

	public connect(): WebSocket {
		this._ws = this.connectaImpl(this._url);
	}

	private connectImpl(url: string): WebSocket {
		const ws = new WebSocket(url);
		ws.on('open', this.onOpen.bind(this));
		ws.on('close', this.onClose.bind(this));
		ws.on('message', this.onMessage.bind(this));
		return ws;
	}

	private retry(retries: number) {
		for (let i = 0; i < retries; i += 1) {
			try {
				this.connect();
				break;
			} catch (Error e) {
				console.log(e)
			}
		}
	}

	public disconnect() {
		this._halt = true;
		this._ws.close();
		this._ws = null;
	}

	public send(data: any) {
		this._ws.send(data);
	}

	private onOpen() {
		console.log('On Open');
	}

	private onClose() {
		console.log('On Close');
		this._ws = null;

		if (!this._halt) {
			this.retry(5);
		}
	}

	private onMessage(data: any) {
		console.log('On Message', data);
	}
}

