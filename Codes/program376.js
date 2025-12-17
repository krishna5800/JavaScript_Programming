// Arithematic class ->> Add and Sub

class Arithematic
{
    constructor(A, B)
    {
        this.No1 = A;
        this.No2 = B;
    }

    Addition()
    {
        return (this.No1 + this.No2);
    }

    Substraction()
    {
        return (this.No1 - this.No2);
    }
}

function main()
{
    let obj = new Arithematic(11,10);
    let Ret = 0;

    Ret = obj.Addition();
    console.log("Addition is : " , Ret);

    Ret = obj.Substraction();
    console.log("Substraction is : " , Ret);
}

main();