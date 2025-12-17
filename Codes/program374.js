// not allowed (ONLY ONE CONSTRUCTOR IS ALLOWED IN JAVASCRIPT)
class Demo
{
    constructor()     
    {
        this.No1 = 0;
        this.No2 = 0;

        console.log("Inside Defalut constructor()");
    }

    constructor(A, B)
    {
        this.No1 = A;
        this.No2 = B;

        console.log("Inside Parametrised constructor()");
    }
};

function main()
{
    let obj1 = new Demo();
    let obj2 = new Demo(10, 11);

    console.log(obj1.No1);
    console.log(obj1.No2);

    console.log(obj2.No1);
    console.log(obj2.No2);
}

main();