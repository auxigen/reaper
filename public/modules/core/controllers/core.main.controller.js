(function () {
    "use strict";
    angular.module("Spectre").controller("coreMainCtrl", ["$scope", '$timeout', 'imageService', function($scope, $timeout, imageService){
        $scope.images = [
            "http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg",
            "http://i.cdn.turner.com/asfix/repository//8a250ba13f865824013fc9db8b6b0400/thumbnail_8336877768336012.jpg",
            "http://i.cdn.turner.com/asfix/repository/8a250ba13f865824013fc9db8b6b0400/rick-and-morty-pilot.jpg",
            "http://ia.media-imdb.com/images/M/MV5BMTQ4MzgyNzQ2Nl5BMl5BanBnXkFtZTgwODQ0OTQzNjE@._V1_UX477_CR0,0,477,268_AL_.jpg",
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-5-Meeseeks-and-Destroy.jpg",
            "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/insert_main_wide_image/public/13_1.jpg?itok=CxuuPIIS",  
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-4-M-Night-Shaym-Aliens-.jpg",
            "http://s3cf.recapguide.com/img/tv/138/1x7/Rick-and-Morty-Season-1-Episode-7-31-1e6c.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/cc/20/47/cc2047866c7bc5da798a3325a84df989.jpg",
            "http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg",
            "http://i.cdn.turner.com/asfix/repository//8a250ba13f865824013fc9db8b6b0400/thumbnail_8336877768336012.jpg",
            "http://i.cdn.turner.com/asfix/repository/8a250ba13f865824013fc9db8b6b0400/rick-and-morty-pilot.jpg",
            "http://ia.media-imdb.com/images/M/MV5BMTQ4MzgyNzQ2Nl5BMl5BanBnXkFtZTgwODQ0OTQzNjE@._V1_UX477_CR0,0,477,268_AL_.jpg",
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-5-Meeseeks-and-Destroy.jpg",
            "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/insert_main_wide_image/public/13_1.jpg?itok=CxuuPIIS",  
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-4-M-Night-Shaym-Aliens-.jpg",
            "http://s3cf.recapguide.com/img/tv/138/1x7/Rick-and-Morty-Season-1-Episode-7-31-1e6c.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/cc/20/47/cc2047866c7bc5da798a3325a84df989.jpg",
            "http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg",
            "http://i.cdn.turner.com/asfix/repository//8a250ba13f865824013fc9db8b6b0400/thumbnail_8336877768336012.jpg",
            "http://i.cdn.turner.com/asfix/repository/8a250ba13f865824013fc9db8b6b0400/rick-and-morty-pilot.jpg",
            "http://ia.media-imdb.com/images/M/MV5BMTQ4MzgyNzQ2Nl5BMl5BanBnXkFtZTgwODQ0OTQzNjE@._V1_UX477_CR0,0,477,268_AL_.jpg",
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-5-Meeseeks-and-Destroy.jpg",
            "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/insert_main_wide_image/public/13_1.jpg?itok=CxuuPIIS",  
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-4-M-Night-Shaym-Aliens-.jpg",
            "http://s3cf.recapguide.com/img/tv/138/1x7/Rick-and-Morty-Season-1-Episode-7-31-1e6c.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/cc/20/47/cc2047866c7bc5da798a3325a84df989.jpg",
            "http://cdn3.thr.com/sites/default/files/2015/07/rick_and_morty_s02_still.jpg",
            "http://i.cdn.turner.com/asfix/repository//8a250ba13f865824013fc9db8b6b0400/thumbnail_8336877768336012.jpg",
            "http://i.cdn.turner.com/asfix/repository/8a250ba13f865824013fc9db8b6b0400/rick-and-morty-pilot.jpg",
            "http://ia.media-imdb.com/images/M/MV5BMTQ4MzgyNzQ2Nl5BMl5BanBnXkFtZTgwODQ0OTQzNjE@._V1_UX477_CR0,0,477,268_AL_.jpg",
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-5-Meeseeks-and-Destroy.jpg",
            "http://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/insert_main_wide_image/public/13_1.jpg?itok=CxuuPIIS",  
            "http://www.watchcartoononline.com/thumbs/Rick-and-Morty-Episode-4-M-Night-Shaym-Aliens-.jpg",
            "http://s3cf.recapguide.com/img/tv/138/1x7/Rick-and-Morty-Season-1-Episode-7-31-1e6c.jpg",
            "https://s-media-cache-ak0.pinimg.com/736x/cc/20/47/cc2047866c7bc5da798a3325a84df989.jpg",
                        ];
        
        
        $scope.items = [];
        for (var i = 0; i < 1000; i++) {
          $scope.items.push(i);
        };
        
        var colors = ["#ffe0b2","#ffb74d","#ff9800","#f57c00","#e65100"];
        
        
        
        angular.extend($scope, {
            center: {
                lat: 51.505,
                lng: -0.09,
                zoom: 8
            }
        });
        
        /*
        angular.element(document).ready(function () {
            console.log('page loading completed');
            

            $timeout(function() {
                var map = L.map('map').setView([51.505, -0.09], 13);

                L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXV4aWdlbiIsImEiOiJyRmVXQ19ZIn0.pTEl7aturhVa5RpuSAElzQ', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);

                L.marker([51.5, -0.09]).addTo(map)
                    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
                    .openPopup();
                    map.invalidateSize(true)
                });
        });
        
        */
        $scope.page = 0;
        $scope.images = [];
        $scope.busy = false;
        $scope.exhausted = false;
        $scope.loadMore = function() {
            if (!$scope.busy && !$scope.exhausted) {
                var promise = imageService.query({page: $scope.page}).$promise;
                promise.then(function(data) {
                    $scope.busy = true;
                    if (data.length == 0) {
                        $scope.exhausted = true;
                    } else {
                        angular.forEach(data, function(obj){
                            var desc = obj.description,
                                width = desc.match(/width="(.*?)"/)[1],
                                height = desc.match(/height="(.*?)"/)[1];

                            obj.actualHeight  = height;
                            obj.actualWidth = width;
                            $scope.images.push(obj);
                        });
                    }
                }).finally(function(){
                    $scope.busy = false;
                })
                $scope.page++;
            }
        };

            
            /*
            if(vm.loadingMore) return;
            vm.page++;
            // var deferred = $q.defer();
            vm.loadingMore = true;
            var promise = imageService.query({page: vm.page}).$promise;
            promise.then(function(data) {
                angular.forEach(data, function(obj){
                    var desc = obj.description,
                        width = desc.match(/width="(.*?)"/)[1],
                        height = desc.match(/height="(.*?)"/)[1];

                    obj.actualHeight  = height;
                    obj.actualWidth = width;
                    $scope.pics.push(obj);
                });

                vm.loadingMore = false;

            }, function() {
              vm.loadingMore = false;
            });
            return promise;
            */
            
        $scope.refresh = function(){
            angularGridInstance.gallery.refresh();
        }
        
    }])
    
    .service('imageService',['$q','$resource',function($q,$resource){
        var data = $resource('api/images', {
            user: '@user'
        }, {
            query:{
                method:'GET',
                isArray: true,
            }
        });
        return data;
    }])
}());