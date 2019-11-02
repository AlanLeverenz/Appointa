var functionThatReturnsAPromise = () => new Promise ((res,rej) => 
{
    setTimeout(function(){
        res("done")},
        1000
    )
})

functionThatReturnsAPromise()
.then((data_return) =>
console.log(data_return));



