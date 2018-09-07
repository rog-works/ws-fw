import {describe, it} as mocha from 'mocha';
import * as chai from 'chai';
import {WS}, from './src/net/WS'

describe('for WS', () => {
	it('cannot connect to stub endpoint', () => {
		chai.assert.throws(new WS('ws://localhost:8888'), WebScoketConnectedError)
	});
});

