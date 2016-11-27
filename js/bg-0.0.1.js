(function(window){
    'use strict';
    function define_BG(){
        var BG = {};

        /* ---------
           UTILITY
           --------- */

        /** 
        * @description Converts the value to a number, then checks if it is a number
        * @param {anything} val
        * @returns {number} The number as a interger or as 0
        */
        BG.notNumber = function(val){
            val = Number(val);
            if (isNaN(val)) {
                return 0;
            }
            return val;
        };

        /** 
        * @description Converts value to a number
        * @param {number} num
        * @returns {number} The Number as an integer
        */
        BG.toNumber = function(num, msg) {
            if(msg === undefined) msg = 'BG.toNumber';
            num = Number(num);
            if(isNaN(num)) {
                throw new Error("expected a number in " + msg + ".");
            } else {
                return num;
            }
        };

        /** 
        * @description Checks if a number is positive
        * @param {number} num
        * @returns {number} The Number
        */
        BG.isPositive = function(num, msg) {
            if(msg === undefined) msg = 'BG.isPositive';
            num = this.toNumber(num, msg);
            if(num < 0) {
                throw new Error("expected a positive number in " + msg + ".");
            } else {
                return num;
            }
        };

        /** 
        * @description Checks if a number is negative
        * @param {number} num
        * @returns {number} The Number
        */
        BG.isNegative = function(num, msg) {
            if(msg === undefined) msg = 'BG.isNegative';
            num = this.toNumber(num, msg);
            if(num > 0) {
                throw new Error("expected a negative number in " + msg + ".");
            } else {
                return num;
            }
        };

        /** 
        * @description Checks if a number is a natural number
        * @param {number} num
        * @returns {number} The Number
        */
        BG.isNatural = function(num, msg) {
            if(msg === undefined) msg = 'BG.isNatural';
            num = this.isPositive(num, msg);
            if (Number.isInteger(num)) {
                return num;
            } else {
                throw new Error("expected a natural number in " + msg + ".");
            }
        };

        /* ---------
           DICE ROLL
           --------- */

        /** 
        * @description Randomly gives a number from x to Y multiple times
        * @param {number} x
        * @param {number} y
        * @param {number} times
        * @returns {number} the Sum of random numbers
        */
        BG.diceRoll = function(x, y, times, msg) {
            if(msg === undefined) msg = 'BG.diceRoll';
            if (times == undefined) {
                times = 1;
            } else {
                times = BG.isNatural(times, msg);
            }
            if (y == undefined) {
                y = 1;
            } else {
                y = BG.isNatural(y);
            }
            if (x == undefined) {
                throw new Error("expected a number in " + msg + ".");
            } else {
                x = BG.isNatural(x);
            }

            var result = 0;
            var arr = [x, y];
            arr = arr.sort(); // TODO: use BG.sort
            var roll;
            for (var i = 1; i <= times; i++) {
                roll = Math.floor(Math.random() * (arr[1] - arr[0] + 1) + arr[0]); 
                result += roll;
            }
            return result;
        };

        /** 
        * @description Simulates dice roll from given number of sides multiple times
        * @param {number} sides
        * @param {number} times (optional)
        * @returns {number} the Sum of all dice rolls
        */
        BG.dX = function(sides, times) {
            return this.diceRoll(sides, 1, times, 'BG.dX');
        };

        /** 
        * @description Simulates roll of a d4 die multiple times
        * @param {number} times (optional)
        * @returns {number} the Sum of all d4 dice rolls
        */
        BG.d4 = function(times) {
            return this.diceRoll(4, 1, times, 'BG.d4');
        };

        /** 
        * @description Simulates roll of a d6 die multiple times
        * @param {number} times (optional)
        * @returns {number} the Sum of all d6 dice rolls
        */
        BG.d6 = function(times) {
            return this.diceRoll(6, 1, times, 'BG.d6');
        };

        /** 
        * @description Simulates roll of a d8 die multiple times
        * @param {number} times (optional)
        * @returns {number} the Sum of all d8 dice rolls
        */
        BG.d8 = function(times) {
            return this.diceRoll(8, 1, times, 'BG.d8');
        };

        /** 
        * @description Simulates roll of a d10 die multiple times
        * @param {number} times (optional)
        * @returns {number} the Sum of all d10 dice rolls
        */
        BG.d10 = function(times) {
            return this.diceRoll(10, 1, times, 'BG.d10');
        };

        /** 
        * @description Simulates roll of a d12 die multiple times
        * @param {number} times (optional)
        * @returns {number} the Sum of all d12 dice rolls
        */
        BG.d12 = function(times) {
            return this.diceRoll(12, 1, times, 'BG.d12');
        };

        /** 
        * @description Simulates roll of a d20 die multiple times
        * @param {number} times (optional)
        * @returns {number} the Sum of all d20 dice rolls
        */
        BG.d20 = function(times) {
            return this.diceRoll(20, 1, times, 'BG.d20');
        };

        /** 
        * @description Simulates roll of a d100 die multiple times
        * @param {number} times (optional)
        * @returns {number} the Sum of all d100 dice rolls
        */
        BG.d100 = function(times) {
            return this.diceRoll(100, 1, times, 'BG.d100');
        };

        /** 
        * @description Simulates roll of a variable-range die multiple times
        * @param {number} x (optional)
        * @param {number} y
        * @param {number} times (optional)
        * @returns {number} the Sum of all variable-range dice rolls
        */
        BG.dXY = function(x, y, times) {
            return this.diceRoll(x, y, times, 'BG.dXY');
        };

        /* ---------
           ARRAYS
           --------- */

        /** 
        * @description Checks if array is an array
        * @param {array} array 
        * @returns {array} array
        */
        BG.isArray = function(array, msg) {
            if(msg === undefined) msg = 'BG.isArray';
            if(Array.isArray(array) == false) {
                throw new Error("expected an array in " + msg + ".");
            } else {
                return array;
            }
        };

        /** 
        * @description Removes specific number from array multiple times
        * @param {array} array 
        * @param {array} num 
        * @returns {array} array
        */
        BG.removeNumber = function(array, num, msg) {
            if(msg === undefined) msg = 'BG.removeNumber';
            array = this.isArray(array, msg);
            num = this.toNumber(num, msg);
            for (var i = 0; i < array.length; i++) {
                if (array[i] === num) {
                    array.splice(i, 1);
                    i--;
                }
            }
            return array;
        };

        /** 
        * @description Removes all zeros from array
        * @param {array} array 
        * @returns {array} array
        */
        BG.removeZeros = function(array) {
            return this.removeNumber(array, 0, 'BG.removeZeros');
        };

        return BG;
    }
    //define globally if it doesn't already exist
    if(typeof(BG) === 'undefined'){
        window.BG = define_BG();
    }
    else{
        console.log("BG already defined.");
    }
})(window);