
// Check if a number from 1 to N is divisible by 3, 4, 3 and for.

function bishBosh(N, bish, bosh) {

  for (let i = 1; i <= N; i++)
  {
      let isDivByBish = i%bish == 0;
      let isDivByBosh = i%bosh == 0;
      let isDivByBishAndBosh = isDivByBish && isDivByBosh;
      if (isDivByBish) {
        console.log('Bish');
        }
        else if (isDivByBosh) {
          console.log('Bosh');
        }
        else if (isDivByBishAndBosh) {
          console.log('Bish-Bosh');
        }
        else {
          console.log(i);
        }
  }
}

bishBosh(100, 3, 4);