const asset = require('chai').assert;
const app = require('../app');


describe('App', function()
{
    describe('Hello World',function(){
        it('should return Hello Wolrd', function()
        {
            let output = app.helloWorld();
            asset.equal(output,'Hello World');
        })
        it('Output should be type of string',function(){
            let output = app.helloWorld();
            asset.typeOf(output,'string');
        })
    })
 
    describe('Multiply numbers', function(){
        it('It should reutrn multiply of two numbers', function()
    {
        let output= app.multiplyNumbers(5,2);
        asset.equal(output,10);
    })
    it('Output should be greater than 10',function(){
        let output = app.multiplyNumbers(6,2);
        asset.isAbove(output,10);
    })
    })
    
})