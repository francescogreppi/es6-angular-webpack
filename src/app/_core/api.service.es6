export var ApiService  = ['$http',
    function ApiService($http) {
        //in this case urlBase is the endpoint itself
        var urlBase = 'http://private-5d708-interviewfront.apiary-mock.com/transactions';

        function getData () {
            return $http.get(urlBase);
        };
    //revealing module pattern
	return {
        get: getData
    };
}]
