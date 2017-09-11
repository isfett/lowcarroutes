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
        },
    };
    speedbumps = [];
    suffix_directions_id="_directions";
    constructor(MAPQUEST_APIKEY, id, internal_api_route)
    {
        if(typeof MAPQUEST_APIKEY === 'undefined' || typeof id === 'undefined' || typeof internal_api_route === 'undefined')
        {
            throw new Error('"MAPQUEST_APIKEY", "id" and "internal_api_route" are required.');
        }
        this.mapquest_apikey = MAPQUEST_APIKEY;
        this.id = id;
        this.element = $('#'+this.id);
        this.directions_id = id+this.suffix_directions_id;
        this.directions_element = $('#'+this.directions_id);
        this.internal_api_route = internal_api_route;
    }
    loadSpeedBumps()
    {
        let Map = this;
        return axios.get(this.internal_api_route);
        axios.get(this.internal_api_route)
            .then(function (response) {
                for(let data of response.data)
                {
                    Map.speedbumps.push(new SpeedBump(data));
                }
                /* instanbul ignore next */
                if(this.start && this.destination)
                {
                    Map.createRoute();
                }
                done(response);
            })
            .catch(function (error) {
                console.log(error);
                done(error);
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
        this.loadSpeedBumps();
    }
    fitBounds/* istanbul ignore next */()
    {
        this.map.fitBounds();
    }
    getAvoidLinkIds()
    {
        let ids = [];
        for(let speedbump of this.speedbumps)
        {
            ids.push(speedbump.getPoint().getLinkId());
        }
        return ids;
    }
    createRoute/* istanbul ignore next */()
    {
        let Map = this;
        this.map.load( () => {
            Map.map.directions.route(Map.getRoute(),{
                locale:'de_DE',
                mustAvoidLinkIds: Map.getAvoidLinkIds(),
                showTraffic: true,
            })
                .then( data => {
                    Map.fitBounds();
                    Map.showDirections(data)
                });
        });
    }
    showDirections(data)
    {
        let html = '';
        for(let leg of data.route.legs[0].maneuvers)
        {
            html+=leg.narrative+'<br>';
        }
        this.directions_element.html(html);
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