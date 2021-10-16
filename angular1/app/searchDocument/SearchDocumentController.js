(function () {
    angular.module('primeiraApp').controller('SearchDocumentCtrl', [
        '$http',

        SearchDocumentController
    ])

    function SearchDocumentController($http) {
        const vm = this       
   
        vm.getDocuments = function () {
            const url = 'http://localhost:3003/api/documents'          
            const address = { address: vm.filter };
            console.log(address);
            $http.post(`${url}`, address).then(resp => {
                console.log(resp.data);
                vm.data = [];
                vm.data = resp.data;
            }).catch(function (resp) {
                console.log(resp.data.errors);
            })
        }
        
    }
})()


