export class TransactionController {
    constructor(ApiService){
		//api service is injected and used to hit the api
		//api service in _core folder
		this.ApiService = ApiService;
		this.getData();
    }
	getData(){
		this.ApiService.get().then((response)=>{
			this.list = response.data.transactions;
		}, (error)=>{
			console.info(error);
		})
	}

}

TransactionController.$inject = ['ApiService'];