angular.module('monprospecteur').constant('consts', {
    appName: 'Monprospecteur Challenger',
    version: '1.0',
    owner: 'Anderson Rodrigues',
    year: '2021',
    site: 'git link',
    apiUrl: 'http://localhost:3003/api',
    oapiUrl: 'http://localhost:3003/oapi',
    userKey: '_primeira_app_user'
}).run(['$rootScope', 'consts', function ($rootScope, consts) {
    $rootScope.consts = consts
}])