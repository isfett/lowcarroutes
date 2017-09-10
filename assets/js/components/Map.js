import axios from 'axios';
import SpeedBump from "./SpeedBump";

class Map {
    options = {
        zoom: 12,
        pitch: 0,
        bearing: 0,
        directions: {
            ribbon: {
                showTraffic: false,
            },
        }

    };
    speedbumps = [];
    constructor(MAPQUEST_APIKEY, id, route)
    {
        if(typeof MAPQUEST_APIKEY === 'undefined' || typeof id === 'undefined' || typeof route === 'undefined')
        {
            throw new Error('"MAPQUEST_APIKEY", "id" and "route" are required.');
        }
        this.mapquest_apikey = MAPQUEST_APIKEY;
        this.id = id;
        this.element = $('#'+this.id);
        this.route = route;
        this.loadSpeedBumps();
    }
    loadSpeedBumps()
    {
        let Map = this;
        axios.get(this.route)
            .then(function (response) {
                console.log('response', response);
                for(let data of response.data)
                {
                    console.log('data', data);
                    Map.speedbumps.push(new SpeedBump(data));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getOptions/* istanbul ignore next */()
    {
        return this.options;
    }
    getOption(key)
    {
        if(key in this.options)
        {
            return this.options[key];
        }
    }
    setCenter(center)
    {
        if(!Array.isArray(center))
        {
            throw new Error('"center" must be an array.');
        }
        if(center.length !== 2)
        {
            throw new Error('"center" array needs exaclty 2 values.');
        }
        for(let coordinate of center)
        {
            let val = parseFloat(coordinate);
            if(isNaN(val))
            {
                throw new Error('"center" array has non-float values.');
            }
        }
        this.options.center = center;
    }
    setZoom(zoom)
    {
        if (typeof zoom !== 'number') {
            throw new Error('"zoom" must be a number.');
        }
        this.options.zoom = zoom;
    }
    setPitch(pitch)
    {
        if (typeof pitch !== 'number') {
            throw new Error('"pitch" must be a number.');
        }
        this.options.pitch = pitch;
    }
    setBearing(bearing)
    {
        if (typeof bearing !== 'number') {
            throw new Error('"bearing" must be a number.');
        }
        this.options.bearing = bearing;
    }
    setStart(start)
    {
        this.start = start;
    }
    setDestination(destination)
    {
        this.destination = destination;
    }
    getRoute()
    {
        if(typeof this.start === 'undefined' || typeof this.destination === 'undefined')
        {
            throw new Error('You are not allowed to call "getRoute()" when there is no start and destination point.');
        }
        return [this.start, this.destination];
    }
    load/* istanbul ignore next */()
    {
        this.map = new mqgl.Map(this.id, this.mapquest_apikey, this.options);
        if(this.start && this.destination)
        {
            this.createRoute();
        }
    }
    fitBounds/* istanbul ignore next */()
    {
        this.map.fitBounds();
    }
    createRoute/* istanbul ignore next */()
    {
        let Map = this;
        this.map.load( () => {
            Map.map.directions.route(Map.getRoute())
                .then( data => {
                    console.log('data', data);
                    Map.fitBounds();
                });
        });
    }
    hide/* istanbul ignore next */()
    {
        this.element.hide();
    }
    show/* istanbul ignore next */()
    {
        this.element.show();
    }
    disableTrafic/* istanbul ignore next */()
    {
        /*directions: {
            ribbon: {
                showTraffic: false
            }
        }*/
    }
}

export {Map as Map};
export default Map;