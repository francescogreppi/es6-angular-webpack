export var ApiService  = ['$http',
    function ApiService($http) {

        var urlBase = 'http://private-5d708-interviewfront.apiary-mock.com/transactions';

        function getData () {
            return $http.get(urlBase);
        };
    
	return {
        get: getData
    };
}]
