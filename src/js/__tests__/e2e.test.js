describe('Card form', () => {
    test('should add .active class for card type', async() => {
        awaitpage.goto(baseUrl);
        constform = awaitpage.$('[data-id=visa]');
        constinput = awaitform.$('[data-id=number]');
        awaitinput.type('4111111111111111');
        constsubmit = awaitform.$('[data-id=submit]');
        submit.click();
        awaitpage.waitForSelector('[data-id=visa].active');
    });
});
