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
        // todo
    }
    setStatus()
    {
        // todo
    }
}

export {SpeedBump as SpeedBump};
export default SpeedBump;