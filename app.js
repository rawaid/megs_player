angular.module('playerModule',['ngAudio'])
.controller("playerController",function($scope,ngAudio, $timeout){
	
	$scope.bgImg = {
		background: 'tame.jpg'

	};
	console.log('current background img: ' + $scope.bgImg.background)
	
    $scope.audio = ngAudio.load("sounds/mySound.mp3"); // returns NgAudioObject
    $scope.stopTrack = function(){
    	$scope.audio.stop();
    	$timeout($scope.trackChanged, .01);


    };
    $scope.trackChanged = function(){
    	$scope.audio = ngAudio.load("sounds/newSound.mp3");
    	//$scope.bgImg.background = 'https://f1.bcbits.com/img/a0699927521_2.jpg';
    	//console.log($scope.bgImg.background);
    	console.log('audio loaded');
    	$scope.audio.play();

    };
    $scope.bgChanged = function(){
		console.log('background changed!');
		$scope.bgImg.background = 'reader.jpg';
		$timeout($scope.$apply(), 10000);
		console.log('new bg img: ' + $scope.bgImg.background);
	};


});  