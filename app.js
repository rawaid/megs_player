angular.module('playerModule',['ngRoute','ngAudio', 'ngFx', 'ngAnimate'])
.controller("playerController",function($scope,ngAudio, $timeout){

	$scope.nowPlaying = {
		currentTrack:'track1'
	};
	$scope.albArt = {
		art: 'tame.jpg'
	};
	$scope.bgImg = {
		background: 'tame.jpg'
	};

	$scope.track1 = {

	    "track": {
	        "id" : 42,
	        "url" : "sounds/mySound.mp3",
	        "albumArtUrl" : "tame.jpg",
	        "name" : "Let It Happen",
	        "artists" : ["Tame Impala"],
	        "album" : "Let It Happen",
	    },
	    "station": {
	        "id": 42,
	        "name": "rock",
	        "tag0": {
	            "id": 42,
	            "name": "rock",
	            "isActive": 1,
	            "tracks": 17,
	            "stations": 23
	        },
	        "tag1": {
	            "id": 23,
	            "name": "classic rock",
	            "isActive": 1,
	            "tracks": 7,
	            "stations": 30
	        }
	    }
	};

	$scope.track2 = {

	    "track": {
	        "id" : 42,
	        "url" : "sounds/air.mp3",
	        "albumArtUrl" : "iu.jpg",
	        "name" : "Air You Out",
	        "artists" : ["Dave Fol"],
	        "album" : "Ithaca Underground Presents: Vol 1",
	    },
	    "station": {
	        "id": 42,
	        "name": "rock",
	        "tag0": {
	            "id": 42,
	            "name": "rock",
	            "isActive": 1,
	            "tracks": 17,
	            "stations": 23
	        },
	        "tag1": {
	            "id": 23,
	            "name": "classic rock",
	            "isActive": 1,
	            "tracks": 7,
	            "stations": 30
	        }
	    }
	};
	
	
    $scope.audio = ngAudio.load($scope.track1.track.url); // returns NgAudioObject
    $scope.stopTrack = function(){
    	$scope.audio.stop();
    	$timeout($scope.trackChanged, .01);


    };
    $scope.trackChanged = function(){
    	$scope.audio = ngAudio.load($scope.track2.track.url);
    	$scope.nowPlaying.currentTrack = 'track2';
    	$scope.audio.play();

    };
    $scope.bgChanged = function(){
		$scope.bgImg.background = $scope.track2.track.albumArtUrl;
	};
	$scope.albArtChanged = function(){
		$scope.albArt.art = $scope.track2.track.albumArtUrl;
	};

	$scope.getCurrentTrack = function(){
		if ($scope.nowPlaying.currentTrack == 'track1'){
			return $scope.track1;
		}
		else if ($scope.nowPlaying.currentTrack == 'track2'){
			return $scope.track2;
		}
	};

});  

