
// Check if a number from 1 to N is divisable by 3, 4, 3 and for.
 
function bishBosh(N)
{
    let result = [];
    
    for (let i = 1; i <= N; i++)
        {
        let divByThree = i%3 == 0;
        let divByFour = i%4 == 0;
        let divByThreeAndFour = divByThree && divByFour;
        if (divByThree){
            console.log('Bish');
        }
        else if (divByFour){
            console.log('Bosh');
        }
        else if (divByThreeAndFour){
            console.log('Bish-Bosh');
        }
        else{
            console.log(i);
        } 
    }
}
//N=100
bishBosh(100);