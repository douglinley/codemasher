angular.module('services', [])
	.factory('SessionService', ['$http', '$q', function($http, $q) {

		return {

			parseResults: function(data) {
	        	var sessions = data.Sessions;
	        	var timeslots = data.Timeslots;
	        	var rooms = data.Rooms;
	        	var sessionSpeakers = data.SessionSpeakers;
	        	var speakers = data.Speakers;

	        	// merge speaker objects into the sessionSpeakers objects to 
	        	// make for easy access when applying speakers to sessions

	        	for(var i = 0; i < sessionSpeakers.length; i++) {
	        		for(var j = 0; j < speakers.length; j++) {
	        			if(speakers[j].ID === sessionSpeakers[i].SpeakerID) {
	        				sessionSpeakers[i].Speaker = speakers[j];
	        			}
	        		}
	        	}



	        	for(var i = 0; i < timeslots.length; i++) {

	        		var timeslotSessions = []
	        		for(var j = 0; j < sessions.length; j++) {

	        			if(sessions[j].TimeSlotID === timeslots[i].ID) {
	        				timeslotSessions.push(sessions[j]);
	        			}

	        			for(var k = 0; k < rooms.length; k++) {
	        				if(sessions[j].ID === rooms[k].SessionID) {
	        					sessions[j].Room = rooms[k];
	        				}
	        			}

	        			for(var k = 0; k < sessionSpeakers.length; k++) {
	        				if(sessions[j].ID === sessionSpeakers[k].SessionID) {
	        					sessions[j].Speaker = sessionSpeakers[k].Speaker;
	        				}
	        			}

	        			for(var k = 0; k < rooms.length; k++) {
	        				if(sessions[j].LocationID === rooms[k].ID) {
	        					sessions[j].Room = rooms[k];
	        				}
	        			}

	        		}

	        		timeslots[i].Sessions = timeslotSessions;
	        	}

	        	return timeslots;
	        },

			getSessions: function() {
	            var deferred = $q.defer();

	            var url = 'http://localhost:3000/sessions';
	            $http.get(url).success(function(data) {
	                deferred.resolve(data);
	            }).error(function() {
	                deferred.reject();
	            });

	            return deferred.promise;
	        }

	        
		}
}]);