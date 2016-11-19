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