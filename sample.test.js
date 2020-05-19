Feature('sample');

Scenario('test something', (I) => {
    I.amOnPage('/');
    I.waitForVisible('.radiantthemes-custom-button-main.vc_custom_1589899188900');
    console.log('TEST IS SUCCESSFUL!');
});
