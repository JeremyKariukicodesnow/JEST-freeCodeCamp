/* test('two plus two is four' , ()=>{
    expect(2+2).toBe(4)
}) */

/* test('object assignment' , ()=>  {
    const data = {one: 1 , two:2}
    expect(data).toEqual({one:1 , two:2})
}) */

/* 
test('n is truthy' , ()=>  {
    const n = 1
    expect(n).toBeTruthy()
}) */

/* test('n is falsy' , ()=>  {
    const n = 0
    expect(n).toBeFalsy()
}) */

const {myFunction} = require('./sum')

    test('throws on invalid input' , ()=>{
        expect(()=> {
            myFunction('meow')
        }).toThrow()
    })