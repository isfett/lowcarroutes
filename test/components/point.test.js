let assert = require('chai').assert;

import Point from "../../assets/js/components/Point";
describe('Point', () => {
    let point;

    beforeEach(() => {
        point = new Point({
            id: 1,
            lat: 50.000000,
            lng: 60.000000,
            linkId: 1337,
        });
    });

    describe('#constructor()', () => {
        it('requires one argument in type of options object', () => {
            assert.throws(() => {
                new Point();
            },Error,'"data" is required.');

            assert.throws(() => {
                new Point('test');
            },Error,'"data" must be an object.');

            assert.throws(() => {
                new Point(['test']);
            },Error,'"data" must be an object.');

            assert.throws(() => {
                new Point({
                    id: 1,
                    lng: 50.000000,
                    linkId: 1,
                });
            },Error,'object key "lat" does not exist.');

            assert.doesNotThrow(() => {
                new Point({
                    id: 1,
                    lat: 50.000000,
                    lng: 50.000000,
                    linkId: 1,
                });
            },Error);
        });
    });

    describe('#id', () => {
        it('returns the constructed id', () => {
            assert.equal(point.getId(),1);
        });
    });

    describe('#lat', () => {
        it('returns the constructed lat (latitude)', () => {
            assert.equal(point.getLat(),50.000000);
        });
    });

    describe('#lng', () => {
        it('returns the constructed lng (longitude)', () => {
            assert.equal(point.getLng(),60.000000);
        });
    });

    describe('#latlng', () => {
        it('returns the constructed latlng (array of latitude and longitude)', () => {
            assert.deepEqual(point.getLatLng(),[50.000000,60.000000]);
        });
    });

    describe('#linkId', () => {
        it('returns the constructed linkId', () => {
            assert.equal(point.getLinkId(),1337);
        });
    });
});