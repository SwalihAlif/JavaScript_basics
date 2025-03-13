function outer() {
    let outerVar = "Iam outer var";
    
    function inner() {
        let innerVar = "Iam inner var";
        console.log(outerVar);
        console.log(innerVar);
    }
    inner();
}
outer();