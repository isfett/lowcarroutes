var $ = require('jquery');

require('bootstrap-sass');

import { readonly } from 'core-decorators';

import Map from "./components/Map";

if($('#map').size())
{
    let map = new Map(MAPQUEST_APIKEY,'map',API_PATHS.speedbump);
    map.setCenter([-74.005900, 40.712800]);
    map.setZoom(12);
    map.setPitch(60);
    map.setStart('350 5th Ave, New York, NY 10118');
    map.setDestination('One Liberty Plaza, New York, NY 10006');
    map.load();
}
