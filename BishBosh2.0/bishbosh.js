
// Check if a number from 1 to N is divisible by 3, 4, 3 and for.

function bishBosh(N, bish, bosh) {

  for (let i = 1; i <= N; i++)
  {
      let isDivByBish = i%bish == 0;
      let isDivByBosh = i%bosh == 0;
      let isDivByBishAndBosh = isDivByBish && isDivByBosh;

      if (isDivByBishAndBosh) {
        // console.log('Bish-Bosh');
        output.innerHTML += `Bish-Bosh  `;
      }
      else if (isDivByBish) {
      // console.log('Bish');
      output.innerHTML += `Bish  `;
      }
      else if (isDivByBosh) {
        // console.log('Bosh');
        output.innerHTML += `Bosh  `;
      }
      else {
        // console.log(i);
        output.innerHTML += i + `  `;
      }
  }
}


document.querySelector("#inputForm").addEventListener('submit',function(event){
  event.preventDefault();
  const n = document.querySelector('#n').value;
  const bish = document.querySelector('#bish').value;
  const bosh = document.querySelector('#bosh').value;
  output.innerHTML = ''
  bishBosh(n,bish,bosh)

  // alert("N: " + n + "\nBish: " + bish + "\nBosh: "+ bosh)
})