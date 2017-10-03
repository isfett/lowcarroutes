import axios from 'axios';

class Heart
{
    constructor(element, internal_api_routes)
    {
        if(typeof element === 'undefined' || typeof internal_api_routes === 'undefined')
        {
            throw new Error('"element" and "internal_api_routes" are required.');
        }
        if(typeof element !== 'string' || element === '')
        {
            throw new Error('"element" has to be an string.');
        }
        if(typeof internal_api_routes !== 'object')
        {
            throw new Error('"internal_api_routes" must be an object.');
        }
        if(internal_api_routes.hasOwnProperty('post') === false || internal_api_routes.hasOwnProperty('comment') === false || internal_api_routes.hasOwnProperty('speedbump')===false)
        {
            throw new Error('"internal_api_routes" need the keys "post", "comment" and "speedbump".');
        }
        this.heartElement = $('#'+element);
        this.type = this.heartElement.data('type');
        this.id = this.heartElement.data('id');
        this.likeCount = this.heartElement.data('count');
        this.checked = this.heartElement.is(':checked');
        this.countElement = $('#count-heart_'+this.type+'_'+this.id);
        this.internal_api_routes = internal_api_routes;
        this.addToggleEventHandler();
    }
    apiCall(heart){
        return new Promise((resolve, reject) => {
            axios.post(heart.internal_api_routes[heart.type].replace('dummyID',heart.id))
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
        });
    }
    like(heart) {
        return new Promise((resolve, reject) => {
            heart.apiCall(heart).then((response)=>{
                /* istanbul ignore next */
                window.setTimeout(function(){
                    heart.heartElement.addClass('toggled')
                }, 2500);
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    unlike(heart) {
        heart.heartElement.addClass('untoggle');
        return new Promise((resolve, reject) => {
            heart.apiCall(heart).then((response) => {
                /* istanbul ignore next */
                window.setTimeout(function () {
                    heart.heartElement.removeClass('untoggle');
                    heart.heartElement.removeClass('toggled');
                }, 1000);
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }
    changeStatus() {
        let heart = this;
        let call = heart.isChecked() ? heart.unlike : heart.like;
        return new Promise((resolve, reject) => {
            call(heart).then((response) => {
                heart.likeCount = response.likeCount;
                heart.updateCountText();
                heart.checked = !heart.checked;
                resolve();
            }).catch(reject);
        });
    }
    addToggleEventHandler/* istanbul ignore next */() {
        let heart = this;
        this.heartElement.on('change', function(e){
            /* istanbul ignore next */
            if(heart.heartElement.hasClass('notLoggedIn'))
            {
                e.preventDefault();
                return false;
            }
            heart.changeStatus();
            return true;
        });
    }
    updateCountText() {
        this.countElement.text(this.likeCount);
        /* istanbul ignore next */
        if(this.likeCount === 0)
        {
            this.countElement.addClass('zeroCount');
        }
        else {
            this.countElement.removeClass('zeroCount');
        }
    }
    getId() {
        return this.id;
    }
    getType() {
        return this.type;
    }
    getLikeCount() {
        return this.likeCount;
    }
    isChecked() {
        return this.checked;
    }
}

export {Heart as Heart};
export default Heart;