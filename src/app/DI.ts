import * as inversify from 'inversify';

type Deffinition {
	path: string;
	module: string;
	args: any[]
}

type Deffenitions {
	[key: string]: Deffinition;
}

export class Container {
	private _container: inversify.Container;

	public constructor() {
		this._container = this.createContainer(this.loadDeffinitions(path));
	}

	private loadDeffinitions(path: string): Deffenitions {
		return <Deffinitions>yaml.load(path);
	}

	private createContainer(deffinitions: Deffinitions): inversify.Container {
		const container = new inversify.Container(); 
		for (const key: string in deffinitions) {
			container.bind(key).to(this.register(this.resolver(container, deffinitions[key])));
		}
		return container;
	}

	private register(resolver: Function): Function {
		return () => {
			const package = require(resolver('path'));
			const module = package[resolver('module')];
			return module(...resolver('args'));
		};
	}

	private resolver(container: inversify.Container, deffinition: Deffinition): any {
		function resolve(value): any {
			return container.has(value) ? container.get(value) : value);
		}
		return (key: string) => {
			if (!Array.isArray(deffinition[key])) {
				return resolve(deffinition[key]);
			}
			return deffinition[key].map(resolve);
		};
	}
}

