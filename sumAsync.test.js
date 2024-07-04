const { fetchPromise } = require("./sumAsync")


//async
/* test.todo('the data is peanut butter') , done =>{
    function callback(data){
        try{
            expect(data).toBe('peanut butter')
            done()
        }catch(error){
            done(error)
        }
        fetchData(callback)
    }
} */

    //promises
   /*  test('resolve is peanut butter' , ()=>{
        return expect (fetchPromise()).resolves.toBe('peanut butter')
    })

    test('test fails with error' , ()=>{
        return expect (fetchPromise()).rejects.toThrow('error')
    }) */

        //using async await
test('the data is peanut butter' , async() => {
    const data = await fetchPromise();
    expect(data).toBe('peanut butter')
})