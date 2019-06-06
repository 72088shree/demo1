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
  // $scope.emp = emp;

  //   var users = [
  //     { user: "fred", age: 48 },
  //     { user: "barney", age: 36 },
  //     { user: "fred", age: 40 },
  //     { user: "barney", age: 34 }
  //   ];
  //   var a = _.sortBy(users, [
  //     function(o) {
  //       return o.user;
  //     }
  //   ]);
  //   console.log("users", a);

  //   var a = _.compact([0, 1, false, 2, "", 3]);
  //   console.log("hii", a);

  //   var arr = ["bhagyashri", "kanchan", "tejal"];
  //   var other = _.concat(arr, 2, [3], [[4]]);
  //   console.log(other);

  //   var a = _.chunk(["kanchn", "prachi", "raj", "yash"], 2);
  //   console.log("ans", a);

  //   var a = _.drop(["hii", "bye", "hello"], 0);
  //   console.log("ans", a);
  //   var a = _.join(["ritu", "mahesh", "akash"], "++");
  //   console.log("ans", a);

  //   var c = _.intersection(["raj", "rajesh"], ["raj", "ram"]);
  //   console.log("hii", c);

  //   var array = ["hii", "bye", "hello", "hii", "bye", "hello"];

  //   _.pull(array, "hii", "hello");
  //   console.log(array);

  //   var users = [
  //     { user: "barney", age: 36, active: true },
  //     { user: "fred", age: 40, active: true },
  //     { user: "pebbles", age: 1, active: false }
  //   ];

  //   var a = _.find(users, function(o) {
  //     return o.age < 40;
  //   });
  //   console.log(a);
  //   $scope.a = a;

  //   var b = _.max([4, 2, 8, 6]);
  //   console.log(b);
  //   $scope.b = b;

  //   var b = _.min([4, 2, 8, 6]);
  //   console.log(b);
  //   $scope.b = b;

  var array = [1, 2, 3, 4];
  var evens = _.remove(array, function(n) {
    return n % 2 == 0;
  });

  console.log(array);
  $scope.array= array;




  


  //   var users = [
  //     { user: "fred", age: 48 },
  //     { user: "barney", age: 34 },
  //     { user: "fred", age: 40 },
  //     { user: "barney", age: 36 }
  //   ];

  //   var a = _.orderBy(users, ["user", "age"], ["asc", "desc"]);
  //   console.log("users", a);

  //   $scope.arr = [];

  //   _.times(100, function(n) {
  //     console.log(n);
  //     $scope.arr.push(n);
  //   });
});
