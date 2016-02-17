/**
* Sum
*/
var Sum = (function () {
    function Sum(parameters) {
        this.add = function () {
            var x = [];
            for (var _i = 0; _i < (arguments.length - 0); _i++) {
                x[_i] = arguments[_i + 0];
            }
            var rez = 0;

            x.forEach(function (element) {
                rez += element;
            });

            return rez;
        };
    }
    return Sum;
})();

/**
* Form
*/
var Form = (function () {
    function Form(parameters) {
        var _this = this;
        this.init = function () {
            console.log(_this.sum.add(1, 2, 3, 4, 5));
        };
        this.sum = new Sum(null);
    }
    return Form;
})();

(new Form(null)).init();
