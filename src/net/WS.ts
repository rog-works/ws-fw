import * as WebSocket from 'ws';

export class WS {
	private _halt: boolean = false;
	private _connected: boolean = false;
	private _url: string = '';
	private _ws: WebSocket;

	public constructor(url: string) {
		this._url = url;
		this._ws = this.connect(this._url);
	}

	public get connected(): boolean {
		return this._connected;
	}

	private connect(url: string): WebSocket {
		const ws = new WebSocket(url);
		ws.on('open', this.onOpen.bind(this));
		ws.on('close', this.onClose.bind(this));
		ws.on('message', this.onMessage.bind(this));
		return ws;
	}

	private retry(retries: number) {
		for (let i = 0; i < retries; i += 1) {
			try {
				this._ws = this.connect(this._url);
				break;
			} catch (err) {
				console.log(err)
			}
		}
	}

	public disconnect() {
		if (this.connected) {
			this._halt = true;
			this._ws.close();
		}
	}

	public send(data: any) {
		if (this.connected) {
			this._ws.send(data);
		}
	}

	private onOpen() {
		console.log('On Open');
		this._connected = true;
	}

	private onClose() {
		console.log('On Close');
		this._connected = false;

		if (!this._halt) {
			this.retry(5);
		}
	}

	private onMessage(data: any) {
		console.log('On Message', data);
	}
}
