const asset = require('chai').assert;
const app = require('../app');


describe('App', function()
{
    it('should return Hello Wolrd', function()
    {
        asset.equal(app(),'Hello World');
    })
})