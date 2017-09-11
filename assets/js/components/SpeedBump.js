import Point from './Point';
class SpeedBump
{
    statuses = {
        'registered': 1,
        'confirmed': 2,
        'reported': 3,
        'deleted': 4,
    };
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
        this.id = data.id;
        this.height = data.height;
        this.point = new Point(data.point);
        this.status = data.status;
    }
    getId()
    {
        return this.id;
    }
    getHeight()
    {
        return this.height;
    }
    getPoint()
    {
        return this.point;
    }
    getStatus()
    {
        return this.status;
    }
    getStatusLabel()
    {
        for(var statusLabel in this.statuses)
        {
            if(this.statuses[statusLabel] === this.status)
            {
                return statusLabel;
            }
        }
    }
    setStatus(status)
    {
        this.status = status;
    }
    setStatusLabel(statusLabel)
    {
        this.status = this.statuses[statusLabel];
    }
}

export {SpeedBump as SpeedBump};
export default SpeedBump;