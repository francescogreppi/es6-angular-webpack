export class TransactionController {
    constructor(ApiService){
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