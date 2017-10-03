class Point
{
    constructor(data)
    {
        if(typeof data === 'undefined')
        {
            throw new Error('"data" is required.');
        }
        if(typeof data !== 'object')
        {
            throw new Error('"data" must be an object.');
        }
        if(Array.isArray(data))
        {
            throw new Error('"data" must be an object.');
        }
        if(data.hasOwnProperty('id') === false)
        {
            throw new Error('object key "id" does not exist.');
        }
        if(data.hasOwnProperty('lat') === false)
        {
            throw new Error('object key "lat" does not exist.');
        }
        if(data.hasOwnProperty('lng') === false)
        {
            throw new Error('object key "lng" does not exist.');
        }
        if(data.hasOwnProperty('linkId') === false)
        {
            throw new Error('object key "linkId" does not exist.');
        }
        this.id = data.id;
        this.lat = data.lat;
        this.lng = data.lng;
        this.linkId = data.linkId;
    }
    getId()
    {
        return this.id;
    }
    getLat()
    {
        return this.lat;
    }
    getLng()
    {
        return this.lng;
    }
    getLatLng()
    {
        return [this.lat, this.lng];
    }
    getLinkId()
    {
        return this.linkId;
    }
}

export {Point as Point};
export default Point;