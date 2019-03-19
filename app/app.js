angular.module("expensesApp", ['ngMaterial', 'md.data.table', 'ngMessages'])
.config([
    "$httpProvider",
    "$locationProvider",
    function( $httpProvider, $locationProvider) {}])

.controller('expensesViewController', ['$scope','expensesServ', function ($scope,expensesServ) {

    expense = this

    $scope.expense = {
        name: '',
        description: '',
        amount: 0
    }

    $scope.expensesList = [];

    expense.$onInit = () =>{
        expense.getExpenses();
    }

    expense.getExpenses = () => {
        console.log("geads")
        expensesServ.getExpenses().then(res =>{
            $scope.expensesList = res.data
            console.log(res)
        }).catch(err =>{
            console.log(err)
        })
    }
    $scope.addExpense = (expense) => {
        expensesServ.createExpense(expense).then(res => {
            console.log(res)
            $scope.expensesList.push(expense)

        }).catch(err => {
            console.log(err)
        });
    }
    $scope.scopeExpense = (expense, index) => {

        $scope.expense = {
            _id: expense._id,
            name:expense.name,
            description: expense.description,
            amount: expense.amount
        }

    }

    $scope.editExpense = (expense,id) => {
        console.log(expense)

        data = {
            name:expense.name,
            description: expense.description,
            amount: expense.amount
        }

        expensesServ.editExpense(data,id).then(res => {
            console.log(res)
            $scope.expense = {
                _id: '',
                name: '',
                description: '',
                amount: 0
            }

        }).catch(err => {
            console.log(err)
        });
    }

    $scope.deleteExpense = (id,index) => {

        expensesServ.deleteExpense(id).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        });
        $scope.expensesList.splice(index,1);
 


    }

}]);