angular.module('myApp', ['dx']);
function MyCtrl($scope, $http, $q) {
    $scope.chartSettings = {
        dataSource: new DevExpress.data.DataSource({ 
            load: function () {
                var def = $.Deferred();
                $http({ method: 'GET', url: 'https://sampleservices.devexpress.com/api/Categories' }).success(function (data) {
                    def.resolve(data);
                });
                return def.promise();
            }
        }),
        series: {
            argumentField: 'CategoryName',
            valueField: 'CategoryID',
            name: 'Categories',
            type: 'bar',
            color: '#ffa500'
        }
    };
}
