let assert = require('chai').assert;
let axios = require('axios');

import Heart from "../../assets/js/components/Heart";
describe('Heart', () => {
    let heart;

    beforeEach(() => {
        heart = new Heart('toggle-heart_post_1',{'post':'http://nginx/app_dev.php/de/like/like_dummy/dummyID','comment':'','speedbump':''});
    });

    describe('#constructor()', () => {
        it('requires two arguments, element and path object', () => {
            assert.throws(() => {
                new Heart();
            },Error,'"element" and "internal_api_routes" are required.');

            assert.throws(() => {
                new Heart('toggle-heart_post_1');
            },Error,'"element" and "internal_api_routes" are required.');

            assert.throws(() => {
                new Heart('',{});
            },Error,'"element" has to be an string.');

            assert.throws(() => {
                new Heart('toggle-heart_post_1','');
            },Error,'"internal_api_routes" must be an object.');

            assert.throws(() => {
                new Heart('toggle-heart_post_1',{});
            },Error,'"internal_api_routes" need the keys "post", "comment" and "speedbump".');

            assert.doesNotThrow(() => {
                new Heart('toggle-heart_post_1',{'post':'http://nginx/app_dev.php/de/like/like_post/dummyID','comment':'','speedbump':''});
            },Error);
        });
    });

    describe('#id', () => {
        it('returns the constructed id', () => {
            assert.equal(heart.getId(),1);
        });
    });

    describe('#type', () => {
        it('returns the constructed type', () => {
            assert.equal(heart.getType(),'post');
        });
    });

    describe('#type', () => {
        it('returns the constructed likeCount', () => {
            assert.equal(heart.getLikeCount(),0);
        });
    });

    describe('#isChecked', () => {
        it('return the checked state', () => {
            assert.equal(heart.isChecked(), false);
        });
    });

    describe('#like', () => {
        it('should like it and increment likecount/change status', () => {
            return heart.changeStatus().then(() => {
                assert.equal(heart.isChecked(), true);
                assert.equal(heart.getLikeCount(), 1);
            });
        });

        it('should unlike it and decrement likecount/change status', () => {
            heart.checked = true;
            return heart.changeStatus().then(() => {
                assert.equal(heart.isChecked(), false);
                assert.equal(heart.getLikeCount(), 0);
            });
        });

        it('should toggle it and change status/likecount', () => {
            let initialCheck = heart.isChecked();
            let initialLikeCount = heart.getLikeCount();
            return heart.changeStatus().then(() => {
                assert.notEqual(heart.isChecked(),initialCheck);
                assert.notEqual(heart.getLikeCount(),initialLikeCount);
                heart.changeStatus().then(() => {
                    assert.equal(heart.isChecked(),initialCheck);
                    assert.equal(heart.getLikeCount(),initialLikeCount);
                })
            });
        });

        it('should give exception on wrong url like', () => {
            heart.internal_api_routes['post'] = 'ggg';
            return heart.changeStatus().catch((error)=>{
                assert.equal(error.code,'ECONNREFUSED');
            });
        });

        it('should give exception on wrong url unlike', () => {
            heart.internal_api_routes['post'] = 'ggg';
            heart.checked = true;
            return heart.changeStatus().catch((error)=>{
                assert.equal(error.code,'ECONNREFUSED');
            });
        });
    });
});