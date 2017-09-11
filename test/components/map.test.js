let chai = require('chai');
let assertPromised = require('chai-as-promised');
chai.use(assertPromised);
let assert = chai.assert;

import Map from "../../assets/js/components/Map";
describe('Map', () => {
    let map;

    beforeEach(() => {
        map = new Map('testApiKey', 'map','http://lowcarroutes.dev:8081/app_dev.php/de/speedbump/all');
    });

    describe('#constructor()', () => {
        it('requires three arguments', () => {
            assert.throws(() => {
                new Map();
            },Error,'"MAPQUEST_APIKEY", "id" and "internal_api_route" are required.');

            assert.throws(() => {
                new Map('test');
            },Error,'"MAPQUEST_APIKEY", "id" and "internal_api_route" are required.');

            assert.throws(() => {
                new Map('test','map');
            },Error,'"MAPQUEST_APIKEY", "id" and "internal_api_route" are required.');

            assert.doesNotThrow(() => {
                new Map('test', 'map','/app_dev.php/de/speedbump/all');
            },Error);
        });
    });

    describe('#zoom', () => {
        it('returns the initial zoom', () => {
            assert.equal(map.getOption('zoom'),12);
        });

        it('can be changed', () => {
            map.setZoom(10);
            assert.equal(map.getOption('zoom'),10);
        });

        it('only accepts numerical values', () => {
            assert.throws(() => {
                map.setZoom('test');
            },Error,'"zoom" must be a number.');
        });
    });

    describe('#pitch', () => {
        it('returns the initial pitch', () => {
            assert.equal(map.getOption('pitch'),0);
        });

        it('can be changed', () => {
            map.setPitch(10);
            assert.equal(map.getOption('pitch'),10);
        });

        it('only accepts numerical values', () => {
            assert.throws(() => {
                map.setPitch('test');
            },Error,'"pitch" must be a number.');
        });
    });
    
    describe('#bearing', () => {
        it('returns the initial bearing', () => {
            assert.equal(map.getOption('bearing'),0);
        });

        it('can be changed', () => {
            map.setBearing(10);
            assert.equal(map.getOption('bearing'),10);
        });

        it('only accepts numerical values', () => {
            assert.throws(() => {
                map.setBearing('test');
            },Error,'"bearing" must be a number.');
        });
    });

    describe('#center', () => {
        it('can be changed', () => {
            map.setCenter([-74.005900, 40.712800]);
            assert.lengthOf(map.getOption('center'),2);
            assert.deepEqual(map.getOption('center'),[-74.005900, 40.712800]);
        });

        it('only accepts array', () => {
            assert.throws(() => {
                map.setCenter('-74.00590,40.71280');
            }, Error, '"center" must be an array.');
        });

        it('only accepts 2 keys in array', () => {
            assert.throws(() => {
                map.setCenter([-74.005900]);
            }, Error, '"center" array needs exaclty 2 values.');

            assert.throws(() => {
                map.setCenter([-74.005900,-74.005900,-74.005900]);
            }, Error, '"center" array needs exaclty 2 values.');
        });

        it('only accepts array with 2 double values', () => {
            assert.throws(() => {
                map.setCenter([-74.005900, 'test']);
            }, Error, '"center" array has non-float values.');
        });
    });

    describe('#startDestinationRoute', () => {
        it('try start and destination to route', () => {
            map.setStart('350 5th Ave, New York, NY 10118');
            map.setDestination('One Liberty Plaza, New York, NY 10006');
            assert.lengthOf(map.getRoute(), 2);
            assert.deepEqual(map.getRoute(),['350 5th Ave, New York, NY 10118','One Liberty Plaza, New York, NY 10006'])
        });

        it('throw array when start is missing', () => {
            map.setDestination('One Liberty Plaza, New York, NY 10006');
            assert.throws(() => map.getRoute(), Error, 'You are not allowed to call "getRoute()" when there is no start and destination point.')
        });

        it('throw array when destination is missing', () => {
            map.setStart('350 5th Ave, New York, NY 10118');
            assert.throws(() => map.getRoute(), Error, 'You are not allowed to call "getRoute()" when there is no start and destination point.')
        });
    });

    describe('#loadSpeedBumps', () => {
        it('should download it', () => {
            //assert.lengthOf(map.speedbumps,0);
            assert.eventually.equal(map.loadSpeedBumps(),'');
        });
    });
});