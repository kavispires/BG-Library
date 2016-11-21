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
        * @param {number} times
        * @returns {number} the Sum of all dice rolls
        */
        BG.dX = function(sides, times) {
            return this.diceRoll(sides, 1, times, 'BG.dX');
        };

        /** 
        * @description Simulates roll of a d4 die multiple times
        * @param {number} times
        * @returns {number} the Sum of all d4 dice rolls
        */
        BG.d4 = function(times) {
            return this.diceRoll(4, 1, times, 'BG.d4');
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