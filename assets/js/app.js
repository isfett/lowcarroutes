let $ = jQuery = require('jquery');

require('bootstrap-sass');

import { readonly } from 'core-decorators';

import Map from "./components/Map";
import Heart from "./components/Heart";

if(jQuery('#map').length > 0)
{
    let map = new Map(MAPQUEST_APIKEY,'map',API_PATHS.speedbump);
    map.setCenter([10.082316,50.229236]);
    map.setZoom(16);
    map.setPitch(40);
    map.setStart('Kreuzweg 1, 97688 Bad Kissingen');
    map.setDestination('Brunngasse 8, 97720 Nüdlingen');
    map.load();
}

if(jQuery('.toggle-heart').length > 0)
{
    jQuery('.toggle-heart').each(function(index,element){
        let heart = new Heart(jQuery(element).attr('id'), API_PATHS.likes);
    })
}