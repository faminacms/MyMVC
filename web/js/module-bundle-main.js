(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./app/js/themes/real-estate/main.js":[function(require,module,exports){
// COMMON
require('../../common/main');

// Essentials
require('../../../vendor/ui/js/main');

// Layout
require('../../../vendor/layout/js/main');

// Sidebar
require('../../../vendor/sidebar/js/main');

// Navbar
require('../../../vendor/navbar/js/main');

// Maps
window.initGoogleMaps = require('./_maps');

// Edit
require('./_edit');

// Cover
require('../../../vendor/social/js/_cover');

// Owl Carousel
require('../../../vendor/media/js/carousel/main');
},{"../../../vendor/layout/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/main.js","../../../vendor/media/js/carousel/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/main.js","../../../vendor/navbar/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/main.js","../../../vendor/sidebar/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/main.js","../../../vendor/social/js/_cover":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/social/js/_cover.js","../../../vendor/ui/js/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/main.js","../../common/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/common/main.js","./_edit":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/_edit.js","./_maps":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/_maps.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/common/main.js":[function(require,module,exports){
require('../components/forms/main');
require('../components/tables/main');
require('../components/other/_tooltip');
require('../components/other/_offcanvas');
require('../components/other/_ratings');
},{"../components/forms/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/main.js","../components/other/_offcanvas":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_offcanvas.js","../components/other/_ratings":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_ratings.js","../components/other/_tooltip":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_tooltip.js","../components/tables/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/main.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_datepicker.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Datepicker INIT
    $('.datepicker').datepicker();

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_minicolors.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Minicolors INIT
    $('.minicolors').each(function () {
        $(this).minicolors({
            control: $(this).attr('data-control') || 'hue',
            defaultValue: $(this).attr('data-defaultValue') || '',
            inline: $(this).attr('data-inline') === 'true',
            letterCase: $(this).attr('data-letterCase') || 'lowercase',
            opacity: $(this).attr('data-opacity'),
            position: $(this).attr('data-position') || 'bottom left',
            change: function (hex, opacity) {
                if (! hex) return;
                if (opacity) hex += ', ' + opacity;
                if (typeof console === 'object') {
                    console.log(hex);
                }
            },
            theme: 'bootstrap'
        });
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_progress-bars.js":[function(require,module,exports){
(function ($) {

    // Progress Bar Animation
    $('.progress-bar').each(function () {
        $(this).width($(this).attr('aria-valuenow') + '%');
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_selectpicker.js":[function(require,module,exports){
(function ($) {
    "use strict";
    $(function () {
        $('.selectpicker').each(function(){
            $(this).selectpicker({
                width: $(this).data('width') || '100%'
            });
        });
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_slider.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $('[data-slider="default"]').slider();

    $('[data-slider="formatter"]').slider({
        formatter: function (value) {
            return 'Current value: ' + value;
        }
    });

    $('[data-on-slide]').on("slide", function (slideEvt) {
        $($(this).attr('data-on-slide')).text(slideEvt.value);
    });

    $('.slider-handle').html('<i class="fa fa-bars fa-rotate-90"></i>');

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/main.js":[function(require,module,exports){
require('./_progress-bars');
require('./_slider');
require('./_selectpicker');
require('./_datepicker');
require('./_minicolors');
},{"./_datepicker":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_datepicker.js","./_minicolors":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_minicolors.js","./_progress-bars":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_progress-bars.js","./_selectpicker":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_selectpicker.js","./_slider":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/forms/_slider.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_offcanvas.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // OffCanvas
    $('[data-toggle="offcanvas"]').click(function () {
        $('.row-offcanvas').toggleClass('active');
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_ratings.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Ratings
    $('.rating span.star').on('click', function () {
        var total = $(this).parent().children().length;
        var clickedIndex = $(this).index();
        $('.rating span.star').removeClass('filled');
        for (var i = clickedIndex; i < total; i ++) {
            $('.rating span.star').eq(i).addClass('filled');
        }
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/other/_tooltip.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Tooltip
    $("body").tooltip({selector: '[data-toggle="tooltip"]', container: "body"});

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_check-all.js":[function(require,module,exports){
(function ($) {
    "use strict";

    // Table Checkbox All
    $('#checkAll').on('click', function (e) {
        $(this).closest('table').find('td input:checkbox').prop('checked', this.checked);
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_datatables.js":[function(require,module,exports){
(function ($) {

    // Datatables
    $('#data-table').dataTable();

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/main.js":[function(require,module,exports){
require('./_datatables');
require('./_check-all');
},{"./_check-all":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_check-all.js","./_datatables":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/components/tables/_datatables.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/_edit.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var find = function (container, location, marker, markerData) {

        var eventData = $.extend({}, {marker: marker}, markerData),
            state = '',
            country = '',
            address = '';

        container.gmap('search', {'location': location}, function (results, status) {

            if (status === 'OK') {
                address = results[ 0 ].formatted_address;
                $.each(results[ 0 ].address_components, function (i, v) {
                    if (v.types[ 0 ] == "administrative_area_level_1" || v.types[ 0 ] == "administrative_area_level_2") {
                        state = v.long_name;
                    } else if (v.types[ 0 ] == "country") {
                        country = v.long_name;
                    }
                });
                eventData = $.extend({}, eventData, {state: state, country: country, address: address});
            }
            $(document).trigger('map.marker.find', eventData);

        });

    };

    $(document).on('map.init', function (event, data) {

        if (data.container.data('id') == 'map-edit') {

            var map = data,
                markers = data.container.gmap('get', 'markers'),
                markerOptions = {
                    "draggable": true
                },
                markerData = {
                    "open": true,
                    "template": "tpl-edit",
                    "icon": "building-01"
                };

            google.maps.event.addListener(data.map, 'click', function (event) {

                markerData = $.extend({}, markerData, {"latLng": event.latLng});

                data.addMarker(markers.length, markerData, markerOptions);

            });

            google.maps.event.addListener(map.iw.window, 'domready', function () {

                $('#map-delete-marker').on('click', function (e) {
                    e.stopPropagation();
                    var id = $(this).data('id');
                    map.iw.close(id);
                    markers[ id ].setMap(null);
                });

            });

            $(document).on('map.marker.init', function (event, data) {

                if (typeof data.markerData.open !== 'undefined' && data.markerData.open === true) {
                    find(map.container, data.markerData.latLng, data.markerInst, data.markerData);
                }

                google.maps.event.addListener(data.markerInst, 'dragend', function (e) {
                    find(map.container, e.latLng, this, data.markerData);
                });

                google.maps.event.addListener(data.markerInst, 'click', function (e) {
                    find(map.container, e.latLng, this, data.markerData);
                });

            });

            $(document).on('map.marker.find', function (event, data) {

                data.marker.setTitle(data.address);
                map.iw.open(data.marker.get('id'), data);

            });

        }

    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/_library.js":[function(require,module,exports){
module.exports = function () {

    var centerWindow = function (container, map, data) {

        if (data.lat && data.lng) {

            container.gmap('option', 'center', new google.maps.LatLng(data.lat, data.lng));

            map.panBy(0, -170);

            return true;

        }
        return false;
    };

    var centerMap = function (container, data) {

        if (data && data.length === 2) {

            container.gmap('option', 'center', new google.maps.LatLng(data[ 0 ], data[ 1 ]));

            return true;

        }
        return false;
    };

    var resize = function (container, map, windowData, mapData) {

        if (typeof google == 'undefined') return;

        google.maps.event.trigger(map, 'resize');

        if (! centerMap(container, mapData)) centerWindow(container, map, windowData);

    };

    return {
        centerWindow: centerWindow,
        centerMap: centerMap,
        resize: resize
    };

};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/_maps.js":[function(require,module,exports){
function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' +
    'callback=initGoogleMaps';
    document.body.appendChild(script);
}

window.onload = loadScript;

function initScripts() {
    var $scripts = [
        "js/plugins/maps_google/jquery-ui-map/ui/jquery.ui.map.js",
        "js/plugins/maps_google/jquery-ui-map/ui/jquery.ui.map.extensions.js",
        "js/plugins/maps_google/jquery-ui-map/ui/jquery.ui.map.services.js",
        "js/plugins/maps_google/jquery-ui-map/ui/jquery.ui.map.microdata.js",
        "js/plugins/maps_google/jquery-ui-map/ui/jquery.ui.map.microformat.js",
        "js/plugins/maps_google/jquery-ui-map/ui/jquery.ui.map.overlays.js",
        "js/plugins/maps_google/jquery-ui-map/ui/jquery.ui.map.rdfa.js",
        "js/plugins/maps_google/jquery-ui-map/addons/infobox_packed.js"
    ];

    $.each($scripts, function (k, v) {
        if ($('[src="' + v + '"]').length) return true;
        var scriptNode = document.createElement('script');

        scriptNode.src = v;
        $('head').prepend($(scriptNode));
    });
}

module.exports = function () {
    initScripts();

    /*
     * Real Estate
     */

    var container = $('#google-fs-realestate');

    if (container.length) {

        var options = {
            mapZoomPosition: container.data('zoomPosition') || "TOP_LEFT",
            mapZoom: container.data('zoom') || 16,
            mapStyle: container.data('style') || "light-grey",
            mapType: container.data('type') || "ROADMAP",
            file: container.data('file'),
            center: container.data('center') ? container.data('center').split(",") : false
        };

        var library = require('./_library.js')();

        // Holds google maps styles
        var styles = {
            "light-grey": require('./gmaps-styles/_light-grey.js')
        };

        // provide a default object for data collected from the currently opened infoWindow
        var infoWindowData = {
            lat: false,
            lng: false
        };

        // Process the infoWindow content via Handlebars templates
        var infoWindowContent = function (marker) {
            var source = $("#" + marker.template).html();
            var template = Handlebars.compile(source);
            return template(marker);
        };

        var infoWindowOpen = function (i, marker) {
            /*
             InfoWindow: jQuery UI Maps
             container.gmap('openInfoWindow', {
             'content': infoWindowContent(marker),
             'maxWidth': 240
             }, markerInst);
             */

            var markerInst = container.gmap('get', 'markers')[ i ];

            /* InfoWindow: Google Maps API Standard */
            infoWindow.setContent(infoWindowContent(marker));
            infoWindow.open(map, markerInst);
            infoWindow.isOpen = i;

            infoWindowData = {
                lat: marker.latitude,
                lng: marker.longitude
            };
        };

        var infoWindowClose = function (i) {
            if (typeof infoWindow.isOpen != 'undefined' && infoWindow.isOpen === i) {
                infoWindow.close();
                infoWindow.isOpen = false;
                return true;
            }
            return false;
        };

        /* InfoWindow: Google Maps API Standard
         var infoWindow = new google.maps.InfoWindow({
         maxWidth: 240
         });
         */

        /* InfoBox */
        var infoWindow = new InfoBox({
            maxWidth: 240,
            alignBottom: true
        });

        var addMarker = function (i, marker, options) {
            var iconBase = 'images/markers/';
            var position = typeof marker.latLng !== 'undefined' ? marker.latLng : false;
            if (! position && typeof marker.latitude !== 'undefined' && typeof marker.longitude !== 'undefined') position = new google.maps.LatLng(marker.latitude, marker.longitude);
            if (! position) return false;

            var markerOptions = {
                "id": i,
                "position": position,
                "draggable": true,
                "icon": iconBase + marker.icon + ".png"
            };

            if (typeof options == 'object') markerOptions = $.extend({}, markerOptions, options);

            var open = typeof marker.open !== 'undefined' && marker.open === true;

            container.gmap('addMarker', markerOptions);

            var markerInst = container.gmap('get', 'markers')[ i ];

            google.maps.event.addListener(markerInst, 'click', function () {
                if (! infoWindowClose(i)) {
                    infoWindowOpen(i, marker);
                    library.centerWindow(container, map, infoWindowData);
                }
            });

            google.maps.event.addListener(markerInst, 'dragend', function () {
                var lat = markerInst.getPosition().lat();
                var lng = markerInst.getPosition().lng();
                console.log('"latitude": ' + lat + ', "longitude": ' + lng);
            });

            var markerData = $.extend({}, marker, {
                "id": i,
                "latLng": new google.maps.LatLng(marker.latitude, marker.longitude)
            });

            $(document).trigger('map.marker.init', {markerInst: markerInst, markerData: markerData});

            if (open) infoWindowOpen(i, marker);

            return markerInst;
        };

        container.gmap(
            {
                'zoomControl': true,
                'zoomControlOptions': {
                    'style': google.maps.ZoomControlStyle.SMALL,
                    'position': google.maps.ControlPosition[ options.mapZoomPosition ]
                },
                'panControl': false,
                'streetViewControl': false,
                'mapTypeControl': false,
                'overviewMapControl': false,
                'scrollwheel': false,
                'mapTypeId': google.maps.MapTypeId[ options.mapType ],
                'zoom': options.mapZoom,
                'styles': styles[ options.mapStyle ]
            })
            .bind('init', function () {

                if (options.file) {
                    $.getJSON(options.file, function (data) {
                        $.each(data.markers, function (i, marker) {
                            addMarker(i, marker);
                        });
                        setTimeout(function () {
                            library.resize(container, map, infoWindowData, options.center);
                        }, 200);
                    });
                }
                else {
                    library.centerMap(container, options.center);
                }

                $(document).trigger('map.init', {
                    container: container,
                    map: map,
                    options: options,
                    addMarker: addMarker,
                    library: library,
                    iw: {
                        window: infoWindow,
                        content: infoWindowContent,
                        open: infoWindowOpen,
                        close: infoWindowClose
                    }
                });

                google.maps.event.addListener(infoWindow, 'domready', function () {
                    var iw = $('.infoBox');
                    infoWindow.setOptions({
                        pixelOffset: new google.maps.Size(- Math.abs(iw.width() / 2), - 45)
                    });
                });
            });

        var map = container.gmap('get', 'map');

        $(document).on('sidebar.shown sidebar.hidden', function (event, data) {
            if (data.target == '#sidebar-map' || data.target == "#sidebar-edit") {
                library.resize(container, map, infoWindowData, options.center);
            }
        });

        $(document).on('sidebar.shown', function (event, data) {
            if (data.target == "#sidebar-edit") {
                $('#toggle-sidebar-edit').addClass('active');
            }
        });

        $(document).on('sidebar.hidden', function (event, data) {
            if (data.target == "#sidebar-edit") {
                $('#toggle-sidebar-edit').removeClass('active');
            }
        });

        var t;
        $(window).on('debouncedresize', function () {
            clearTimeout(t);
            t = setTimeout(function () {
                library.resize(container, map, infoWindowData, options.center);
            }, 100);
        });
    }

};
},{"./_library.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/_library.js","./gmaps-styles/_light-grey.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/gmaps-styles/_light-grey.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/js/themes/real-estate/gmaps-styles/_light-grey.js":[function(require,module,exports){
module.exports = [ {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [ {"color": "#e9e9e9"}, {"lightness": 17} ]
}, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [ {"color": "#f5f5f5"}, {"lightness": 20} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 17} ]
}, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2} ]
}, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 18} ]
}, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [ {"color": "#ffffff"}, {"lightness": 16} ]
}, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [ {"color": "#f5f5f5"}, {"lightness": 21} ]
}, {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [ {"color": "#dedede"}, {"lightness": 21} ]
}, {
    "elementType": "labels.text.stroke",
    "stylers": [ {"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16} ]
}, {
    "elementType": "labels.text.fill",
    "stylers": [ {"saturation": 36}, {"color": "#333333"}, {"lightness": 40} ]
}, {"elementType": "labels.icon", "stylers": [ {"visibility": "off"} ]}, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [ {"color": "#f2f2f2"}, {"lightness": 19} ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [ {"color": "#fefefe"}, {"lightness": 20} ]
}, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [ {"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2} ]
} ];
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_async.js":[function(require,module,exports){
function contentLoaded(win, fn) {

    var done = false, top = true,

        doc = win.document,
        root = doc.documentElement,
        modern = doc.addEventListener,

        add = modern ? 'addEventListener' : 'attachEvent',
        rem = modern ? 'removeEventListener' : 'detachEvent',
        pre = modern ? '' : 'on',

        init = function (e) {
            if (e.type == 'readystatechange' && doc.readyState != 'complete') return;
            (e.type == 'load' ? win : doc)[ rem ](pre + e.type, init, false);
            if (! done && (done = true)) fn.call(win, e.type || e);
        },

        poll = function () {
            try {
                root.doScroll('left');
            } catch (e) {
                setTimeout(poll, 50);
                return;
            }
            init('poll');
        };

    if (doc.readyState == 'complete') fn.call(win, 'lazy');
    else {
        if (! modern && root.doScroll) {
            try {
                top = ! win.frameElement;
            } catch (e) {
            }
            if (top) poll();
        }
        doc[ add ](pre + 'DOMContentLoaded', init, false);
        doc[ add ](pre + 'readystatechange', init, false);
        win[ add ](pre + 'load', init, false);
    }
}

module.exports = function(urls, callback) {

    var asyncLoader = function (urls, callback) {

        urls.foreach(function (i, file) {
            loadCss(file);
        });

        // checking for a callback function
        if (typeof callback == 'function') {
            // calling the callback
            contentLoaded(window, callback);
        }
    };

    var loadCss = function (url) {
        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = url;
        document.getElementsByTagName('head')[ 0 ].appendChild(link);
    };

    // simple foreach implementation
    Array.prototype.foreach = function (callback) {
        for (var i = 0; i < this.length; i ++) {
            callback(i, this[ i ]);
        }
    };

    asyncLoader(urls, callback);

};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_breakpoints.js":[function(require,module,exports){
(function ($) {

    $(window).setBreakpoints({
        distinct: true,
        breakpoints: [ 320, 480, 768, 1024 ]
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_gridalicious.js":[function(require,module,exports){
(function($){

    $('[data-toggle*="gridalicious"]').each(function () {
        $(this).gridalicious({
            gutter: $(this).data('gutter') || 15,
            width: $(this).data('width') || 370,
            selector: '> div',
            animationOptions: {
                complete: function(){
                    $(window).trigger('resize');
                }
            }
        });
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_scrollable.js":[function(require,module,exports){
(function ($) {

    var skin = require('./_skin')();

    $('[data-scrollable]').niceScroll({
        cursorborder: 0,
        cursorcolor: config.skins[ skin ][ 'primary-color' ],
        horizrailenabled: false
    });

    $('.st-content-inner').niceScroll({
        cursorborder: 0,
        cursorcolor: config.skins[ skin ][ 'primary-color' ],
        horizrailenabled: false
    });

    $('[data-scrollable]').getNiceScroll().resize();

}(jQuery));
},{"./_skin":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skins.js":[function(require,module,exports){
var asyncLoader = require('./_async');

(function ($) {

    var changeSkin = function () {
        var skin = $.cookie("skin");
        if (typeof skin != 'undefined') {
            asyncLoader([ 'css/' + skin + '.min.css' ], function () {
                $('[data-skin]').removeProp('disabled').parent().removeClass('loading');
            });
        }
    };

    $('[data-skin]').on('click', function () {

        if ($(this).prop('disabled')) return;

        $('[data-skin]').prop('disabled', true);

        $(this).parent().addClass('loading');

        $.cookie("skin", $(this).data('skin'));

        changeSkin();

    });

    var skin = $.cookie("skin");

    if (typeof skin != 'undefined' && skin != 'default') {
        changeSkin();
    }

})(jQuery);
},{"./_async":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_async.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/main.js":[function(require,module,exports){
require('./_breakpoints.js');
require('./_gridalicious.js');
require('./_scrollable.js');
require('./_skins');
},{"./_breakpoints.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_breakpoints.js","./_gridalicious.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_gridalicious.js","./_scrollable.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_scrollable.js","./_skins":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skins.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/main.js":[function(require,module,exports){
require('./owl/main');
},{"./owl/main":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/main.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_default.js":[function(require,module,exports){
(function ($) {

    $(".owl-basic").each(function () {
        var c = $(this);
        $(this).owlCarousel({
            items: c.data('items') || 4,
            itemsDesktop: [ 1199, c.data('itemsDesktop') || 3 ],
            itemsDesktopSmall: [ 979, c.data('itemsDesktopSmall') || 3 ],
            afterUpdate: function () {
                $(window).trigger('resize');
            }
        });
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_mixed.js":[function(require,module,exports){
(function ($) {

    $(".owl-mixed").owlCarousel({
        items: 2,
        pagination: false,
        navigation: true,
        navigationText: [ '<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>' ],
        itemsDesktop: [ 1199, 2 ],
        itemsDesktopSmall: [ 979, 1 ],
        itemsTablet: [ 768, 1 ]
    });

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_preview.js":[function(require,module,exports){
(function ($) {
    var preview = $(".owl-preview");
    var thumb = $(".owl-thumb");

    preview.owlCarousel({
        singleItem: true,
        slideSpeed: 1000,
        pagination: false,
        afterAction: syncPosition,
        responsiveRefreshRate: 200,
        navigation: true,
        navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });

    thumb.owlCarousel({
        items: 5,
        itemsDesktop: [ 1199, 5 ],
        itemsDesktopSmall: [ 979, 4 ],
        itemsTablet: [ 768, 4 ],
        itemsMobile: [ 479, 3 ],
        pagination: false,
        navigation: true,
        responsiveRefreshRate: 100,
        afterInit: function (el) {
            el.find(".owl-item").eq(0).addClass("synced");
        }
    });

    function syncPosition(el) {
        var current = this.currentItem;
        $(".owl-thumb")
            .find(".owl-item")
            .removeClass("synced")
            .eq(current)
            .addClass("synced");
        if ($(".owl-thumb").data("owlCarousel") !== undefined) {
            center(current);
        }
    }

    $(".owl-thumb").on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).data("owlItem");
        preview.trigger("owl.goTo", number);
    });

    function center(number) {
        var thumbvisible = thumb.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for (var i in thumbvisible) {
            if (num === thumbvisible[ i ]) {
                found = true;
            }
        }

        if (found === false) {
            if (num > thumbvisible[ thumbvisible.length - 1 ]) {
                thumb.trigger("owl.goTo", num - thumbvisible.length + 2);
            } else {
                if (num - 1 === - 1) {
                    num = 0;
                }
                thumb.trigger("owl.goTo", num);
            }
        } else if (num === thumbvisible[ thumbvisible.length - 1 ]) {
            thumb.trigger("owl.goTo", thumbvisible[ 1 ]);
        } else if (num === thumbvisible[ 0 ]) {
            thumb.trigger("owl.goTo", num - 1);
        }
    }

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/main.js":[function(require,module,exports){
require('./_default');
require('./_mixed');
require('./_preview');
},{"./_default":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_default.js","./_mixed":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_mixed.js","./_preview":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/media/js/carousel/owl/_preview.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/_switch.js":[function(require,module,exports){
(function ($) {
    $("[name='switch-checkbox']").bootstrapSwitch({
        offColor: 'danger'
    });
})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/main.js":[function(require,module,exports){
require('./_switch');
},{"./_switch":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/navbar/js/_switch.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_breakpoints.js":[function(require,module,exports){
(function ($) {
    "use strict";

    var restore = function () {
            $("html").addClass('show-sidebar');
            $('.sidebar.sidebar-visible-desktop').not(':visible').each(function () {
                var options = sidebar.options($(this));
                sidebar.open($(this).attr('id'), options);
            });
        },
        hide = function () {
            $("html").removeClass('show-sidebar');
            $('.sidebar:visible').each(function () {
                sidebar.close($(this).attr('id'));
            });
        };

    $(window).bind('enterBreakpoint768', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint1024', function () {
        if (! $('.sidebar').length) return;
        if ($('.hide-sidebar').length) return;
        restore();
    });

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar').length) return;
        hide();
    });

    if ($(window).width() <= 480) {
        if (! $('.sidebar').length) return;
        hide();
    }

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_collapsible.js":[function(require,module,exports){
(function($){

    require('./_transform_collapse')();

})(jQuery);
},{"./_transform_collapse":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_collapse.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_dropdown.js":[function(require,module,exports){
(function ($) {

    var transform_dd = require('./_transform_dropdown'),
        transform_collapse = require('./_transform_collapse');

    transform_dd();

    $(window).bind('enterBreakpoint480', function () {
        if (! $('.sidebar[data-type="dropdown"]').length) return;
        $('.sidebar[data-type="dropdown"]').attr('data-type', 'collapse').attr('data-transformed', true);
        transform_collapse();
    });

    function make_dd() {
        if (! $('.sidebar[data-type="collapse"][data-transformed]').length) return;
        $('.sidebar[data-type="collapse"][data-transformed]').attr('data-type', 'dropdown').attr('data-transformed', true);
        transform_dd();
    }

    $(window).bind('enterBreakpoint768', make_dd);

    $(window).bind('enterBreakpoint1024', make_dd);

})(jQuery);
},{"./_transform_collapse":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_collapse.js","./_transform_dropdown":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_dropdown.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_options.js":[function(require,module,exports){
module.exports = function (sidebar) {
    return {
        "transform-button": sidebar.data('transformButton') === true,
        "transform-button-icon": sidebar.data('transformButtonIcon') || 'fa-ellipsis-h'
    };
};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-menu.js":[function(require,module,exports){
(function ($) {

    var sidebars = $('.sidebar');

    sidebars.each(function () {

        var sidebar = $(this);
        var options = require('./_options')(sidebar);

        if (options[ 'transform-button' ]) {
            var button = $('<button type="button"></button>');

            button
                .attr('data-toggle', 'sidebar-transform')
                .addClass('btn btn-default')
                .html('<i class="fa ' + options[ 'transform-button-icon' ] + '"></i>');

            sidebar.find('.sidebar-menu').append(button);
        }
    });

}(jQuery));
},{"./_options":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_options.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-toggle.js":[function(require,module,exports){
(function ($) {
    /*jshint browser: true, strict: false */

    $('#subnav').collapse({'toggle': false});

    $('[data-toggle="sidebar-transform"]').on('click', function () {
        $('body').toggleClass('sidebar-mini');
        if ($('body').is('.sidebar-mini')) $('.sidebar-menu .collapse').collapse('hide');
        $('#dropdown-temp').hide();
        $('.sidebar-menu .open').removeClass('open');
    });

})(jQuery);

(function ($) {

    function mobilecheck() {
        var check = false;
        (function (a) {
            if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    (function () {

        var defaults = {
                effect: 'st-effect-1',
                duration: 550,
                overlay: false
            },

            container = $('.st-container'),

            eventtype = mobilecheck() ? 'touchstart' : 'click',

            getLayoutClasses = function (sidebar, direction) {

                var layoutClasses = sidebar.data('layoutClasses');

                if (! layoutClasses) {
                    var toggleLayout = sidebar.data('toggleLayout');
                    if (typeof toggleLayout == 'string') {
                        layoutClasses = toggleLayout.split(",").join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                        return layoutClasses;
                    }

                    var match = new RegExp('sidebar-' + direction + '(\\S+)', 'ig');
                    layoutClasses = $('html').get(0).className.match(match);
                    if (layoutClasses !== null && layoutClasses.length) {
                        layoutClasses = layoutClasses.join(" ");
                        sidebar.data('layoutClasses', layoutClasses);
                    }
                }

                return layoutClasses;

            },

            getSidebarDataOptions = function(sidebar){

                return {
                    effect: sidebar.data('effect'),
                    overlay: sidebar.data('overlay')
                };

            },

            animating = function () {

                if ($('body').hasClass('animating')) return true;
                $('body').addClass('animating');

                setTimeout(function () {
                    $('body').removeClass('animating');
                }, defaults.duration);

                return false;

            },

            reset = function (id, options) {

                var target = typeof id !== 'undefined' ? '#' + id : container.data('stMenuTarget'),
                    sidebar = $(target);

                if (! sidebar.length) return false;
                if (! sidebar.is(':visible')) return false;
                if (sidebar.hasClass('sidebar-closed')) return false;

                var effect = typeof options !== 'undefined' && options.effect ? options.effect : container.data('stMenuEffect'),
                    direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.hide', eventData);

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .removeClass('active')
                    .closest('li')
                    .removeClass('active');

                $('html').addClass(htmlClass);
                sidebar.addClass(effect);
                container.addClass(effect);

                container.removeClass('st-menu-open st-pusher-overlay');

                setTimeout(function () {
                    $('html').removeClass(htmlClass);
                    if (toggleLayout) $('html').removeClass(layoutClasses);
                    sidebar.removeClass(effect);
                    container.get(0).className = 'st-container'; // clear
                    sidebar.addClass('sidebar-closed').hide();
                    $(document).trigger('sidebar.hidden', eventData);
                }, defaults.duration);

            },

            open = function (target, options) {

                var sidebar = $(target);
                if (! sidebar.length) return false;

                // on mobile, allow only one sidebar to be open at the same time
                if ($(window).width() < 768 && container.hasClass('st-menu-open')) {
                    return reset();
                }

                $('[data-toggle="sidebar-menu"][href="' + target + '"]')
                    .addClass('active')
                    .closest('li')
                    .addClass('active');

                var effect = options.effect,
                    overlay = options.overlay;

                var direction = sidebar.is('.left') ? 'l' : 'r',
                    size = sidebar.get(0).className.match(/sidebar-size-(\S+)/).pop(),
                    htmlClass = 'st-effect-' + direction + size,
                    toggleLayout = sidebar.data('toggleLayout'),
                    layoutClasses = getLayoutClasses(sidebar, direction),
                    eventData = {
                        sidebar: sidebar,
                        target: target
                    };

                $(document).trigger('sidebar.show', eventData);

                $('html').addClass(htmlClass);
                sidebar.show().removeClass('sidebar-closed');

                container.data('stMenuEffect', effect);
                container.data('stMenuTarget', target);

                sidebar.addClass(effect);
                container.addClass(effect);
                if (overlay) container.addClass('st-pusher-overlay');

                setTimeout(function () {
                    container.addClass('st-menu-open');
                    sidebar.find('[data-scrollable]').getNiceScroll().resize();
                    $(window).trigger('resize');
                }, 25);

                setTimeout(function () {
                    if (toggleLayout) $('html').addClass(layoutClasses);
                    $(document).trigger('sidebar.shown', eventData);
                }, defaults.duration);

            },

            toggle = function (e) {

                e.stopPropagation();
                e.preventDefault();

                var a = animating();
                if (a) return false;

                var button = $(this),
                    target = button.attr('href'),
                    sidebar;

                if (target.length > 3) {
                    sidebar = $(target);
                    if (! sidebar.length) return false;
                }

                if (target.length < 3) {
                    var currentActiveElement = $('[data-toggle="sidebar-menu"]').not(this).closest('li').length ? $('[data-toggle="sidebar-menu"]').not(this).closest('li') : $('[data-toggle="sidebar-menu"]').not(this);
                    var activeElement = $(this).closest('li').length ? $(this).closest('li') : $(this);

                    currentActiveElement.removeClass('active');
                    activeElement.addClass('active');

                    if ($('html').hasClass('show-sidebar')) activeElement.removeClass('active');

                    $('html').removeClass('show-sidebar');

                    if (activeElement.hasClass('active')) $('html').addClass('show-sidebar');
                    return;
                }

                var dataOptions = getSidebarDataOptions(sidebar),
                    buttonOptions = {};

                if (button.data('effect')) buttonOptions.effect = button.data('effect');
                if (button.data('overlay')) buttonOptions.overlay = button.data('overlay');

                var options = $.extend({}, defaults, dataOptions, buttonOptions);

                if (! sidebar.hasClass('sidebar-closed') && sidebar.is(':visible')) {
                    reset(sidebar.attr('id'), options);
                    return;
                }

                open(target, options);

            };

        $('body').on(eventtype, '[data-toggle="sidebar-menu"]', toggle);

        $(document).on('keydown', null, 'esc', function () {
            if (container.hasClass('st-menu-open')) {
                reset();
                return false;
            }
        });

        $('.sidebar').each(function(){
            var sidebar = $(this);

            /* Sidebar Toggle Bar */
            if (sidebar.data('toggleBar')) {
                var bar = $('<a></a>');
                bar.attr('href', '#' + sidebar.attr('id'))
                    .attr('data-toggle', 'sidebar-menu')
                    .addClass('sidebar-toggle-bar');

                sidebar.append(bar);
            }
        });

        window.sidebar = {

            open: function (id, options) {

                var a = animating();
                if (a) return false;

                options = $.extend({}, defaults, options);

                return open('#' + id, options);

            },

            close: function (id, options) {

                options = $.extend({}, defaults, options);

                return reset(id, options);

            },

            options: getSidebarDataOptions

        };

    })();

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_collapse.js":[function(require,module,exports){
module.exports = function () {
    var dd = $('.sidebar[data-type="collapse"]');

    if (dd.length) {

        $('.sidebar .sidebar-menu > li > a').off('mouseenter');
        $('.sidebar .sidebar-menu > li.dropdown > a').off('mouseenter');
        $('.sidebar .sidebar-menu > li > a').off('mouseenter');
        $('.sidebar .sidebar-menu > li > a').off('click');
        $('.sidebar').off('mouseleave');
        $('.sidebar .dropdown').off('mouseover');
        $('.sidebar .dropdown').off('mouseout');
        $('body').off('mouseout', '#dropdown-temp .dropdown');

        $('.sidebar ul.collapse').off('shown.bs.collapse');
        $('.sidebar ul.collapse').off('show.bs.collapse');
        $('.sidebar ul.collapse').off('hide.bs.collapse');
        $('.sidebar ul.collapse').off('hidden.bs.collapse');

        dd.find('#dropdown-temp').remove();

        dd.find('.hasSubmenu').removeClass('dropdown')
            .find('> ul').addClass('collapse').removeClass('dropdown-menu submenu-hide submenu-show')
            .end()
            .find('> a').attr('data-toggle', 'collapse');

        dd.find('.collapse').collapse({ 'toggle': false });

        $('.sidebar ul.collapse').on('shown.bs.collapse', function (e) {
            $('.sidebar [data-scrollable]').getNiceScroll().resize();
        });

        // Collapse
        $('.sidebar ul.collapse').on('show.bs.collapse', function (e) {
            e.stopPropagation();
            var parents = $(this).parents('ul:first').find('> li.open [data-toggle="collapse"]');
            if (parents.length) {
                parents.trigger('click');
            }
            $(this).parent().addClass("open");
        });

        $('.sidebar ul.collapse').on('hidden.bs.collapse', function (e) {
            e.stopPropagation();
            $(this).parent().removeClass("open");
        });
    }
};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_transform_dropdown.js":[function(require,module,exports){
module.exports = function () {
    var dd = $('.sidebar[data-type="dropdown"]');

    if (dd.length) {

        $('.sidebar ul.collapse')
            .off('shown.bs.collapse')
            .off('show.bs.collapse')
            .off('hidden.bs.collapse');

        dd.each(function () {
            var sidebar = $(this);
            var nice = sidebar.find('[data-scrollable]').getNiceScroll()[ 0 ];

            nice.scrollstart(function () {
                if (! sidebar.is('[data-type="dropdown"]')) return;
                sidebar.addClass('scrolling');
                sidebar.find('#dropdown-temp > ul > li').empty();
                sidebar.find('#dropdown-temp').hide();
                sidebar.find('.open').removeClass('open');
            });

            nice.scrollend(function () {
                if (! sidebar.is('[data-type="dropdown"]')) return;
                $.data(this, 'lastScrollTop', nice.getScrollTop());
                sidebar.removeClass('scrolling');
            });
        });

        dd.find('.hasSubmenu').addClass('dropdown').removeClass('open')
            .find('> ul').addClass('dropdown-menu').removeClass('collapse in').removeAttr('style')
            .end()
            .find('> a').removeClass('collapsed')
            .removeAttr('data-toggle');

        $('.sidebar[data-type="dropdown"] .sidebar-menu > li.dropdown > a').on('mouseenter', function () {
            if (! $(this).parent('.dropdown').is('.open') && ! $(this).closest('.sidebar').is('.scrolling')) {
                var p = $(this).parent('.dropdown'),
                    t = p.find('> .dropdown-menu').clone().removeClass('submenu-hide'),
                    sidebar = $(this).parents('.sidebar:first'),
                    m = sidebar.find('.sidebar-menu'),
                    c = sidebar.find('> #dropdown-temp');

                m.find('.open').removeClass('open');

                if (! c.length) {
                    c = $('<div/>').attr('id', 'dropdown-temp').appendTo(sidebar);
                    c.html('<ul><li></li></ul>');
                }

                c.show();
                c.find('.dropdown-menu').remove();
                c = c.find('> ul > li').css({overflow: 'visible'}).addClass('dropdown open');

                p.addClass('open');
                t.appendTo(c).css({
                    top: p.offset().top - c.offset().top,
                    left: '100%'
                }).show();

                if (sidebar.is('.right')) {
                    t.css({
                        left: 'auto',
                        right: '100%'
                    });
                }
            }
        });

        $('.sidebar[data-type="dropdown"] .sidebar-menu > li > a').on('mouseenter', function () {

            if (! $(this).parent().is('.dropdown')) {
                var sidebar = $(this).closest('.sidebar');
                sidebar.find('.open').removeClass('open');
                sidebar.find('#dropdown-temp').hide();
            }

        });

        $('.sidebar[data-type="dropdown"] .sidebar-menu > li > a').on('click', function (e) {
            if ($(this).parent().is('.dropdown')) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        $('.sidebar[data-type="dropdown"]').on('mouseleave', function () {
            $(this).find('#dropdown-temp').hide();
            $(this).find('.open').removeClass('open');
        });

        $('.sidebar[data-type="dropdown"] .dropdown').on('mouseover', function () {
            $(this).addClass('open').children('ul').removeClass('submenu-hide').addClass('submenu-show');
        }).on('mouseout', function () {
            $(this).children('ul').removeClass('.submenu-show').addClass('submenu-hide');
        });

        $('body').on('mouseout', '#dropdown-temp .dropdown', function () {
            $('.sidebar-menu .open').removeClass('.open');
        });
    }
};
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/main.js":[function(require,module,exports){
require('./_breakpoints');
require('./_sidebar-menu');
require('./_collapsible');
require('./_dropdown');
require('./_sidebar-toggle');
},{"./_breakpoints":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_breakpoints.js","./_collapsible":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_collapsible.js","./_dropdown":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_dropdown.js","./_sidebar-menu":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-menu.js","./_sidebar-toggle":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/sidebar/js/_sidebar-toggle.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/social/js/_cover.js":[function(require,module,exports){
(function ($) {
    "use strict";

    function height() {
        $('.cover.overlay').filter(':visible').not('[class*="height"]').each(function () {
            var t = $(this),
                i = t.find('img:first');

            t.height(i.height());
            $('.overlay-full', t).innerHeight(i.height());
        });
    }

    $(document).ready(height);
    $(window).on('load', height);

    var t;
    $(window).on("debouncedresize", function(){
        clearTimeout(t);
        t = setTimeout(height, 200);
    });

})(jQuery);

},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_show-hover.js":[function(require,module,exports){
(function ($) {

    var showHover = function () {
        $('[data-show-hover]').hide().each(function () {
            var self = $(this),
                parent = $(this).data('showHover');

            self.closest(parent).on('mouseover', function (e) {
                e.stopPropagation();
                self.show();
            }).on('mouseout', function () {
                self.hide();
            });
        });
    };

    showHover();

    window.showHover = showHover;

})(jQuery);
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_skin.js":[function(require,module,exports){
module.exports=require("/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js")
},{"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/layout/js/_skin.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tabs.js":[function(require,module,exports){
(function ($) {

    var skin = require('./_skin')();

    $('.tabbable .nav-tabs').each(function(){
        var tabs = $(this).niceScroll({
            cursorborder: 0,
            cursorcolor: config.skins[ skin ][ 'primary-color' ],
            horizrailenabled: true,
            oneaxismousemode: true
        });

        var _super = tabs.getContentSize;
        tabs.getContentSize = function() {
            var page = _super.call(tabs);
            page.h = tabs.win.height();
            return page;
        };
    });

    $('[data-scrollable]').getNiceScroll().resize();

    $('.tabbable .nav-tabs a').on('shown.bs.tab', function(e){
        var tab = $(this).closest('.tabbable');
        var target = $(e.target),
            targetPane = target.attr('href') || target.data('target');

        // refresh tabs with horizontal scroll
        tab.find('.nav-tabs').getNiceScroll().resize();

        // refresh [data-scrollable] within the activated tab pane
        $(targetPane).find('[data-scrollable]').getNiceScroll().resize();
    });

}(jQuery));
},{"./_skin":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_skin.js"}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tree.js":[function(require,module,exports){
(function ($) {

    var tree_glyph_options = {
        map: {
            checkbox: "fa fa-square-o",
            checkboxSelected: "fa fa-check-square",
            checkboxUnknown: "fa fa-check-square fa-muted",
            error: "fa fa-exclamation-triangle",
            expanderClosed: "fa fa-caret-right",
            expanderLazy: "fa fa-angle-right",
            expanderOpen: "fa fa-caret-down",
            doc: "fa fa-file-o",
            noExpander: "",
            docOpen: "fa fa-file",
            loading: "fa fa-refresh fa-spin",
            folder: "fa fa-folder",
            folderOpen: "fa fa-folder-open"
        }
    },
    tree_dnd_options = {
        autoExpandMS: 400,
            focusOnClick: true,
            preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
            preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
            dragStart: function(node, data) {
            /** This function MUST be defined to enable dragging for the tree.
             *  Return false to cancel dragging of node.
             */
            return true;
        },
        dragEnter: function(node, data) {
            /** data.otherNode may be null for non-fancytree droppables.
             *  Return false to disallow dropping on node. In this case
             *  dragOver and dragLeave are not called.
             *  Return 'over', 'before, or 'after' to force a hitMode.
             *  Return ['before', 'after'] to restrict available hitModes.
             *  Any other return value will calc the hitMode from the cursor position.
             */
            // Prevent dropping a parent below another parent (only sort
            // nodes under the same parent)
            /*
            if(node.parent !== data.otherNode.parent){
                return false;
            }
            // Don't allow dropping *over* a node (would create a child)
            return ["before", "after"];
            */
            return true;
        },
        dragDrop: function(node, data) {
            /** This function MUST be defined to enable dropping of items on
             *  the tree.
             */
            data.otherNode.moveTo(node, data.hitMode);
        }
    };

    // using default options
    $('[data-toggle="tree"]').each(function () {
        var extensions = [ "glyph" ];
        if (typeof $(this).attr('data-tree-dnd') !== "undefined") {
            extensions.push( "dnd" );
        }
        $(this).fancytree({
            extensions: extensions,
            glyph: tree_glyph_options,
            dnd: tree_dnd_options,
            clickFolderMode: 3,
            checkbox: typeof $(this).attr('data-tree-checkbox') !== "undefined" || false,
            selectMode: typeof $(this).attr('data-tree-select') !== "undefined" ? parseInt($(this).attr('data-tree-select')) : 2
        });
    });

}(jQuery));
},{}],"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/main.js":[function(require,module,exports){
require('./_tabs');
require('./_tree');
require('./_show-hover');
},{"./_show-hover":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_show-hover.js","./_tabs":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tabs.js","./_tree":"/persistent/var/www/html/themekit-3.6.0-rc1/dev/app/vendor/ui/js/_tree.js"}]},{},["./app/js/themes/real-estate/main.js"])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvanMvdGhlbWVzL3JlYWwtZXN0YXRlL21haW4uanMiLCJhcHAvanMvY29tbW9uL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fZGF0ZXBpY2tlci5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL19taW5pY29sb3JzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX3Byb2dyZXNzLWJhcnMuanMiLCJhcHAvanMvY29tcG9uZW50cy9mb3Jtcy9fc2VsZWN0cGlja2VyLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvZm9ybXMvX3NsaWRlci5qcyIsImFwcC9qcy9jb21wb25lbnRzL2Zvcm1zL21haW4uanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fb2ZmY2FudmFzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvb3RoZXIvX3JhdGluZ3MuanMiLCJhcHAvanMvY29tcG9uZW50cy9vdGhlci9fdG9vbHRpcC5qcyIsImFwcC9qcy9jb21wb25lbnRzL3RhYmxlcy9fY2hlY2stYWxsLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL19kYXRhdGFibGVzLmpzIiwiYXBwL2pzL2NvbXBvbmVudHMvdGFibGVzL21haW4uanMiLCJhcHAvanMvdGhlbWVzL3JlYWwtZXN0YXRlL19lZGl0LmpzIiwiYXBwL2pzL3RoZW1lcy9yZWFsLWVzdGF0ZS9fbGlicmFyeS5qcyIsImFwcC9qcy90aGVtZXMvcmVhbC1lc3RhdGUvX21hcHMuanMiLCJhcHAvanMvdGhlbWVzL3JlYWwtZXN0YXRlL2dtYXBzLXN0eWxlcy9fbGlnaHQtZ3JleS5qcyIsImFwcC92ZW5kb3IvbGF5b3V0L2pzL19hc3luYy5qcyIsImFwcC92ZW5kb3IvbGF5b3V0L2pzL19icmVha3BvaW50cy5qcyIsImFwcC92ZW5kb3IvbGF5b3V0L2pzL19ncmlkYWxpY2lvdXMuanMiLCJhcHAvdmVuZG9yL2xheW91dC9qcy9fc2Nyb2xsYWJsZS5qcyIsImFwcC92ZW5kb3IvbGF5b3V0L2pzL19za2luLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvX3NraW5zLmpzIiwiYXBwL3ZlbmRvci9sYXlvdXQvanMvbWFpbi5qcyIsImFwcC92ZW5kb3IvbWVkaWEvanMvY2Fyb3VzZWwvbWFpbi5qcyIsImFwcC92ZW5kb3IvbWVkaWEvanMvY2Fyb3VzZWwvb3dsL19kZWZhdWx0LmpzIiwiYXBwL3ZlbmRvci9tZWRpYS9qcy9jYXJvdXNlbC9vd2wvX21peGVkLmpzIiwiYXBwL3ZlbmRvci9tZWRpYS9qcy9jYXJvdXNlbC9vd2wvX3ByZXZpZXcuanMiLCJhcHAvdmVuZG9yL21lZGlhL2pzL2Nhcm91c2VsL293bC9tYWluLmpzIiwiYXBwL3ZlbmRvci9uYXZiYXIvanMvX3N3aXRjaC5qcyIsImFwcC92ZW5kb3IvbmF2YmFyL2pzL21haW4uanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX2JyZWFrcG9pbnRzLmpzIiwiYXBwL3ZlbmRvci9zaWRlYmFyL2pzL19jb2xsYXBzaWJsZS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fZHJvcGRvd24uanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX29wdGlvbnMuanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX3NpZGViYXItbWVudS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fc2lkZWJhci10b2dnbGUuanMiLCJhcHAvdmVuZG9yL3NpZGViYXIvanMvX3RyYW5zZm9ybV9jb2xsYXBzZS5qcyIsImFwcC92ZW5kb3Ivc2lkZWJhci9qcy9fdHJhbnNmb3JtX2Ryb3Bkb3duLmpzIiwiYXBwL3ZlbmRvci9zaWRlYmFyL2pzL21haW4uanMiLCJhcHAvdmVuZG9yL3NvY2lhbC9qcy9fY292ZXIuanMiLCJhcHAvdmVuZG9yL3VpL2pzL19zaG93LWhvdmVyLmpzIiwiYXBwL3ZlbmRvci91aS9qcy9fdGFicy5qcyIsImFwcC92ZW5kb3IvdWkvanMvX3RyZWUuanMiLCJhcHAvdmVuZG9yL3VpL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hFQTtBQUNBO0FBQ0E7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIENPTU1PTlxucmVxdWlyZSgnLi4vLi4vY29tbW9uL21haW4nKTtcblxuLy8gRXNzZW50aWFsc1xucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL3VpL2pzL21haW4nKTtcblxuLy8gTGF5b3V0XG5yZXF1aXJlKCcuLi8uLi8uLi92ZW5kb3IvbGF5b3V0L2pzL21haW4nKTtcblxuLy8gU2lkZWJhclxucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL3NpZGViYXIvanMvbWFpbicpO1xuXG4vLyBOYXZiYXJcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci9uYXZiYXIvanMvbWFpbicpO1xuXG4vLyBNYXBzXG53aW5kb3cuaW5pdEdvb2dsZU1hcHMgPSByZXF1aXJlKCcuL19tYXBzJyk7XG5cbi8vIEVkaXRcbnJlcXVpcmUoJy4vX2VkaXQnKTtcblxuLy8gQ292ZXJcbnJlcXVpcmUoJy4uLy4uLy4uL3ZlbmRvci9zb2NpYWwvanMvX2NvdmVyJyk7XG5cbi8vIE93bCBDYXJvdXNlbFxucmVxdWlyZSgnLi4vLi4vLi4vdmVuZG9yL21lZGlhL2pzL2Nhcm91c2VsL21haW4nKTsiLCJyZXF1aXJlKCcuLi9jb21wb25lbnRzL2Zvcm1zL21haW4nKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvdGFibGVzL21haW4nKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX3Rvb2x0aXAnKTtcbnJlcXVpcmUoJy4uL2NvbXBvbmVudHMvb3RoZXIvX29mZmNhbnZhcycpO1xucmVxdWlyZSgnLi4vY29tcG9uZW50cy9vdGhlci9fcmF0aW5ncycpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gRGF0ZXBpY2tlciBJTklUXG4gICAgJCgnLmRhdGVwaWNrZXInKS5kYXRlcGlja2VyKCk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE1pbmljb2xvcnMgSU5JVFxuICAgICQoJy5taW5pY29sb3JzJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykubWluaWNvbG9ycyh7XG4gICAgICAgICAgICBjb250cm9sOiAkKHRoaXMpLmF0dHIoJ2RhdGEtY29udHJvbCcpIHx8ICdodWUnLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiAkKHRoaXMpLmF0dHIoJ2RhdGEtZGVmYXVsdFZhbHVlJykgfHwgJycsXG4gICAgICAgICAgICBpbmxpbmU6ICQodGhpcykuYXR0cignZGF0YS1pbmxpbmUnKSA9PT0gJ3RydWUnLFxuICAgICAgICAgICAgbGV0dGVyQ2FzZTogJCh0aGlzKS5hdHRyKCdkYXRhLWxldHRlckNhc2UnKSB8fCAnbG93ZXJjYXNlJyxcbiAgICAgICAgICAgIG9wYWNpdHk6ICQodGhpcykuYXR0cignZGF0YS1vcGFjaXR5JyksXG4gICAgICAgICAgICBwb3NpdGlvbjogJCh0aGlzKS5hdHRyKCdkYXRhLXBvc2l0aW9uJykgfHwgJ2JvdHRvbSBsZWZ0JyxcbiAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24gKGhleCwgb3BhY2l0eSkge1xuICAgICAgICAgICAgICAgIGlmICghIGhleCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChvcGFjaXR5KSBoZXggKz0gJywgJyArIG9wYWNpdHk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhoZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGVtZTogJ2Jvb3RzdHJhcCdcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIFByb2dyZXNzIEJhciBBbmltYXRpb25cbiAgICAkKCcucHJvZ3Jlc3MtYmFyJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykud2lkdGgoJCh0aGlzKS5hdHRyKCdhcmlhLXZhbHVlbm93JykgKyAnJScpO1xuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgICQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcuc2VsZWN0cGlja2VyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5zZWxlY3RwaWNrZXIoe1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkKHRoaXMpLmRhdGEoJ3dpZHRoJykgfHwgJzEwMCUnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICQoJ1tkYXRhLXNsaWRlcj1cImRlZmF1bHRcIl0nKS5zbGlkZXIoKTtcblxuICAgICQoJ1tkYXRhLXNsaWRlcj1cImZvcm1hdHRlclwiXScpLnNsaWRlcih7XG4gICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gJ0N1cnJlbnQgdmFsdWU6ICcgKyB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtb24tc2xpZGVdJykub24oXCJzbGlkZVwiLCBmdW5jdGlvbiAoc2xpZGVFdnQpIHtcbiAgICAgICAgJCgkKHRoaXMpLmF0dHIoJ2RhdGEtb24tc2xpZGUnKSkudGV4dChzbGlkZUV2dC52YWx1ZSk7XG4gICAgfSk7XG5cbiAgICAkKCcuc2xpZGVyLWhhbmRsZScpLmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtYmFycyBmYS1yb3RhdGUtOTBcIj48L2k+Jyk7XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fcHJvZ3Jlc3MtYmFycycpO1xucmVxdWlyZSgnLi9fc2xpZGVyJyk7XG5yZXF1aXJlKCcuL19zZWxlY3RwaWNrZXInKTtcbnJlcXVpcmUoJy4vX2RhdGVwaWNrZXInKTtcbnJlcXVpcmUoJy4vX21pbmljb2xvcnMnKTsiLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIE9mZkNhbnZhc1xuICAgICQoJ1tkYXRhLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLnJvdy1vZmZjYW52YXMnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIC8vIFJhdGluZ3NcbiAgICAkKCcucmF0aW5nIHNwYW4uc3RhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gJCh0aGlzKS5wYXJlbnQoKS5jaGlsZHJlbigpLmxlbmd0aDtcbiAgICAgICAgdmFyIGNsaWNrZWRJbmRleCA9ICQodGhpcykuaW5kZXgoKTtcbiAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5yZW1vdmVDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSBjbGlja2VkSW5kZXg7IGkgPCB0b3RhbDsgaSArKykge1xuICAgICAgICAgICAgJCgnLnJhdGluZyBzcGFuLnN0YXInKS5lcShpKS5hZGRDbGFzcygnZmlsbGVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVG9vbHRpcFxuICAgICQoXCJib2R5XCIpLnRvb2x0aXAoe3NlbGVjdG9yOiAnW2RhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXScsIGNvbnRhaW5lcjogXCJib2R5XCJ9KTtcblxufSkoalF1ZXJ5KTtcbiIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgLy8gVGFibGUgQ2hlY2tib3ggQWxsXG4gICAgJCgnI2NoZWNrQWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ3RkIGlucHV0OmNoZWNrYm94JykucHJvcCgnY2hlY2tlZCcsIHRoaXMuY2hlY2tlZCk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7XG4iLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIC8vIERhdGF0YWJsZXNcbiAgICAkKCcjZGF0YS10YWJsZScpLmRhdGFUYWJsZSgpO1xuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2RhdGF0YWJsZXMnKTtcbnJlcXVpcmUoJy4vX2NoZWNrLWFsbCcpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIGZpbmQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBsb2NhdGlvbiwgbWFya2VyLCBtYXJrZXJEYXRhKSB7XG5cbiAgICAgICAgdmFyIGV2ZW50RGF0YSA9ICQuZXh0ZW5kKHt9LCB7bWFya2VyOiBtYXJrZXJ9LCBtYXJrZXJEYXRhKSxcbiAgICAgICAgICAgIHN0YXRlID0gJycsXG4gICAgICAgICAgICBjb3VudHJ5ID0gJycsXG4gICAgICAgICAgICBhZGRyZXNzID0gJyc7XG5cbiAgICAgICAgY29udGFpbmVyLmdtYXAoJ3NlYXJjaCcsIHsnbG9jYXRpb24nOiBsb2NhdGlvbn0sIGZ1bmN0aW9uIChyZXN1bHRzLCBzdGF0dXMpIHtcblxuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSByZXN1bHRzWyAwIF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgICAgICAgJC5lYWNoKHJlc3VsdHNbIDAgXS5hZGRyZXNzX2NvbXBvbmVudHMsIGZ1bmN0aW9uIChpLCB2KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2LnR5cGVzWyAwIF0gPT0gXCJhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzFcIiB8fCB2LnR5cGVzWyAwIF0gPT0gXCJhZG1pbmlzdHJhdGl2ZV9hcmVhX2xldmVsXzJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB2LmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnR5cGVzWyAwIF0gPT0gXCJjb3VudHJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50cnkgPSB2LmxvbmdfbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGV2ZW50RGF0YSA9ICQuZXh0ZW5kKHt9LCBldmVudERhdGEsIHtzdGF0ZTogc3RhdGUsIGNvdW50cnk6IGNvdW50cnksIGFkZHJlc3M6IGFkZHJlc3N9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ21hcC5tYXJrZXIuZmluZCcsIGV2ZW50RGF0YSk7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgJChkb2N1bWVudCkub24oJ21hcC5pbml0JywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEuY29udGFpbmVyLmRhdGEoJ2lkJykgPT0gJ21hcC1lZGl0Jykge1xuXG4gICAgICAgICAgICB2YXIgbWFwID0gZGF0YSxcbiAgICAgICAgICAgICAgICBtYXJrZXJzID0gZGF0YS5jb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKSxcbiAgICAgICAgICAgICAgICBtYXJrZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBcImRyYWdnYWJsZVwiOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtYXJrZXJEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiOiBcInRwbC1lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImJ1aWxkaW5nLTAxXCJcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihkYXRhLm1hcCwgJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cbiAgICAgICAgICAgICAgICBtYXJrZXJEYXRhID0gJC5leHRlbmQoe30sIG1hcmtlckRhdGEsIHtcImxhdExuZ1wiOiBldmVudC5sYXRMbmd9KTtcblxuICAgICAgICAgICAgICAgIGRhdGEuYWRkTWFya2VyKG1hcmtlcnMubGVuZ3RoLCBtYXJrZXJEYXRhLCBtYXJrZXJPcHRpb25zKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcC5pdy53aW5kb3csICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICQoJyNtYXAtZGVsZXRlLW1hcmtlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuZGF0YSgnaWQnKTtcbiAgICAgICAgICAgICAgICAgICAgbWFwLml3LmNsb3NlKGlkKTtcbiAgICAgICAgICAgICAgICAgICAgbWFya2Vyc1sgaWQgXS5zZXRNYXAobnVsbCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5vbignbWFwLm1hcmtlci5pbml0JywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEubWFya2VyRGF0YS5vcGVuICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhLm1hcmtlckRhdGEub3BlbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmaW5kKG1hcC5jb250YWluZXIsIGRhdGEubWFya2VyRGF0YS5sYXRMbmcsIGRhdGEubWFya2VySW5zdCwgZGF0YS5tYXJrZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihkYXRhLm1hcmtlckluc3QsICdkcmFnZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZChtYXAuY29udGFpbmVyLCBlLmxhdExuZywgdGhpcywgZGF0YS5tYXJrZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGRhdGEubWFya2VySW5zdCwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmluZChtYXAuY29udGFpbmVyLCBlLmxhdExuZywgdGhpcywgZGF0YS5tYXJrZXJEYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLm9uKCdtYXAubWFya2VyLmZpbmQnLCBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcblxuICAgICAgICAgICAgICAgIGRhdGEubWFya2VyLnNldFRpdGxlKGRhdGEuYWRkcmVzcyk7XG4gICAgICAgICAgICAgICAgbWFwLml3Lm9wZW4oZGF0YS5tYXJrZXIuZ2V0KCdpZCcpLCBkYXRhKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgY2VudGVyV2luZG93ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgbWFwLCBkYXRhKSB7XG5cbiAgICAgICAgaWYgKGRhdGEubGF0ICYmIGRhdGEubG5nKSB7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5nbWFwKCdvcHRpb24nLCAnY2VudGVyJywgbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhkYXRhLmxhdCwgZGF0YS5sbmcpKTtcblxuICAgICAgICAgICAgbWFwLnBhbkJ5KDAsIC0xNzApO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgdmFyIGNlbnRlck1hcCA9IGZ1bmN0aW9uIChjb250YWluZXIsIGRhdGEpIHtcblxuICAgICAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA9PT0gMikge1xuXG4gICAgICAgICAgICBjb250YWluZXIuZ21hcCgnb3B0aW9uJywgJ2NlbnRlcicsIG5ldyBnb29nbGUubWFwcy5MYXRMbmcoZGF0YVsgMCBdLCBkYXRhWyAxIF0pKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIHZhciByZXNpemUgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBtYXAsIHdpbmRvd0RhdGEsIG1hcERhdGEpIHtcblxuICAgICAgICBpZiAodHlwZW9mIGdvb2dsZSA9PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIobWFwLCAncmVzaXplJyk7XG5cbiAgICAgICAgaWYgKCEgY2VudGVyTWFwKGNvbnRhaW5lciwgbWFwRGF0YSkpIGNlbnRlcldpbmRvdyhjb250YWluZXIsIG1hcCwgd2luZG93RGF0YSk7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2VudGVyV2luZG93OiBjZW50ZXJXaW5kb3csXG4gICAgICAgIGNlbnRlck1hcDogY2VudGVyTWFwLFxuICAgICAgICByZXNpemU6IHJlc2l6ZVxuICAgIH07XG5cbn07IiwiZnVuY3Rpb24gbG9hZFNjcmlwdCgpIHtcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz92PTMuZXhwJicgK1xuICAgICdjYWxsYmFjaz1pbml0R29vZ2xlTWFwcyc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuXG53aW5kb3cub25sb2FkID0gbG9hZFNjcmlwdDtcblxuZnVuY3Rpb24gaW5pdFNjcmlwdHMoKSB7XG4gICAgdmFyICRzY3JpcHRzID0gW1xuICAgICAgICBcImpzL3BsdWdpbnMvbWFwc19nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLmpzXCIsXG4gICAgICAgIFwianMvcGx1Z2lucy9tYXBzX2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAuZXh0ZW5zaW9ucy5qc1wiLFxuICAgICAgICBcImpzL3BsdWdpbnMvbWFwc19nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLnNlcnZpY2VzLmpzXCIsXG4gICAgICAgIFwianMvcGx1Z2lucy9tYXBzX2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAubWljcm9kYXRhLmpzXCIsXG4gICAgICAgIFwianMvcGx1Z2lucy9tYXBzX2dvb2dsZS9qcXVlcnktdWktbWFwL3VpL2pxdWVyeS51aS5tYXAubWljcm9mb3JtYXQuanNcIixcbiAgICAgICAgXCJqcy9wbHVnaW5zL21hcHNfZ29vZ2xlL2pxdWVyeS11aS1tYXAvdWkvanF1ZXJ5LnVpLm1hcC5vdmVybGF5cy5qc1wiLFxuICAgICAgICBcImpzL3BsdWdpbnMvbWFwc19nb29nbGUvanF1ZXJ5LXVpLW1hcC91aS9qcXVlcnkudWkubWFwLnJkZmEuanNcIixcbiAgICAgICAgXCJqcy9wbHVnaW5zL21hcHNfZ29vZ2xlL2pxdWVyeS11aS1tYXAvYWRkb25zL2luZm9ib3hfcGFja2VkLmpzXCJcbiAgICBdO1xuXG4gICAgJC5lYWNoKCRzY3JpcHRzLCBmdW5jdGlvbiAoaywgdikge1xuICAgICAgICBpZiAoJCgnW3NyYz1cIicgKyB2ICsgJ1wiXScpLmxlbmd0aCkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBzY3JpcHROb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgICAgICAgc2NyaXB0Tm9kZS5zcmMgPSB2O1xuICAgICAgICAkKCdoZWFkJykucHJlcGVuZCgkKHNjcmlwdE5vZGUpKTtcbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaW5pdFNjcmlwdHMoKTtcblxuICAgIC8qXG4gICAgICogUmVhbCBFc3RhdGVcbiAgICAgKi9cblxuICAgIHZhciBjb250YWluZXIgPSAkKCcjZ29vZ2xlLWZzLXJlYWxlc3RhdGUnKTtcblxuICAgIGlmIChjb250YWluZXIubGVuZ3RoKSB7XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtYXBab29tUG9zaXRpb246IGNvbnRhaW5lci5kYXRhKCd6b29tUG9zaXRpb24nKSB8fCBcIlRPUF9MRUZUXCIsXG4gICAgICAgICAgICBtYXBab29tOiBjb250YWluZXIuZGF0YSgnem9vbScpIHx8IDE2LFxuICAgICAgICAgICAgbWFwU3R5bGU6IGNvbnRhaW5lci5kYXRhKCdzdHlsZScpIHx8IFwibGlnaHQtZ3JleVwiLFxuICAgICAgICAgICAgbWFwVHlwZTogY29udGFpbmVyLmRhdGEoJ3R5cGUnKSB8fCBcIlJPQURNQVBcIixcbiAgICAgICAgICAgIGZpbGU6IGNvbnRhaW5lci5kYXRhKCdmaWxlJyksXG4gICAgICAgICAgICBjZW50ZXI6IGNvbnRhaW5lci5kYXRhKCdjZW50ZXInKSA/IGNvbnRhaW5lci5kYXRhKCdjZW50ZXInKS5zcGxpdChcIixcIikgOiBmYWxzZVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBsaWJyYXJ5ID0gcmVxdWlyZSgnLi9fbGlicmFyeS5qcycpKCk7XG5cbiAgICAgICAgLy8gSG9sZHMgZ29vZ2xlIG1hcHMgc3R5bGVzXG4gICAgICAgIHZhciBzdHlsZXMgPSB7XG4gICAgICAgICAgICBcImxpZ2h0LWdyZXlcIjogcmVxdWlyZSgnLi9nbWFwcy1zdHlsZXMvX2xpZ2h0LWdyZXkuanMnKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHByb3ZpZGUgYSBkZWZhdWx0IG9iamVjdCBmb3IgZGF0YSBjb2xsZWN0ZWQgZnJvbSB0aGUgY3VycmVudGx5IG9wZW5lZCBpbmZvV2luZG93XG4gICAgICAgIHZhciBpbmZvV2luZG93RGF0YSA9IHtcbiAgICAgICAgICAgIGxhdDogZmFsc2UsXG4gICAgICAgICAgICBsbmc6IGZhbHNlXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUHJvY2VzcyB0aGUgaW5mb1dpbmRvdyBjb250ZW50IHZpYSBIYW5kbGViYXJzIHRlbXBsYXRlc1xuICAgICAgICB2YXIgaW5mb1dpbmRvd0NvbnRlbnQgPSBmdW5jdGlvbiAobWFya2VyKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gJChcIiNcIiArIG1hcmtlci50ZW1wbGF0ZSkuaHRtbCgpO1xuICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKHNvdXJjZSk7XG4gICAgICAgICAgICByZXR1cm4gdGVtcGxhdGUobWFya2VyKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaW5mb1dpbmRvd09wZW4gPSBmdW5jdGlvbiAoaSwgbWFya2VyKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIEluZm9XaW5kb3c6IGpRdWVyeSBVSSBNYXBzXG4gICAgICAgICAgICAgY29udGFpbmVyLmdtYXAoJ29wZW5JbmZvV2luZG93Jywge1xuICAgICAgICAgICAgICdjb250ZW50JzogaW5mb1dpbmRvd0NvbnRlbnQobWFya2VyKSxcbiAgICAgICAgICAgICAnbWF4V2lkdGgnOiAyNDBcbiAgICAgICAgICAgICB9LCBtYXJrZXJJbnN0KTtcbiAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICB2YXIgbWFya2VySW5zdCA9IGNvbnRhaW5lci5nbWFwKCdnZXQnLCAnbWFya2VycycpWyBpIF07XG5cbiAgICAgICAgICAgIC8qIEluZm9XaW5kb3c6IEdvb2dsZSBNYXBzIEFQSSBTdGFuZGFyZCAqL1xuICAgICAgICAgICAgaW5mb1dpbmRvdy5zZXRDb250ZW50KGluZm9XaW5kb3dDb250ZW50KG1hcmtlcikpO1xuICAgICAgICAgICAgaW5mb1dpbmRvdy5vcGVuKG1hcCwgbWFya2VySW5zdCk7XG4gICAgICAgICAgICBpbmZvV2luZG93LmlzT3BlbiA9IGk7XG5cbiAgICAgICAgICAgIGluZm9XaW5kb3dEYXRhID0ge1xuICAgICAgICAgICAgICAgIGxhdDogbWFya2VyLmxhdGl0dWRlLFxuICAgICAgICAgICAgICAgIGxuZzogbWFya2VyLmxvbmdpdHVkZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgaW5mb1dpbmRvd0Nsb3NlID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5mb1dpbmRvdy5pc09wZW4gIT0gJ3VuZGVmaW5lZCcgJiYgaW5mb1dpbmRvdy5pc09wZW4gPT09IGkpIHtcbiAgICAgICAgICAgICAgICBpbmZvV2luZG93LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgaW5mb1dpbmRvdy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICAvKiBJbmZvV2luZG93OiBHb29nbGUgTWFwcyBBUEkgU3RhbmRhcmRcbiAgICAgICAgIHZhciBpbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgbWF4V2lkdGg6IDI0MFxuICAgICAgICAgfSk7XG4gICAgICAgICAqL1xuXG4gICAgICAgIC8qIEluZm9Cb3ggKi9cbiAgICAgICAgdmFyIGluZm9XaW5kb3cgPSBuZXcgSW5mb0JveCh7XG4gICAgICAgICAgICBtYXhXaWR0aDogMjQwLFxuICAgICAgICAgICAgYWxpZ25Cb3R0b206IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGFkZE1hcmtlciA9IGZ1bmN0aW9uIChpLCBtYXJrZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBpY29uQmFzZSA9ICdpbWFnZXMvbWFya2Vycy8nO1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gdHlwZW9mIG1hcmtlci5sYXRMbmcgIT09ICd1bmRlZmluZWQnID8gbWFya2VyLmxhdExuZyA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCEgcG9zaXRpb24gJiYgdHlwZW9mIG1hcmtlci5sYXRpdHVkZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1hcmtlci5sb25naXR1ZGUgIT09ICd1bmRlZmluZWQnKSBwb3NpdGlvbiA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobWFya2VyLmxhdGl0dWRlLCBtYXJrZXIubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgIGlmICghIHBvc2l0aW9uKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciBtYXJrZXJPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIFwiaWRcIjogaSxcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCI6IHBvc2l0aW9uLFxuICAgICAgICAgICAgICAgIFwiZHJhZ2dhYmxlXCI6IHRydWUsXG4gICAgICAgICAgICAgICAgXCJpY29uXCI6IGljb25CYXNlICsgbWFya2VyLmljb24gKyBcIi5wbmdcIlxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09ICdvYmplY3QnKSBtYXJrZXJPcHRpb25zID0gJC5leHRlbmQoe30sIG1hcmtlck9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICB2YXIgb3BlbiA9IHR5cGVvZiBtYXJrZXIub3BlbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbWFya2VyLm9wZW4gPT09IHRydWU7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5nbWFwKCdhZGRNYXJrZXInLCBtYXJrZXJPcHRpb25zKTtcblxuICAgICAgICAgICAgdmFyIG1hcmtlckluc3QgPSBjb250YWluZXIuZ21hcCgnZ2V0JywgJ21hcmtlcnMnKVsgaSBdO1xuXG4gICAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXJJbnN0LCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgaW5mb1dpbmRvd0Nsb3NlKGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZm9XaW5kb3dPcGVuKGksIG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgIGxpYnJhcnkuY2VudGVyV2luZG93KGNvbnRhaW5lciwgbWFwLCBpbmZvV2luZG93RGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlckluc3QsICdkcmFnZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBsYXQgPSBtYXJrZXJJbnN0LmdldFBvc2l0aW9uKCkubGF0KCk7XG4gICAgICAgICAgICAgICAgdmFyIGxuZyA9IG1hcmtlckluc3QuZ2V0UG9zaXRpb24oKS5sbmcoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnXCJsYXRpdHVkZVwiOiAnICsgbGF0ICsgJywgXCJsb25naXR1ZGVcIjogJyArIGxuZyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIG1hcmtlckRhdGEgPSAkLmV4dGVuZCh7fSwgbWFya2VyLCB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBpLFxuICAgICAgICAgICAgICAgIFwibGF0TG5nXCI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobWFya2VyLmxhdGl0dWRlLCBtYXJrZXIubG9uZ2l0dWRlKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ21hcC5tYXJrZXIuaW5pdCcsIHttYXJrZXJJbnN0OiBtYXJrZXJJbnN0LCBtYXJrZXJEYXRhOiBtYXJrZXJEYXRhfSk7XG5cbiAgICAgICAgICAgIGlmIChvcGVuKSBpbmZvV2luZG93T3BlbihpLCBtYXJrZXIpO1xuXG4gICAgICAgICAgICByZXR1cm4gbWFya2VySW5zdDtcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIuZ21hcChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAnem9vbUNvbnRyb2wnOiB0cnVlLFxuICAgICAgICAgICAgICAgICd6b29tQ29udHJvbE9wdGlvbnMnOiB7XG4gICAgICAgICAgICAgICAgICAgICdzdHlsZSc6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGUuU01BTEwsXG4gICAgICAgICAgICAgICAgICAgICdwb3NpdGlvbic6IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblsgb3B0aW9ucy5tYXBab29tUG9zaXRpb24gXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgJ3BhbkNvbnRyb2wnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnc3RyZWV0Vmlld0NvbnRyb2wnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnbWFwVHlwZUNvbnRyb2wnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnb3ZlcnZpZXdNYXBDb250cm9sJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ3Njcm9sbHdoZWVsJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ21hcFR5cGVJZCc6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZFsgb3B0aW9ucy5tYXBUeXBlIF0sXG4gICAgICAgICAgICAgICAgJ3pvb20nOiBvcHRpb25zLm1hcFpvb20sXG4gICAgICAgICAgICAgICAgJ3N0eWxlcyc6IHN0eWxlc1sgb3B0aW9ucy5tYXBTdHlsZSBdXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmJpbmQoJ2luaXQnLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5maWxlKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZ2V0SlNPTihvcHRpb25zLmZpbGUsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5tYXJrZXJzLCBmdW5jdGlvbiAoaSwgbWFya2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkTWFya2VyKGksIG1hcmtlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpYnJhcnkucmVzaXplKGNvbnRhaW5lciwgbWFwLCBpbmZvV2luZG93RGF0YSwgb3B0aW9ucy5jZW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsaWJyYXJ5LmNlbnRlck1hcChjb250YWluZXIsIG9wdGlvbnMuY2VudGVyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdtYXAuaW5pdCcsIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIsXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbWFwLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBhZGRNYXJrZXI6IGFkZE1hcmtlcixcbiAgICAgICAgICAgICAgICAgICAgbGlicmFyeTogbGlicmFyeSxcbiAgICAgICAgICAgICAgICAgICAgaXc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdzogaW5mb1dpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGluZm9XaW5kb3dDb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgb3BlbjogaW5mb1dpbmRvd09wZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZTogaW5mb1dpbmRvd0Nsb3NlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKGluZm9XaW5kb3csICdkb21yZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl3ID0gJCgnLmluZm9Cb3gnKTtcbiAgICAgICAgICAgICAgICAgICAgaW5mb1dpbmRvdy5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBpeGVsT2Zmc2V0OiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSgtIE1hdGguYWJzKGl3LndpZHRoKCkgLyAyKSwgLSA0NSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB2YXIgbWFwID0gY29udGFpbmVyLmdtYXAoJ2dldCcsICdtYXAnKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignc2lkZWJhci5zaG93biBzaWRlYmFyLmhpZGRlbicsIGZ1bmN0aW9uIChldmVudCwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEudGFyZ2V0ID09ICcjc2lkZWJhci1tYXAnIHx8IGRhdGEudGFyZ2V0ID09IFwiI3NpZGViYXItZWRpdFwiKSB7XG4gICAgICAgICAgICAgICAgbGlicmFyeS5yZXNpemUoY29udGFpbmVyLCBtYXAsIGluZm9XaW5kb3dEYXRhLCBvcHRpb25zLmNlbnRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdzaWRlYmFyLnNob3duJywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQgPT0gXCIjc2lkZWJhci1lZGl0XCIpIHtcbiAgICAgICAgICAgICAgICAkKCcjdG9nZ2xlLXNpZGViYXItZWRpdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ3NpZGViYXIuaGlkZGVuJywgZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS50YXJnZXQgPT0gXCIjc2lkZWJhci1lZGl0XCIpIHtcbiAgICAgICAgICAgICAgICAkKCcjdG9nZ2xlLXNpZGViYXItZWRpdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHQ7XG4gICAgICAgICQod2luZG93KS5vbignZGVib3VuY2VkcmVzaXplJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHQpO1xuICAgICAgICAgICAgdCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxpYnJhcnkucmVzaXplKGNvbnRhaW5lciwgbWFwLCBpbmZvV2luZG93RGF0YSwgb3B0aW9ucy5jZW50ZXIpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59OyIsIm1vZHVsZS5leHBvcnRzID0gWyB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZTllOWU5XCJ9LCB7XCJsaWdodG5lc3NcIjogMTd9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZjVmNWY1XCJ9LCB7XCJsaWdodG5lc3NcIjogMjB9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZmZmZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAxN30gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMjl9LCB7XCJ3ZWlnaHRcIjogMC4yfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNmZmZmZmZcIn0sIHtcImxpZ2h0bmVzc1wiOiAxOH0gXVxufSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZmZmZmZmXCJ9LCB7XCJsaWdodG5lc3NcIjogMTZ9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZjVmNWY1XCJ9LCB7XCJsaWdodG5lc3NcIjogMjF9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJjb2xvclwiOiBcIiNkZWRlZGVcIn0sIHtcImxpZ2h0bmVzc1wiOiAyMX0gXVxufSwge1xuICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5zdHJva2VcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJ2aXNpYmlsaXR5XCI6IFwib25cIn0sIHtcImNvbG9yXCI6IFwiI2ZmZmZmZlwifSwge1wibGlnaHRuZXNzXCI6IDE2fSBdXG59LCB7XG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICBcInN0eWxlcnNcIjogWyB7XCJzYXR1cmF0aW9uXCI6IDM2fSwge1wiY29sb3JcIjogXCIjMzMzMzMzXCJ9LCB7XCJsaWdodG5lc3NcIjogNDB9IF1cbn0sIHtcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIiwgXCJzdHlsZXJzXCI6IFsge1widmlzaWJpbGl0eVwiOiBcIm9mZlwifSBdfSwge1xuICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgXCJzdHlsZXJzXCI6IFsge1wiY29sb3JcIjogXCIjZjJmMmYyXCJ9LCB7XCJsaWdodG5lc3NcIjogMTl9IF1cbn0sIHtcbiAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZlZmVmZVwifSwge1wibGlnaHRuZXNzXCI6IDIwfSBdXG59LCB7XG4gICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LnN0cm9rZVwiLFxuICAgIFwic3R5bGVyc1wiOiBbIHtcImNvbG9yXCI6IFwiI2ZlZmVmZVwifSwge1wibGlnaHRuZXNzXCI6IDE3fSwge1wid2VpZ2h0XCI6IDEuMn0gXVxufSBdOyIsImZ1bmN0aW9uIGNvbnRlbnRMb2FkZWQod2luLCBmbikge1xuXG4gICAgdmFyIGRvbmUgPSBmYWxzZSwgdG9wID0gdHJ1ZSxcblxuICAgICAgICBkb2MgPSB3aW4uZG9jdW1lbnQsXG4gICAgICAgIHJvb3QgPSBkb2MuZG9jdW1lbnRFbGVtZW50LFxuICAgICAgICBtb2Rlcm4gPSBkb2MuYWRkRXZlbnRMaXN0ZW5lcixcblxuICAgICAgICBhZGQgPSBtb2Rlcm4gPyAnYWRkRXZlbnRMaXN0ZW5lcicgOiAnYXR0YWNoRXZlbnQnLFxuICAgICAgICByZW0gPSBtb2Rlcm4gPyAncmVtb3ZlRXZlbnRMaXN0ZW5lcicgOiAnZGV0YWNoRXZlbnQnLFxuICAgICAgICBwcmUgPSBtb2Rlcm4gPyAnJyA6ICdvbicsXG5cbiAgICAgICAgaW5pdCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdyZWFkeXN0YXRlY2hhbmdlJyAmJiBkb2MucmVhZHlTdGF0ZSAhPSAnY29tcGxldGUnKSByZXR1cm47XG4gICAgICAgICAgICAoZS50eXBlID09ICdsb2FkJyA/IHdpbiA6IGRvYylbIHJlbSBdKHByZSArIGUudHlwZSwgaW5pdCwgZmFsc2UpO1xuICAgICAgICAgICAgaWYgKCEgZG9uZSAmJiAoZG9uZSA9IHRydWUpKSBmbi5jYWxsKHdpbiwgZS50eXBlIHx8IGUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJvb3QuZG9TY3JvbGwoJ2xlZnQnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHBvbGwsIDUwKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbml0KCdwb2xsJyk7XG4gICAgICAgIH07XG5cbiAgICBpZiAoZG9jLnJlYWR5U3RhdGUgPT0gJ2NvbXBsZXRlJykgZm4uY2FsbCh3aW4sICdsYXp5Jyk7XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICghIG1vZGVybiAmJiByb290LmRvU2Nyb2xsKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHRvcCA9ICEgd2luLmZyYW1lRWxlbWVudDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3ApIHBvbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBkb2NbIGFkZCBdKHByZSArICdET01Db250ZW50TG9hZGVkJywgaW5pdCwgZmFsc2UpO1xuICAgICAgICBkb2NbIGFkZCBdKHByZSArICdyZWFkeXN0YXRlY2hhbmdlJywgaW5pdCwgZmFsc2UpO1xuICAgICAgICB3aW5bIGFkZCBdKHByZSArICdsb2FkJywgaW5pdCwgZmFsc2UpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmxzLCBjYWxsYmFjaykge1xuXG4gICAgdmFyIGFzeW5jTG9hZGVyID0gZnVuY3Rpb24gKHVybHMsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgdXJscy5mb3JlYWNoKGZ1bmN0aW9uIChpLCBmaWxlKSB7XG4gICAgICAgICAgICBsb2FkQ3NzKGZpbGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjaGVja2luZyBmb3IgYSBjYWxsYmFjayBmdW5jdGlvblxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICBjb250ZW50TG9hZGVkKHdpbmRvdywgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBsb2FkQ3NzID0gZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVsgMCBdLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH07XG5cbiAgICAvLyBzaW1wbGUgZm9yZWFjaCBpbXBsZW1lbnRhdGlvblxuICAgIEFycmF5LnByb3RvdHlwZS5mb3JlYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGksIHRoaXNbIGkgXSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXN5bmNMb2FkZXIodXJscywgY2FsbGJhY2spO1xuXG59OyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgJCh3aW5kb3cpLnNldEJyZWFrcG9pbnRzKHtcbiAgICAgICAgZGlzdGluY3Q6IHRydWUsXG4gICAgICAgIGJyZWFrcG9pbnRzOiBbIDMyMCwgNDgwLCA3NjgsIDEwMjQgXVxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKXtcblxuICAgICQoJ1tkYXRhLXRvZ2dsZSo9XCJncmlkYWxpY2lvdXNcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5ncmlkYWxpY2lvdXMoe1xuICAgICAgICAgICAgZ3V0dGVyOiAkKHRoaXMpLmRhdGEoJ2d1dHRlcicpIHx8IDE1LFxuICAgICAgICAgICAgd2lkdGg6ICQodGhpcykuZGF0YSgnd2lkdGgnKSB8fCAzNzAsXG4gICAgICAgICAgICBzZWxlY3RvcjogJz4gZGl2JyxcbiAgICAgICAgICAgIGFuaW1hdGlvbk9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4vX3NraW4nKSgpO1xuXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5uaWNlU2Nyb2xsKHtcbiAgICAgICAgY3Vyc29yYm9yZGVyOiAwLFxuICAgICAgICBjdXJzb3Jjb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICBob3JpenJhaWxlbmFibGVkOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgJCgnLnN0LWNvbnRlbnQtaW5uZXInKS5uaWNlU2Nyb2xsKHtcbiAgICAgICAgY3Vyc29yYm9yZGVyOiAwLFxuICAgICAgICBjdXJzb3Jjb2xvcjogY29uZmlnLnNraW5zWyBza2luIF1bICdwcmltYXJ5LWNvbG9yJyBdLFxuICAgICAgICBob3JpenJhaWxlbmFibGVkOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgJCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG5cbn0oalF1ZXJ5KSk7IiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBza2luID0gJC5jb29raWUoJ3NraW4nKTtcblxuICAgIGlmICh0eXBlb2Ygc2tpbiA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBza2luID0gJ2RlZmF1bHQnO1xuICAgIH1cbiAgICByZXR1cm4gc2tpbjtcbn0pOyIsInZhciBhc3luY0xvYWRlciA9IHJlcXVpcmUoJy4vX2FzeW5jJyk7XG5cbihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIGNoYW5nZVNraW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBza2luID0gJC5jb29raWUoXCJza2luXCIpO1xuICAgICAgICBpZiAodHlwZW9mIHNraW4gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGFzeW5jTG9hZGVyKFsgJ2Nzcy8nICsgc2tpbiArICcubWluLmNzcycgXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXNraW5dJykucmVtb3ZlUHJvcCgnZGlzYWJsZWQnKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJCgnW2RhdGEtc2tpbl0nKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgaWYgKCQodGhpcykucHJvcCgnZGlzYWJsZWQnKSkgcmV0dXJuO1xuXG4gICAgICAgICQoJ1tkYXRhLXNraW5dJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgJC5jb29raWUoXCJza2luXCIsICQodGhpcykuZGF0YSgnc2tpbicpKTtcblxuICAgICAgICBjaGFuZ2VTa2luKCk7XG5cbiAgICB9KTtcblxuICAgIHZhciBza2luID0gJC5jb29raWUoXCJza2luXCIpO1xuXG4gICAgaWYgKHR5cGVvZiBza2luICE9ICd1bmRlZmluZWQnICYmIHNraW4gIT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIGNoYW5nZVNraW4oKTtcbiAgICB9XG5cbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fYnJlYWtwb2ludHMuanMnKTtcbnJlcXVpcmUoJy4vX2dyaWRhbGljaW91cy5qcycpO1xucmVxdWlyZSgnLi9fc2Nyb2xsYWJsZS5qcycpO1xucmVxdWlyZSgnLi9fc2tpbnMnKTsiLCJyZXF1aXJlKCcuL293bC9tYWluJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICAkKFwiLm93bC1iYXNpY1wiKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGMgPSAkKHRoaXMpO1xuICAgICAgICAkKHRoaXMpLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgIGl0ZW1zOiBjLmRhdGEoJ2l0ZW1zJykgfHwgNCxcbiAgICAgICAgICAgIGl0ZW1zRGVza3RvcDogWyAxMTk5LCBjLmRhdGEoJ2l0ZW1zRGVza3RvcCcpIHx8IDMgXSxcbiAgICAgICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsOiBbIDk3OSwgYy5kYXRhKCdpdGVtc0Rlc2t0b3BTbWFsbCcpIHx8IDMgXSxcbiAgICAgICAgICAgIGFmdGVyVXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgICQoXCIub3dsLW1peGVkXCIpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgIHBhZ2luYXRpb246IGZhbHNlLFxuICAgICAgICBuYXZpZ2F0aW9uOiB0cnVlLFxuICAgICAgICBuYXZpZ2F0aW9uVGV4dDogWyAnPGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWxlZnRcIj48L2k+JywgJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nIF0sXG4gICAgICAgIGl0ZW1zRGVza3RvcDogWyAxMTk5LCAyIF0sXG4gICAgICAgIGl0ZW1zRGVza3RvcFNtYWxsOiBbIDk3OSwgMSBdLFxuICAgICAgICBpdGVtc1RhYmxldDogWyA3NjgsIDEgXVxuICAgIH0pO1xuXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIHZhciBwcmV2aWV3ID0gJChcIi5vd2wtcHJldmlld1wiKTtcbiAgICB2YXIgdGh1bWIgPSAkKFwiLm93bC10aHVtYlwiKTtcblxuICAgIHByZXZpZXcub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBzaW5nbGVJdGVtOiB0cnVlLFxuICAgICAgICBzbGlkZVNwZWVkOiAxMDAwLFxuICAgICAgICBwYWdpbmF0aW9uOiBmYWxzZSxcbiAgICAgICAgYWZ0ZXJBY3Rpb246IHN5bmNQb3NpdGlvbixcbiAgICAgICAgcmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG4gICAgICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgICAgIG5hdmlnYXRpb25UZXh0OiBbJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPicsJzxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT4nXVxuICAgIH0pO1xuXG4gICAgdGh1bWIub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBpdGVtczogNSxcbiAgICAgICAgaXRlbXNEZXNrdG9wOiBbIDExOTksIDUgXSxcbiAgICAgICAgaXRlbXNEZXNrdG9wU21hbGw6IFsgOTc5LCA0IF0sXG4gICAgICAgIGl0ZW1zVGFibGV0OiBbIDc2OCwgNCBdLFxuICAgICAgICBpdGVtc01vYmlsZTogWyA0NzksIDMgXSxcbiAgICAgICAgcGFnaW5hdGlvbjogZmFsc2UsXG4gICAgICAgIG5hdmlnYXRpb246IHRydWUsXG4gICAgICAgIHJlc3BvbnNpdmVSZWZyZXNoUmF0ZTogMTAwLFxuICAgICAgICBhZnRlckluaXQ6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZWwuZmluZChcIi5vd2wtaXRlbVwiKS5lcSgwKS5hZGRDbGFzcyhcInN5bmNlZFwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gc3luY1Bvc2l0aW9uKGVsKSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gdGhpcy5jdXJyZW50SXRlbTtcbiAgICAgICAgJChcIi5vd2wtdGh1bWJcIilcbiAgICAgICAgICAgIC5maW5kKFwiLm93bC1pdGVtXCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJzeW5jZWRcIilcbiAgICAgICAgICAgIC5lcShjdXJyZW50KVxuICAgICAgICAgICAgLmFkZENsYXNzKFwic3luY2VkXCIpO1xuICAgICAgICBpZiAoJChcIi5vd2wtdGh1bWJcIikuZGF0YShcIm93bENhcm91c2VsXCIpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNlbnRlcihjdXJyZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoXCIub3dsLXRodW1iXCIpLm9uKFwiY2xpY2tcIiwgXCIub3dsLWl0ZW1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbnVtYmVyID0gJCh0aGlzKS5kYXRhKFwib3dsSXRlbVwiKTtcbiAgICAgICAgcHJldmlldy50cmlnZ2VyKFwib3dsLmdvVG9cIiwgbnVtYmVyKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNlbnRlcihudW1iZXIpIHtcbiAgICAgICAgdmFyIHRodW1idmlzaWJsZSA9IHRodW1iLmRhdGEoXCJvd2xDYXJvdXNlbFwiKS5vd2wudmlzaWJsZUl0ZW1zO1xuICAgICAgICB2YXIgbnVtID0gbnVtYmVyO1xuICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aHVtYnZpc2libGUpIHtcbiAgICAgICAgICAgIGlmIChudW0gPT09IHRodW1idmlzaWJsZVsgaSBdKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvdW5kID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKG51bSA+IHRodW1idmlzaWJsZVsgdGh1bWJ2aXNpYmxlLmxlbmd0aCAtIDEgXSkge1xuICAgICAgICAgICAgICAgIHRodW1iLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCBudW0gLSB0aHVtYnZpc2libGUubGVuZ3RoICsgMik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChudW0gLSAxID09PSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGh1bWIudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobnVtID09PSB0aHVtYnZpc2libGVbIHRodW1idmlzaWJsZS5sZW5ndGggLSAxIF0pIHtcbiAgICAgICAgICAgIHRodW1iLnRyaWdnZXIoXCJvd2wuZ29Ub1wiLCB0aHVtYnZpc2libGVbIDEgXSk7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtID09PSB0aHVtYnZpc2libGVbIDAgXSkge1xuICAgICAgICAgICAgdGh1bWIudHJpZ2dlcihcIm93bC5nb1RvXCIsIG51bSAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG59KShqUXVlcnkpOyIsInJlcXVpcmUoJy4vX2RlZmF1bHQnKTtcbnJlcXVpcmUoJy4vX21peGVkJyk7XG5yZXF1aXJlKCcuL19wcmV2aWV3Jyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgJChcIltuYW1lPSdzd2l0Y2gtY2hlY2tib3gnXVwiKS5ib290c3RyYXBTd2l0Y2goe1xuICAgICAgICBvZmZDb2xvcjogJ2RhbmdlcidcbiAgICB9KTtcbn0pKGpRdWVyeSk7IiwicmVxdWlyZSgnLi9fc3dpdGNoJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgcmVzdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoXCJodG1sXCIpLmFkZENsYXNzKCdzaG93LXNpZGViYXInKTtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyLnNpZGViYXItdmlzaWJsZS1kZXNrdG9wJykubm90KCc6dmlzaWJsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gc2lkZWJhci5vcHRpb25zKCQodGhpcykpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIub3BlbigkKHRoaXMpLmF0dHIoJ2lkJyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiaHRtbFwiKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG4gICAgICAgICAgICAkKCcuc2lkZWJhcjp2aXNpYmxlJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5jbG9zZSgkKHRoaXMpLmF0dHIoJ2lkJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBpZiAoJCgnLmhpZGUtc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICByZXN0b3JlKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50MTAyNCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaWYgKCQoJy5oaWRlLXNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmVzdG9yZSgpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLmJpbmQoJ2VudGVyQnJlYWtwb2ludDQ4MCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEgJCgnLnNpZGViYXInKS5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDQ4MCkge1xuICAgICAgICBpZiAoISAkKCcuc2lkZWJhcicpLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICBoaWRlKCk7XG4gICAgfVxuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uKCQpe1xuXG4gICAgcmVxdWlyZSgnLi9fdHJhbnNmb3JtX2NvbGxhcHNlJykoKTtcblxufSkoalF1ZXJ5KTsiLCIoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciB0cmFuc2Zvcm1fZGQgPSByZXF1aXJlKCcuL190cmFuc2Zvcm1fZHJvcGRvd24nKSxcbiAgICAgICAgdHJhbnNmb3JtX2NvbGxhcHNlID0gcmVxdWlyZSgnLi9fdHJhbnNmb3JtX2NvbGxhcHNlJyk7XG5cbiAgICB0cmFuc2Zvcm1fZGQoKTtcblxuICAgICQod2luZG93KS5iaW5kKCdlbnRlckJyZWFrcG9pbnQ0ODAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykuYXR0cignZGF0YS10eXBlJywgJ2NvbGxhcHNlJykuYXR0cignZGF0YS10cmFuc2Zvcm1lZCcsIHRydWUpO1xuICAgICAgICB0cmFuc2Zvcm1fY29sbGFwc2UoKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIG1ha2VfZGQoKSB7XG4gICAgICAgIGlmICghICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdW2RhdGEtdHJhbnNmb3JtZWRdJykubGVuZ3RoKSByZXR1cm47XG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImNvbGxhcHNlXCJdW2RhdGEtdHJhbnNmb3JtZWRdJykuYXR0cignZGF0YS10eXBlJywgJ2Ryb3Bkb3duJykuYXR0cignZGF0YS10cmFuc2Zvcm1lZCcsIHRydWUpO1xuICAgICAgICB0cmFuc2Zvcm1fZGQoKTtcbiAgICB9XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50NzY4JywgbWFrZV9kZCk7XG5cbiAgICAkKHdpbmRvdykuYmluZCgnZW50ZXJCcmVha3BvaW50MTAyNCcsIG1ha2VfZGQpO1xuXG59KShqUXVlcnkpOyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNpZGViYXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBcInRyYW5zZm9ybS1idXR0b25cIjogc2lkZWJhci5kYXRhKCd0cmFuc2Zvcm1CdXR0b24nKSA9PT0gdHJ1ZSxcbiAgICAgICAgXCJ0cmFuc2Zvcm0tYnV0dG9uLWljb25cIjogc2lkZWJhci5kYXRhKCd0cmFuc2Zvcm1CdXR0b25JY29uJykgfHwgJ2ZhLWVsbGlwc2lzLWgnXG4gICAgfTtcbn07IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2lkZWJhcnMgPSAkKCcuc2lkZWJhcicpO1xuXG4gICAgc2lkZWJhcnMuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHJlcXVpcmUoJy4vX29wdGlvbnMnKShzaWRlYmFyKTtcblxuICAgICAgICBpZiAob3B0aW9uc1sgJ3RyYW5zZm9ybS1idXR0b24nIF0pIHtcbiAgICAgICAgICAgIHZhciBidXR0b24gPSAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj4nKTtcblxuICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ3NpZGViYXItdHJhbnNmb3JtJylcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2J0biBidG4tZGVmYXVsdCcpXG4gICAgICAgICAgICAgICAgLmh0bWwoJzxpIGNsYXNzPVwiZmEgJyArIG9wdGlvbnNbICd0cmFuc2Zvcm0tYnV0dG9uLWljb24nIF0gKyAnXCI+PC9pPicpO1xuXG4gICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5zaWRlYmFyLW1lbnUnKS5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuICAgIC8qanNoaW50IGJyb3dzZXI6IHRydWUsIHN0cmljdDogZmFsc2UgKi9cblxuICAgICQoJyNzdWJuYXYnKS5jb2xsYXBzZSh7J3RvZ2dsZSc6IGZhbHNlfSk7XG5cbiAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLXRyYW5zZm9ybVwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLW1pbmknKTtcbiAgICAgICAgaWYgKCQoJ2JvZHknKS5pcygnLnNpZGViYXItbWluaScpKSAkKCcuc2lkZWJhci1tZW51IC5jb2xsYXBzZScpLmNvbGxhcHNlKCdoaWRlJyk7XG4gICAgICAgICQoJyNkcm9wZG93bi10ZW1wJykuaGlkZSgpO1xuICAgICAgICAkKCcuc2lkZWJhci1tZW51IC5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICB9KTtcblxufSkoalF1ZXJ5KTtcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgICBmdW5jdGlvbiBtb2JpbGVjaGVjaygpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgICAgIChmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgaWYgKC8oYW5kcm9pZHxpcGFkfHBsYXlib29rfHNpbGt8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QoYSkgfHwgLzEyMDd8NjMxMHw2NTkwfDNnc298NHRocHw1MFsxLTZdaXw3NzBzfDgwMnN8YSB3YXxhYmFjfGFjKGVyfG9vfHNcXC0pfGFpKGtvfHJuKXxhbChhdnxjYXxjbyl8YW1vaXxhbihleHxueXx5dyl8YXB0dXxhcihjaHxnbyl8YXModGV8dXMpfGF0dHd8YXUoZGl8XFwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3XFwtKG58dSl8YzU1XFwvfGNhcGl8Y2N3YXxjZG1cXC18Y2VsbHxjaHRtfGNsZGN8Y21kXFwtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjXFwtc3xkZXZpfGRpY2F8ZG1vYnxkbyhjfHApb3xkcygxMnxcXC1kKXxlbCg0OXxhaSl8ZW0obDJ8dWwpfGVyKGljfGswKXxlc2w4fGV6KFs0LTddMHxvc3x3YXx6ZSl8ZmV0Y3xmbHkoXFwtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmXFwtNXxnXFwtbW98Z28oXFwud3xvZCl8Z3IoYWR8dW4pfGhhaWV8aGNpdHxoZFxcLShtfHB8dCl8aGVpXFwtfGhpKHB0fHRhKXxocCggaXxpcCl8aHNcXC1jfGh0KGMoXFwtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aVxcLSgyMHxnb3xtYSl8aTIzMHxpYWMoIHxcXC18XFwvKXxpYnJvfGlkZWF8aWcwMXxpa29tfGltMWt8aW5ub3xpcGFxfGlyaXN8amEodHx2KWF8amJyb3xqZW11fGppZ3N8a2RkaXxrZWppfGtndCggfFxcLyl8a2xvbnxrcHQgfGt3Y1xcLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHxcXC1bYS13XSl8bGlid3xseW54fG0xXFwtd3xtM2dhfG01MFxcL3xtYSh0ZXx1aXx4byl8bWMoMDF8MjF8Y2EpfG1cXC1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dChcXC18IHxvfHYpfHp6KXxtdCg1MHxwMXx2ICl8bXdicHxteXdhfG4xMFswLTJdfG4yMFsyLTNdfG4zMCgwfDIpfG41MCgwfDJ8NSl8bjcoMCgwfDEpfDEwKXxuZSgoY3xtKVxcLXxvbnx0Znx3Znx3Z3x3dCl8bm9rKDZ8aSl8bnpwaHxvMmltfG9wKHRpfHd2KXxvcmFufG93ZzF8cDgwMHxwYW4oYXxkfHQpfHBkeGd8cGcoMTN8XFwtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuXFwtMnxwbyhja3xydHxzZSl8cHJveHxwc2lvfHB0XFwtZ3xxYVxcLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8XFwtWzItN118aVxcLSl8cXRla3xyMzgwfHI2MDB8cmFrc3xyaW05fHJvKHZlfHpvKXxzNTVcXC98c2EoZ2V8bWF8bW18bXN8bnl8dmEpfHNjKDAxfGhcXC18b298cFxcLSl8c2RrXFwvfHNlKGMoXFwtfDB8MSl8NDd8bWN8bmR8cmkpfHNnaFxcLXxzaGFyfHNpZShcXC18bSl8c2tcXC0wfHNsKDQ1fGlkKXxzbShhbHxhcnxiM3xpdHx0NSl8c28oZnR8bnkpfHNwKDAxfGhcXC18dlxcLXx2ICl8c3koMDF8bWIpfHQyKDE4fDUwKXx0NigwMHwxMHwxOCl8dGEoZ3R8bGspfHRjbFxcLXx0ZGdcXC18dGVsKGl8bSl8dGltXFwtfHRcXC1tb3x0byhwbHxzaCl8dHMoNzB8bVxcLXxtM3xtNSl8dHhcXC05fHVwKFxcLmJ8ZzF8c2kpfHV0c3R8djQwMHx2NzUwfHZlcml8dmkocmd8dGUpfHZrKDQwfDVbMC0zXXxcXC12KXx2bTQwfHZvZGF8dnVsY3x2eCg1Mnw1M3w2MHw2MXw3MHw4MHw4MXw4M3w4NXw5OCl8dzNjKFxcLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhc1xcLXx5b3VyfHpldG98enRlXFwtL2kudGVzdChhLnN1YnN0cigwLCA0KSkpXG4gICAgICAgICAgICAgICAgY2hlY2sgPSB0cnVlO1xuICAgICAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcbiAgICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH1cblxuICAgIChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGVmZmVjdDogJ3N0LWVmZmVjdC0xJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTUwLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6IGZhbHNlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjb250YWluZXIgPSAkKCcuc3QtY29udGFpbmVyJyksXG5cbiAgICAgICAgICAgIGV2ZW50dHlwZSA9IG1vYmlsZWNoZWNrKCkgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snLFxuXG4gICAgICAgICAgICBnZXRMYXlvdXRDbGFzc2VzID0gZnVuY3Rpb24gKHNpZGViYXIsIGRpcmVjdGlvbikge1xuXG4gICAgICAgICAgICAgICAgdmFyIGxheW91dENsYXNzZXMgPSBzaWRlYmFyLmRhdGEoJ2xheW91dENsYXNzZXMnKTtcblxuICAgICAgICAgICAgICAgIGlmICghIGxheW91dENsYXNzZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRvZ2dsZUxheW91dCA9IHNpZGViYXIuZGF0YSgndG9nZ2xlTGF5b3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdG9nZ2xlTGF5b3V0ID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gdG9nZ2xlTGF5b3V0LnNwbGl0KFwiLFwiKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXIuZGF0YSgnbGF5b3V0Q2xhc3NlcycsIGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxheW91dENsYXNzZXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUmVnRXhwKCdzaWRlYmFyLScgKyBkaXJlY3Rpb24gKyAnKFxcXFxTKyknLCAnaWcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9ICQoJ2h0bWwnKS5nZXQoMCkuY2xhc3NOYW1lLm1hdGNoKG1hdGNoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dENsYXNzZXMgIT09IG51bGwgJiYgbGF5b3V0Q2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dENsYXNzZXMgPSBsYXlvdXRDbGFzc2VzLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhci5kYXRhKCdsYXlvdXRDbGFzc2VzJywgbGF5b3V0Q2xhc3Nlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbGF5b3V0Q2xhc3NlcztcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0U2lkZWJhckRhdGFPcHRpb25zID0gZnVuY3Rpb24oc2lkZWJhcil7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBlZmZlY3Q6IHNpZGViYXIuZGF0YSgnZWZmZWN0JyksXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXk6IHNpZGViYXIuZGF0YSgnb3ZlcmxheScpXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYW5pbWF0aW5nID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygnYW5pbWF0aW5nJykpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYW5pbWF0aW5nJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdhbmltYXRpbmcnKTtcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0cy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0ID0gZnVuY3Rpb24gKGlkLCBvcHRpb25zKSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJyA/ICcjJyArIGlkIDogY29udGFpbmVyLmRhdGEoJ3N0TWVudVRhcmdldCcpLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyID0gJCh0YXJnZXQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmlzKCc6dmlzaWJsZScpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHNpZGViYXIuaGFzQ2xhc3MoJ3NpZGViYXItY2xvc2VkJykpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBlZmZlY3QgPSB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9ucy5lZmZlY3QgPyBvcHRpb25zLmVmZmVjdCA6IGNvbnRhaW5lci5kYXRhKCdzdE1lbnVFZmZlY3QnKSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gc2lkZWJhci5pcygnLmxlZnQnKSA/ICdsJyA6ICdyJyxcbiAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHNpZGViYXIuZ2V0KDApLmNsYXNzTmFtZS5tYXRjaCgvc2lkZWJhci1zaXplLShcXFMrKS8pLnBvcCgpLFxuICAgICAgICAgICAgICAgICAgICBodG1sQ2xhc3MgPSAnc3QtZWZmZWN0LScgKyBkaXJlY3Rpb24gKyBzaXplLFxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVMYXlvdXQgPSBzaWRlYmFyLmRhdGEoJ3RvZ2dsZUxheW91dCcpLFxuICAgICAgICAgICAgICAgICAgICBsYXlvdXRDbGFzc2VzID0gZ2V0TGF5b3V0Q2xhc3NlcyhzaWRlYmFyLCBkaXJlY3Rpb24pLFxuICAgICAgICAgICAgICAgICAgICBldmVudERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ3NpZGViYXIuaGlkZScsIGV2ZW50RGF0YSk7XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl1baHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKGh0bWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5hZGRDbGFzcyhlZmZlY3QpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcyhlZmZlY3QpO1xuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNsYXNzKCdzdC1tZW51LW9wZW4gc3QtcHVzaGVyLW92ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCdodG1sJykucmVtb3ZlQ2xhc3MoaHRtbENsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUxheW91dCkgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKGVmZmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5nZXQoMCkuY2xhc3NOYW1lID0gJ3N0LWNvbnRhaW5lcic7IC8vIGNsZWFyXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoJ3NpZGViYXItY2xvc2VkJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLmhpZGRlbicsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgfSwgZGVmYXVsdHMuZHVyYXRpb24pO1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBvcGVuID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIHNpZGViYXIgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIG9uIG1vYmlsZSwgYWxsb3cgb25seSBvbmUgc2lkZWJhciB0byBiZSBvcGVuIGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjggJiYgY29udGFpbmVyLmhhc0NsYXNzKCdzdC1tZW51LW9wZW4nKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10b2dnbGU9XCJzaWRlYmFyLW1lbnVcIl1baHJlZj1cIicgKyB0YXJnZXQgKyAnXCJdJylcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGVmZmVjdCA9IG9wdGlvbnMuZWZmZWN0LFxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5ID0gb3B0aW9ucy5vdmVybGF5O1xuXG4gICAgICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IHNpZGViYXIuaXMoJy5sZWZ0JykgPyAnbCcgOiAncicsXG4gICAgICAgICAgICAgICAgICAgIHNpemUgPSBzaWRlYmFyLmdldCgwKS5jbGFzc05hbWUubWF0Y2goL3NpZGViYXItc2l6ZS0oXFxTKykvKS5wb3AoKSxcbiAgICAgICAgICAgICAgICAgICAgaHRtbENsYXNzID0gJ3N0LWVmZmVjdC0nICsgZGlyZWN0aW9uICsgc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTGF5b3V0ID0gc2lkZWJhci5kYXRhKCd0b2dnbGVMYXlvdXQnKSxcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0Q2xhc3NlcyA9IGdldExheW91dENsYXNzZXMoc2lkZWJhciwgZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogc2lkZWJhcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLnNob3cnLCBldmVudERhdGEpO1xuXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmFkZENsYXNzKGh0bWxDbGFzcyk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5zaG93KCkucmVtb3ZlQ2xhc3MoJ3NpZGViYXItY2xvc2VkJyk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXIuZGF0YSgnc3RNZW51RWZmZWN0JywgZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuZGF0YSgnc3RNZW51VGFyZ2V0JywgdGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgIHNpZGViYXIuYWRkQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYWRkQ2xhc3MoZWZmZWN0KTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmxheSkgY29udGFpbmVyLmFkZENsYXNzKCdzdC1wdXNoZXItb3ZlcmxheScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hZGRDbGFzcygnc3QtbWVudS1vcGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG4gICAgICAgICAgICAgICAgICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICAgICAgICAgICAgICB9LCAyNSk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvZ2dsZUxheW91dCkgJCgnaHRtbCcpLmFkZENsYXNzKGxheW91dENsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdzaWRlYmFyLnNob3duJywgZXZlbnREYXRhKTtcbiAgICAgICAgICAgICAgICB9LCBkZWZhdWx0cy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRvZ2dsZSA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIHZhciBhID0gYW5pbWF0aW5nKCk7XG4gICAgICAgICAgICAgICAgaWYgKGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBidXR0b24gPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBidXR0b24uYXR0cignaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghIHNpZGViYXIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50QWN0aXZlRWxlbWVudCA9ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpLmxlbmd0aCA/ICQoJ1tkYXRhLXRvZ2dsZT1cInNpZGViYXItbWVudVwiXScpLm5vdCh0aGlzKS5jbG9zZXN0KCdsaScpIDogJCgnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJykubm90KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlRWxlbWVudCA9ICQodGhpcykuY2xvc2VzdCgnbGknKS5sZW5ndGggPyAkKHRoaXMpLmNsb3Nlc3QoJ2xpJykgOiAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmVFbGVtZW50LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlRWxlbWVudC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoJ2h0bWwnKS5oYXNDbGFzcygnc2hvdy1zaWRlYmFyJykpIGFjdGl2ZUVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnc2hvdy1zaWRlYmFyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSAkKCdodG1sJykuYWRkQ2xhc3MoJ3Nob3ctc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFPcHRpb25zID0gZ2V0U2lkZWJhckRhdGFPcHRpb25zKHNpZGViYXIpLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25PcHRpb25zID0ge307XG5cbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ2VmZmVjdCcpKSBidXR0b25PcHRpb25zLmVmZmVjdCA9IGJ1dHRvbi5kYXRhKCdlZmZlY3QnKTtcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ292ZXJsYXknKSkgYnV0dG9uT3B0aW9ucy5vdmVybGF5ID0gYnV0dG9uLmRhdGEoJ292ZXJsYXknKTtcblxuICAgICAgICAgICAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBkYXRhT3B0aW9ucywgYnV0dG9uT3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISBzaWRlYmFyLmhhc0NsYXNzKCdzaWRlYmFyLWNsb3NlZCcpICYmIHNpZGViYXIuaXMoJzp2aXNpYmxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXQoc2lkZWJhci5hdHRyKCdpZCcpLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9wZW4odGFyZ2V0LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgfTtcblxuICAgICAgICAkKCdib2R5Jykub24oZXZlbnR0eXBlLCAnW2RhdGEtdG9nZ2xlPVwic2lkZWJhci1tZW51XCJdJywgdG9nZ2xlKTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5ZG93bicsIG51bGwsICdlc2MnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLmhhc0NsYXNzKCdzdC1tZW51LW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHJlc2V0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgLyogU2lkZWJhciBUb2dnbGUgQmFyICovXG4gICAgICAgICAgICBpZiAoc2lkZWJhci5kYXRhKCd0b2dnbGVCYXInKSkge1xuICAgICAgICAgICAgICAgIHZhciBiYXIgPSAkKCc8YT48L2E+Jyk7XG4gICAgICAgICAgICAgICAgYmFyLmF0dHIoJ2hyZWYnLCAnIycgKyBzaWRlYmFyLmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXRvZ2dsZScsICdzaWRlYmFyLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NpZGViYXItdG9nZ2xlLWJhcicpO1xuXG4gICAgICAgICAgICAgICAgc2lkZWJhci5hcHBlbmQoYmFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LnNpZGViYXIgPSB7XG5cbiAgICAgICAgICAgIG9wZW46IGZ1bmN0aW9uIChpZCwgb3B0aW9ucykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGEgPSBhbmltYXRpbmcoKTtcbiAgICAgICAgICAgICAgICBpZiAoYSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gb3BlbignIycgKyBpZCwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoaWQsIG9wdGlvbnMpIHtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc2V0KGlkLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgb3B0aW9uczogZ2V0U2lkZWJhckRhdGFPcHRpb25zXG5cbiAgICAgICAgfTtcblxuICAgIH0pKCk7XG5cbn0pKGpRdWVyeSk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGRkID0gJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiY29sbGFwc2VcIl0nKTtcblxuICAgIGlmIChkZC5sZW5ndGgpIHtcblxuICAgICAgICAkKCcuc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub2ZmKCdtb3VzZWVudGVyJyk7XG4gICAgICAgICQoJy5zaWRlYmFyIC5zaWRlYmFyLW1lbnUgPiBsaS5kcm9wZG93biA+IGEnKS5vZmYoJ21vdXNlZW50ZXInKTtcbiAgICAgICAgJCgnLnNpZGViYXIgLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9mZignbW91c2VlbnRlcicpO1xuICAgICAgICAkKCcuc2lkZWJhciAuc2lkZWJhci1tZW51ID4gbGkgPiBhJykub2ZmKCdjbGljaycpO1xuICAgICAgICAkKCcuc2lkZWJhcicpLm9mZignbW91c2VsZWF2ZScpO1xuICAgICAgICAkKCcuc2lkZWJhciAuZHJvcGRvd24nKS5vZmYoJ21vdXNlb3ZlcicpO1xuICAgICAgICAkKCcuc2lkZWJhciAuZHJvcGRvd24nKS5vZmYoJ21vdXNlb3V0Jyk7XG4gICAgICAgICQoJ2JvZHknKS5vZmYoJ21vdXNlb3V0JywgJyNkcm9wZG93bi10ZW1wIC5kcm9wZG93bicpO1xuXG4gICAgICAgICQoJy5zaWRlYmFyIHVsLmNvbGxhcHNlJykub2ZmKCdzaG93bi5icy5jb2xsYXBzZScpO1xuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9mZignc2hvdy5icy5jb2xsYXBzZScpO1xuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9mZignaGlkZS5icy5jb2xsYXBzZScpO1xuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9mZignaGlkZGVuLmJzLmNvbGxhcHNlJyk7XG5cbiAgICAgICAgZGQuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5yZW1vdmUoKTtcblxuICAgICAgICBkZC5maW5kKCcuaGFzU3VibWVudScpLnJlbW92ZUNsYXNzKCdkcm9wZG93bicpXG4gICAgICAgICAgICAuZmluZCgnPiB1bCcpLmFkZENsYXNzKCdjb2xsYXBzZScpLnJlbW92ZUNsYXNzKCdkcm9wZG93bi1tZW51IHN1Ym1lbnUtaGlkZSBzdWJtZW51LXNob3cnKVxuICAgICAgICAgICAgLmVuZCgpXG4gICAgICAgICAgICAuZmluZCgnPiBhJykuYXR0cignZGF0YS10b2dnbGUnLCAnY29sbGFwc2UnKTtcblxuICAgICAgICBkZC5maW5kKCcuY29sbGFwc2UnKS5jb2xsYXBzZSh7ICd0b2dnbGUnOiBmYWxzZSB9KTtcblxuICAgICAgICAkKCcuc2lkZWJhciB1bC5jb2xsYXBzZScpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhciBbZGF0YS1zY3JvbGxhYmxlXScpLmdldE5pY2VTY3JvbGwoKS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ29sbGFwc2VcbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdmFyIHBhcmVudHMgPSAkKHRoaXMpLnBhcmVudHMoJ3VsOmZpcnN0JykuZmluZCgnPiBsaS5vcGVuIFtkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJyk7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRzLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXIgdWwuY29sbGFwc2UnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwib3BlblwiKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZGQgPSAkKCcuc2lkZWJhcltkYXRhLXR5cGU9XCJkcm9wZG93blwiXScpO1xuXG4gICAgaWYgKGRkLmxlbmd0aCkge1xuXG4gICAgICAgICQoJy5zaWRlYmFyIHVsLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICAgICAgICAgIC5vZmYoJ3Nob3cuYnMuY29sbGFwc2UnKVxuICAgICAgICAgICAgLm9mZignaGlkZGVuLmJzLmNvbGxhcHNlJyk7XG5cbiAgICAgICAgZGQuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgc2lkZWJhciA9ICQodGhpcyk7XG4gICAgICAgICAgICB2YXIgbmljZSA9IHNpZGViYXIuZmluZCgnW2RhdGEtc2Nyb2xsYWJsZV0nKS5nZXROaWNlU2Nyb2xsKClbIDAgXTtcblxuICAgICAgICAgICAgbmljZS5zY3JvbGxzdGFydChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykpIHJldHVybjtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmFkZENsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJyNkcm9wZG93bi10ZW1wID4gdWwgPiBsaScpLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgc2lkZWJhci5maW5kKCcjZHJvcGRvd24tdGVtcCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBuaWNlLnNjcm9sbGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgc2lkZWJhci5pcygnW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdJykpIHJldHVybjtcbiAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ2xhc3RTY3JvbGxUb3AnLCBuaWNlLmdldFNjcm9sbFRvcCgpKTtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLnJlbW92ZUNsYXNzKCdzY3JvbGxpbmcnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBkZC5maW5kKCcuaGFzU3VibWVudScpLmFkZENsYXNzKCdkcm9wZG93bicpLnJlbW92ZUNsYXNzKCdvcGVuJylcbiAgICAgICAgICAgIC5maW5kKCc+IHVsJykuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKS5yZW1vdmVDbGFzcygnY29sbGFwc2UgaW4nKS5yZW1vdmVBdHRyKCdzdHlsZScpXG4gICAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAgIC5maW5kKCc+IGEnKS5yZW1vdmVDbGFzcygnY29sbGFwc2VkJylcbiAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLXRvZ2dsZScpO1xuXG4gICAgICAgICQoJy5zaWRlYmFyW2RhdGEtdHlwZT1cImRyb3Bkb3duXCJdIC5zaWRlYmFyLW1lbnUgPiBsaS5kcm9wZG93biA+IGEnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghICQodGhpcykucGFyZW50KCcuZHJvcGRvd24nKS5pcygnLm9wZW4nKSAmJiAhICQodGhpcykuY2xvc2VzdCgnLnNpZGViYXInKS5pcygnLnNjcm9sbGluZycpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSAkKHRoaXMpLnBhcmVudCgnLmRyb3Bkb3duJyksXG4gICAgICAgICAgICAgICAgICAgIHQgPSBwLmZpbmQoJz4gLmRyb3Bkb3duLW1lbnUnKS5jbG9uZSgpLnJlbW92ZUNsYXNzKCdzdWJtZW51LWhpZGUnKSxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9ICQodGhpcykucGFyZW50cygnLnNpZGViYXI6Zmlyc3QnKSxcbiAgICAgICAgICAgICAgICAgICAgbSA9IHNpZGViYXIuZmluZCgnLnNpZGViYXItbWVudScpLFxuICAgICAgICAgICAgICAgICAgICBjID0gc2lkZWJhci5maW5kKCc+ICNkcm9wZG93bi10ZW1wJyk7XG5cbiAgICAgICAgICAgICAgICBtLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblxuICAgICAgICAgICAgICAgIGlmICghIGMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAkKCc8ZGl2Lz4nKS5hdHRyKCdpZCcsICdkcm9wZG93bi10ZW1wJykuYXBwZW5kVG8oc2lkZWJhcik7XG4gICAgICAgICAgICAgICAgICAgIGMuaHRtbCgnPHVsPjxsaT48L2xpPjwvdWw+Jyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5zaG93KCk7XG4gICAgICAgICAgICAgICAgYy5maW5kKCcuZHJvcGRvd24tbWVudScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGMgPSBjLmZpbmQoJz4gdWwgPiBsaScpLmNzcyh7b3ZlcmZsb3c6ICd2aXNpYmxlJ30pLmFkZENsYXNzKCdkcm9wZG93biBvcGVuJyk7XG5cbiAgICAgICAgICAgICAgICBwLmFkZENsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICAgICAgdC5hcHBlbmRUbyhjKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICB0b3A6IHAub2Zmc2V0KCkudG9wIC0gYy5vZmZzZXQoKS50b3AsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6ICcxMDAlJ1xuICAgICAgICAgICAgICAgIH0pLnNob3coKTtcblxuICAgICAgICAgICAgICAgIGlmIChzaWRlYmFyLmlzKCcucmlnaHQnKSkge1xuICAgICAgICAgICAgICAgICAgICB0LmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogJzEwMCUnXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0gLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICBpZiAoISAkKHRoaXMpLnBhcmVudCgpLmlzKCcuZHJvcGRvd24nKSkge1xuICAgICAgICAgICAgICAgIHZhciBzaWRlYmFyID0gJCh0aGlzKS5jbG9zZXN0KCcuc2lkZWJhcicpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnLm9wZW4nKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgICAgIHNpZGViYXIuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0gLnNpZGViYXItbWVudSA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5pcygnLmRyb3Bkb3duJykpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0nKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuZmluZCgnI2Ryb3Bkb3duLXRlbXAnKS5oaWRlKCk7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5vcGVuJykucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNpZGViYXJbZGF0YS10eXBlPVwiZHJvcGRvd25cIl0gLmRyb3Bkb3duJykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ29wZW4nKS5jaGlsZHJlbigndWwnKS5yZW1vdmVDbGFzcygnc3VibWVudS1oaWRlJykuYWRkQ2xhc3MoJ3N1Ym1lbnUtc2hvdycpO1xuICAgICAgICB9KS5vbignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCd1bCcpLnJlbW92ZUNsYXNzKCcuc3VibWVudS1zaG93JykuYWRkQ2xhc3MoJ3N1Ym1lbnUtaGlkZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ21vdXNlb3V0JywgJyNkcm9wZG93bi10ZW1wIC5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyLW1lbnUgLm9wZW4nKS5yZW1vdmVDbGFzcygnLm9wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTsiLCJyZXF1aXJlKCcuL19icmVha3BvaW50cycpO1xucmVxdWlyZSgnLi9fc2lkZWJhci1tZW51Jyk7XG5yZXF1aXJlKCcuL19jb2xsYXBzaWJsZScpO1xucmVxdWlyZSgnLi9fZHJvcGRvd24nKTtcbnJlcXVpcmUoJy4vX3NpZGViYXItdG9nZ2xlJyk7IiwiKGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBoZWlnaHQoKSB7XG4gICAgICAgICQoJy5jb3Zlci5vdmVybGF5JykuZmlsdGVyKCc6dmlzaWJsZScpLm5vdCgnW2NsYXNzKj1cImhlaWdodFwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHQgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIGkgPSB0LmZpbmQoJ2ltZzpmaXJzdCcpO1xuXG4gICAgICAgICAgICB0LmhlaWdodChpLmhlaWdodCgpKTtcbiAgICAgICAgICAgICQoJy5vdmVybGF5LWZ1bGwnLCB0KS5pbm5lckhlaWdodChpLmhlaWdodCgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJChkb2N1bWVudCkucmVhZHkoaGVpZ2h0KTtcbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBoZWlnaHQpO1xuXG4gICAgdmFyIHQ7XG4gICAgJCh3aW5kb3cpLm9uKFwiZGVib3VuY2VkcmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNsZWFyVGltZW91dCh0KTtcbiAgICAgICAgdCA9IHNldFRpbWVvdXQoaGVpZ2h0LCAyMDApO1xuICAgIH0pO1xuXG59KShqUXVlcnkpO1xuIiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2hvd0hvdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdbZGF0YS1zaG93LWhvdmVyXScpLmhpZGUoKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSAkKHRoaXMpLmRhdGEoJ3Nob3dIb3ZlcicpO1xuXG4gICAgICAgICAgICBzZWxmLmNsb3Nlc3QocGFyZW50KS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2hvdygpO1xuICAgICAgICAgICAgfSkub24oJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBzaG93SG92ZXIoKTtcblxuICAgIHdpbmRvdy5zaG93SG92ZXIgPSBzaG93SG92ZXI7XG5cbn0pKGpRdWVyeSk7IiwiKGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgc2tpbiA9IHJlcXVpcmUoJy4vX3NraW4nKSgpO1xuXG4gICAgJCgnLnRhYmJhYmxlIC5uYXYtdGFicycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHRhYnMgPSAkKHRoaXMpLm5pY2VTY3JvbGwoe1xuICAgICAgICAgICAgY3Vyc29yYm9yZGVyOiAwLFxuICAgICAgICAgICAgY3Vyc29yY29sb3I6IGNvbmZpZy5za2luc1sgc2tpbiBdWyAncHJpbWFyeS1jb2xvcicgXSxcbiAgICAgICAgICAgIGhvcml6cmFpbGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBvbmVheGlzbW91c2Vtb2RlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBfc3VwZXIgPSB0YWJzLmdldENvbnRlbnRTaXplO1xuICAgICAgICB0YWJzLmdldENvbnRlbnRTaXplID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IF9zdXBlci5jYWxsKHRhYnMpO1xuICAgICAgICAgICAgcGFnZS5oID0gdGFicy53aW4uaGVpZ2h0KCk7XG4gICAgICAgICAgICByZXR1cm4gcGFnZTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuXG4gICAgJCgnLnRhYmJhYmxlIC5uYXYtdGFicyBhJykub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uKGUpe1xuICAgICAgICB2YXIgdGFiID0gJCh0aGlzKS5jbG9zZXN0KCcudGFiYmFibGUnKTtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgdGFyZ2V0UGFuZSA9IHRhcmdldC5hdHRyKCdocmVmJykgfHwgdGFyZ2V0LmRhdGEoJ3RhcmdldCcpO1xuXG4gICAgICAgIC8vIHJlZnJlc2ggdGFicyB3aXRoIGhvcml6b250YWwgc2Nyb2xsXG4gICAgICAgIHRhYi5maW5kKCcubmF2LXRhYnMnKS5nZXROaWNlU2Nyb2xsKCkucmVzaXplKCk7XG5cbiAgICAgICAgLy8gcmVmcmVzaCBbZGF0YS1zY3JvbGxhYmxlXSB3aXRoaW4gdGhlIGFjdGl2YXRlZCB0YWIgcGFuZVxuICAgICAgICAkKHRhcmdldFBhbmUpLmZpbmQoJ1tkYXRhLXNjcm9sbGFibGVdJykuZ2V0TmljZVNjcm9sbCgpLnJlc2l6ZSgpO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsIihmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIHRyZWVfZ2x5cGhfb3B0aW9ucyA9IHtcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICBjaGVja2JveDogXCJmYSBmYS1zcXVhcmUtb1wiLFxuICAgICAgICAgICAgY2hlY2tib3hTZWxlY3RlZDogXCJmYSBmYS1jaGVjay1zcXVhcmVcIixcbiAgICAgICAgICAgIGNoZWNrYm94VW5rbm93bjogXCJmYSBmYS1jaGVjay1zcXVhcmUgZmEtbXV0ZWRcIixcbiAgICAgICAgICAgIGVycm9yOiBcImZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIsXG4gICAgICAgICAgICBleHBhbmRlckNsb3NlZDogXCJmYSBmYS1jYXJldC1yaWdodFwiLFxuICAgICAgICAgICAgZXhwYW5kZXJMYXp5OiBcImZhIGZhLWFuZ2xlLXJpZ2h0XCIsXG4gICAgICAgICAgICBleHBhbmRlck9wZW46IFwiZmEgZmEtY2FyZXQtZG93blwiLFxuICAgICAgICAgICAgZG9jOiBcImZhIGZhLWZpbGUtb1wiLFxuICAgICAgICAgICAgbm9FeHBhbmRlcjogXCJcIixcbiAgICAgICAgICAgIGRvY09wZW46IFwiZmEgZmEtZmlsZVwiLFxuICAgICAgICAgICAgbG9hZGluZzogXCJmYSBmYS1yZWZyZXNoIGZhLXNwaW5cIixcbiAgICAgICAgICAgIGZvbGRlcjogXCJmYSBmYS1mb2xkZXJcIixcbiAgICAgICAgICAgIGZvbGRlck9wZW46IFwiZmEgZmEtZm9sZGVyLW9wZW5cIlxuICAgICAgICB9XG4gICAgfSxcbiAgICB0cmVlX2RuZF9vcHRpb25zID0ge1xuICAgICAgICBhdXRvRXhwYW5kTVM6IDQwMCxcbiAgICAgICAgICAgIGZvY3VzT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHByZXZlbnRWb2lkTW92ZXM6IHRydWUsIC8vIFByZXZlbnQgZHJvcHBpbmcgbm9kZXMgJ2JlZm9yZSBzZWxmJywgZXRjLlxuICAgICAgICAgICAgcHJldmVudFJlY3Vyc2l2ZU1vdmVzOiB0cnVlLCAvLyBQcmV2ZW50IGRyb3BwaW5nIG5vZGVzIG9uIG93biBkZXNjZW5kYW50c1xuICAgICAgICAgICAgZHJhZ1N0YXJ0OiBmdW5jdGlvbihub2RlLCBkYXRhKSB7XG4gICAgICAgICAgICAvKiogVGhpcyBmdW5jdGlvbiBNVVNUIGJlIGRlZmluZWQgdG8gZW5hYmxlIGRyYWdnaW5nIGZvciB0aGUgdHJlZS5cbiAgICAgICAgICAgICAqICBSZXR1cm4gZmFsc2UgdG8gY2FuY2VsIGRyYWdnaW5nIG9mIG5vZGUuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnRW50ZXI6IGZ1bmN0aW9uKG5vZGUsIGRhdGEpIHtcbiAgICAgICAgICAgIC8qKiBkYXRhLm90aGVyTm9kZSBtYXkgYmUgbnVsbCBmb3Igbm9uLWZhbmN5dHJlZSBkcm9wcGFibGVzLlxuICAgICAgICAgICAgICogIFJldHVybiBmYWxzZSB0byBkaXNhbGxvdyBkcm9wcGluZyBvbiBub2RlLiBJbiB0aGlzIGNhc2VcbiAgICAgICAgICAgICAqICBkcmFnT3ZlciBhbmQgZHJhZ0xlYXZlIGFyZSBub3QgY2FsbGVkLlxuICAgICAgICAgICAgICogIFJldHVybiAnb3ZlcicsICdiZWZvcmUsIG9yICdhZnRlcicgdG8gZm9yY2UgYSBoaXRNb2RlLlxuICAgICAgICAgICAgICogIFJldHVybiBbJ2JlZm9yZScsICdhZnRlciddIHRvIHJlc3RyaWN0IGF2YWlsYWJsZSBoaXRNb2Rlcy5cbiAgICAgICAgICAgICAqICBBbnkgb3RoZXIgcmV0dXJuIHZhbHVlIHdpbGwgY2FsYyB0aGUgaGl0TW9kZSBmcm9tIHRoZSBjdXJzb3IgcG9zaXRpb24uXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC8vIFByZXZlbnQgZHJvcHBpbmcgYSBwYXJlbnQgYmVsb3cgYW5vdGhlciBwYXJlbnQgKG9ubHkgc29ydFxuICAgICAgICAgICAgLy8gbm9kZXMgdW5kZXIgdGhlIHNhbWUgcGFyZW50KVxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGlmKG5vZGUucGFyZW50ICE9PSBkYXRhLm90aGVyTm9kZS5wYXJlbnQpe1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERvbid0IGFsbG93IGRyb3BwaW5nICpvdmVyKiBhIG5vZGUgKHdvdWxkIGNyZWF0ZSBhIGNoaWxkKVxuICAgICAgICAgICAgcmV0dXJuIFtcImJlZm9yZVwiLCBcImFmdGVyXCJdO1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBkcmFnRHJvcDogZnVuY3Rpb24obm9kZSwgZGF0YSkge1xuICAgICAgICAgICAgLyoqIFRoaXMgZnVuY3Rpb24gTVVTVCBiZSBkZWZpbmVkIHRvIGVuYWJsZSBkcm9wcGluZyBvZiBpdGVtcyBvblxuICAgICAgICAgICAgICogIHRoZSB0cmVlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBkYXRhLm90aGVyTm9kZS5tb3ZlVG8obm9kZSwgZGF0YS5oaXRNb2RlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyB1c2luZyBkZWZhdWx0IG9wdGlvbnNcbiAgICAkKCdbZGF0YS10b2dnbGU9XCJ0cmVlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBleHRlbnNpb25zID0gWyBcImdseXBoXCIgXTtcbiAgICAgICAgaWYgKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ2RhdGEtdHJlZS1kbmQnKSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgZXh0ZW5zaW9ucy5wdXNoKCBcImRuZFwiICk7XG4gICAgICAgIH1cbiAgICAgICAgJCh0aGlzKS5mYW5jeXRyZWUoe1xuICAgICAgICAgICAgZXh0ZW5zaW9uczogZXh0ZW5zaW9ucyxcbiAgICAgICAgICAgIGdseXBoOiB0cmVlX2dseXBoX29wdGlvbnMsXG4gICAgICAgICAgICBkbmQ6IHRyZWVfZG5kX29wdGlvbnMsXG4gICAgICAgICAgICBjbGlja0ZvbGRlck1vZGU6IDMsXG4gICAgICAgICAgICBjaGVja2JveDogdHlwZW9mICQodGhpcykuYXR0cignZGF0YS10cmVlLWNoZWNrYm94JykgIT09IFwidW5kZWZpbmVkXCIgfHwgZmFsc2UsXG4gICAgICAgICAgICBzZWxlY3RNb2RlOiB0eXBlb2YgJCh0aGlzKS5hdHRyKCdkYXRhLXRyZWUtc2VsZWN0JykgIT09IFwidW5kZWZpbmVkXCIgPyBwYXJzZUludCgkKHRoaXMpLmF0dHIoJ2RhdGEtdHJlZS1zZWxlY3QnKSkgOiAyXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KGpRdWVyeSkpOyIsInJlcXVpcmUoJy4vX3RhYnMnKTtcbnJlcXVpcmUoJy4vX3RyZWUnKTtcbnJlcXVpcmUoJy4vX3Nob3ctaG92ZXInKTsiXX0=
