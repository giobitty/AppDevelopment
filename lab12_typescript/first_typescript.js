var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// ---- EXE 3
console.log("------ Exemple 3 : unknown type-----");
//unknown similar to 'any'
var b;
b = 10;
console.log("b = 10", typeof (b));
b = "Martha";
console.log("b = Martha", typeof (b));
b = true;
console.log("b = true", typeof (b));
// EXE 4
console.log("------ Exemple 4 : enum type -----");
var Countries;
(function (Countries) {
    Countries[Countries["USA"] = 0] = "USA";
    Countries[Countries["Canada"] = 1] = "Canada";
    Countries[Countries["Mexico"] = 2] = "Mexico";
})(Countries || (Countries = {}));
var USA = Countries.USA;
var Canada = Countries.Canada;
var Mexico = Countries.Mexico;
console.log("Class object of Canada ".concat(Canada));
console.log("Class object of Mexico ".concat(Mexico));
console.log("Class object of USA ".concat(USA));
// EXE 5
console.log("------ Exemple 5 : data type classes -----");
// can use the property link, if data type is explicit ( :string)
var username = "Ann Smith";
var character_username = username.length;
console.log("Username ".concat(username, " has ").concat(character_username, " characters"));
// if the data is implicit 
var firstname = 'Mario';
var character_firstname = firstname.length;
console.log("User first name ".concat(firstname, " has ").concat(character_firstname, " characters"));
console.log("------ Exemple 6 : return type function -----");
function get_time() {
    return new Date().getHours();
}
console.log("The time is ".concat(get_time(), "h "));
console.log("------ Exemple 7 : void functions -----");
function greeting() {
    console.log('Welcome to Angular data type!');
}
// call the function
greeting();
console.log("------ Exemple 8 : functions w/ parameters -----");
function get_sum(num1, num2, name) {
    var result = name + ", the sum is " + (num1 + num2);
    return result;
}
console.log(get_sum(2, 3, "Peter"));
console.log("------ Exemple 9 : optional parameters -----");
function sum_total(n1, n2) {
    if (n2 !== undefined) {
        return n1 + n2;
    }
    else {
        return 0;
    }
}
console.log("The sum is ".concat(sum_total(5, 9)));
console.log("The sum is ".concat(sum_total(5)));
console.log("The sum is ".concat(sum_total(5, 9)));
// console.log(`The sum is ${sum_total(5)}`)
console.log("------ Exemple 10 : spread syntax -----");
function get_average() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    var total = 0;
    var count = n.length;
    for (var i = 0; i < count; i++) {
        total += n[i];
    }
    return count === 0 ? 0 : total / count;
}
console.log("The average is ".concat(get_average(10, 6, 2)));
// EXE 11 CLASS AND METHODS
console.log("------ Exemple 11 : Class -----");
var Car = /** @class */ (function () {
    // constructor
    function Car(brand, model, year_manufacture) {
        this.brand = brand;
        this.model = model;
        this.year_manufacture = year_manufacture;
    }
    Car.prototype.year = function () {
        console.log("The car was manufactured in ".concat(this.year_manufacture));
    };
    return Car;
}());
// create a modal for class car
var usercar = new Car('Fiat', 'Panda', 1998);
console.log("Car brand = ".concat(usercar.brand));
usercar.year();
// EXE 12 Inherited CLASS 
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.save = function () {
        console.log("Registration Successful");
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sale = function () {
        console.log("x item was sold");
    };
    return Customer;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.salary = function () {
        console.log('Salary paid');
    };
    return Employee;
}(Customer));
var person1 = new Person;
console.log('Calling method save from persone');
person1.save();
console.log('\nCalling method sale from customer');
var customer1 = new Customer;
customer1.sale();
console.log('\nCalling method save from person');
var employee1 = new Employee;
employee1.save();
