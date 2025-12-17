
function Minumum(Brr)
{
    let iCnt = 0;
    let iMin = 0;

    iMin = Brr[0];
    for(iCnt = 0; iCnt < Brr.length; iCnt++)
    {
        if(iMin > Brr[iCnt])
        {
            iMin = Brr[iCnt];
        }
    }

    return iMin;
}

function main()
{
    const Arr = [10,20,30,40,50];
    let iRet = 0;

    iRet = Minumum(Arr);

    console.log("Minimum is : ", iRet);
}

main();