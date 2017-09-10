class Point
{
    constructor(data)
    {
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