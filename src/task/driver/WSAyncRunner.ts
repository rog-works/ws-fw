
export class WSAyncRunner extends AyncRunner {
	public async run(): Promise<void> {
		const ws = new WS('ws://localhost:8080');
		ws.on('open', this.onOpen.bind(this));
		ws.on('close', this.onClose.bind(this));
		ws.on('message', this.onMessage.bind(this));
		const state = await = ws.start();
	}
}

