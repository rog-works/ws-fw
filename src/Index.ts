import {Container} from './app/DI';
import {App} from './app/App';

const path = `config/app-${process.env.ENV || 'dev'}.yml`;
container = new Container().load(path);
container.get<App>('app').run();

