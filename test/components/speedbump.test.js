let assert = require('chai').assert;

import SpeedBump from "../../assets/js/components/SpeedBump";
import Point from "../../assets/js/components/Point";
describe('SpeedBump', () => {
    let speedbump;

    beforeEach(() => {
        speedbump = new SpeedBump({
            id : 1,
            status: 2,
            height: 5,
            point: {
                id: 1,
                lat: 50.000000,
                lng: 50.000000,
                linkId: 1,
            }
        });
    });

    describe('#constructor()', () => {
        it('requires one argument in type of options object', () => {
            assert.throws(() => {
                new SpeedBump();
            },Error,'"data" is required.');

            assert.throws(() => {
                new SpeedBump('test');
            },Error,'"data" must be an object.');

            assert.throws(() => {
                new SpeedBump(['test']);
            },Error,'"data" must be an object.');

            assert.doesNotThrow(() => {
                new SpeedBump({
                    id : 1,
                    status: 2,
                    height: 5,
                    point: {
                        id: 1,
                        lat: 50.000000,
                        lng: 50.000000,
                        linkId: 1,
                    }
                });
            },Error);
        });
    });

    describe('#id', () => {
        it('returns the constructed id', () => {
            assert.equal(speedbump.getId(),1);
        });
    });

    describe('#height', () => {
        it('returns the constructed height', () => {
            assert.equal(speedbump.getHeight(),5);
        });
    });

    describe('#status', () => {
        it('returns the constructed status', () => {
            assert.equal(speedbump.getStatus(),2);
        });

        it('returns the constructed status label', () => {
            assert.equal(speedbump.getStatusLabel(),'confirmed');
        });

        it('can be changed', () => {
            speedbump.setStatus(3);
            assert.equal(speedbump.getStatus(),3);
            assert.equal(speedbump.getStatusLabel(),'reported');
        });

        it('can be changed by label', () => {
            speedbump.setStatusLabel('registered');
            assert.equal(speedbump.getStatusLabel(),'registered');
            assert.equal(speedbump.getStatus(),1);
        });
    });

    describe('#point', () => {
        it('returns instanceof point', () => {
            assert.instanceOf(speedbump.getPoint(),Point);
        });
    });
});