(function () {
    "use strict";
    angular.module("Spectre", ['ngResource', 'ngMaterial', 'angularGrid', 'infinite-scroll']);
}());

angular.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 500)