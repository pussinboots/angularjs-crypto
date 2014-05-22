'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe('Epost App', function () {
    angular.scenario.matcher('toTrim', function (expected) {
        return this.actual.trim() === expected;
    });

    describe('inbox view', function () {
        beforeEach(function () {
            browser().navigateTo('/assets/products-e2e.html');
            // is needed to set the configuration cookie (is a bug has to befixed in the future)
            browser().navigateTo('/assets/products-e2e.html');
        });

        it('should show inbox page with 2 emails', function () {
            browser().navigateTo('#/profile');
            //browser().navigateTo('/assets/products-e2e.html#/inbox');
            expect(browser().location().url()).toBe('/profile');
            expect(element('.name').count()).toBe(2);
            expect(element('.name').text()).toTrim('COMMERZBANK AG');
            expect(element('.value').text()).toTrim('1504.75');
        });
    });
});
