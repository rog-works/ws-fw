import {AsyncRunner} from './task/AsyncRunner';
import {Logger} from './log/Logger';

export class App {
	public constructor(
		private logger: Logger,
		private runner: AsyncRunner
	) {}

	public async run() {
		try {
			await this.runner.run();
		} catch (e) {
			this.logger.error(e);
		}
		this.logget.info('graceful shutdown');
	}
}

