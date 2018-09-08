import {describe, it} from 'mocha';
import * as chai from 'chai';
import {WS} from 'net/WS';

describe('for WS', () => {
	it('cannot connect to not exist ip', () => {
		chai.assert.throws(() => new WS('ws://localhost:8888'));
	});
});
