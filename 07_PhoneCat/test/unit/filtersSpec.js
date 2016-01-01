'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {

    beforeEach(function () {
        module('phonecatFilters');
    });

    describe('checkmark filter', function () {

        it('should return unicode right and unicode x when boolean values are passed', inject(function(checkmarkFilter) {
            expect(checkmarkFilter(true)).toBe('\u2713');
            expect(checkmarkFilter(false)).toBe('\u2718');

        }));

    });
});