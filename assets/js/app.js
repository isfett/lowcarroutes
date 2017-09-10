let $ = jQuery = require('jquery');

require('bootstrap-sass');

import { readonly } from 'core-decorators';

import Map from "./components/Map";

if(1)
{
    let map = new Map(MAPQUEST_APIKEY,'map',API_PATHS.speedbump);
    map.setCenter([-74.005900, 40.712800]);
    map.setZoom(12);
    map.setPitch(60);
    map.setStart('Kreuzweg 1, 97688 Bad Kissingen');
    map.setDestination('Brunngasse 8, 97720 Nüdlingen');
    map.load();
}
