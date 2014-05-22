'use strict';

/* jasmine specs for filters go here */

describe('filter', function () {

    beforeEach(module('productFilters'));


    describe('checkmark', function () {

        it('should convert boolean values to unicode checkmark or cross',
            inject(function (checkmarkFilter) {
                expect(checkmarkFilter(true)).toBe('\u2713');
                expect(checkmarkFilter(false)).toBe('\u2718');
            }));
    });

    describe('joinByName', function () {

        it('should convert a map contains object with field name to a string with space delimiter and values of names',
            inject(function (joinByNameFilter) {
                var map = [
                    { name: 'read_letter'},
                    { name: 'send_hybrid'},
                    { name: 'send_letter'},
                    { name: 'pay'},
                    { name: 'safe'}
                ];
                expect(joinByNameFilter(map, 'name=')).toBe('name=read_letter send_hybrid send_letter pay safe');
            }));
        it('should convert an empty or null map to string with that contains no values ',
            inject(function (joinByNameFilter) {
                var map = [
                ];
                expect(joinByNameFilter(map, 'name=')).toBe('name=');
                expect(joinByNameFilter(null, 'name=')).toBe('name=');
            }));
    });

    describe('formatFileSize', function () {

        it('should format different byte values correctly to KB, MB, GB',
            inject(function (formatFileSizeFilter) {
                expect(formatFileSizeFilter(1)).toBe('1.00 B');
                expect(formatFileSizeFilter(1023)).toBe('1023.00 B');
                expect(formatFileSizeFilter(1024)).toBe('1.00 KB');
                expect(formatFileSizeFilter(1100000)).toBe('1.05 MB');
                expect(formatFileSizeFilter(1100000000)).toBe('1.02 GB');
            }));
    });
});
