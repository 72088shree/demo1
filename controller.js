var myApp = angular.module("mymodule", []);
myApp.controller("mycontroller", function($scope) {
  var emp = [
    {
      Name: "bhagyashri",
      Age: 22,
      city: "mumbai",
      gender: "female"
    },
    {
      Name: "kanchan",
      Age: 21,
      city: "pune",
      gender: "female"
    },
    {
      Name: "kajal",
      Age: 20,
      city: "thane",
      gender: "female"
    },
    {
      Name: "tejal",
      Age: 35,
      city: "panvel",
      gender: "female"
    },
    {
      Name: "roshani",
      Age: 50,
      city: "kalyan",
      gender: "female"
    }
  ];
  //   var a = [];
  //   var a = _.cloneDeep(emp);
  function check(n) {
    if (n.Age > 30) {
      return n;
    } else {
      return null;
    }
  }
  var a = _.map(emp, function(n) {
    if (n.Age < 30) {
      return n;
    }
  });
  console.log("a ", a);
  a = _.compact(a);
  console.log("a data", a);
  $scope.emp = a;
});
