var  SessionCtrl = ['$scope', '$http', 'SessionService',
	function($scope, $http, SessionService) {

		SessionService.getSessions().then(function(data) {
			// $scope.timeslots = sessionData.Timeslots;
			// $scope.sessions = sessionData.Sessions;
			// $scope.speakers = sessionData.SessionSpeakers;
			// $scope.rooms = sessionData.Rooms;


			$scope.timeslots = SessionService.parseResults(data);


		});
	}
];