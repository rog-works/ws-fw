import {describe, it} from 'mocha';
import * as chai from 'chai';
import {WS} from '../../net/WS'

describe('for WS', () => {
	it('cannot connect to stub endpoint', () => {
		chai.assert.throws(() => new WS('ws://localhost:8888'), Error)
	});
});

