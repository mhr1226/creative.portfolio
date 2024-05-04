console.log(45+18);
console.log(30-12);
console.log(15*6);
console.log(30/3);
console.log(45%8);

console.log('45+18');
console.log('今日の天気は'+'晴れ');
console.log('今日の天気は'+'曇り');

let userName;

userName='まひろ';

var userNumber=80;

console.log(userNumber);

userName='はは';

console.log(userName);

const userPhone='iphone'

console.log(userPhone);

const bigNumber=45

const smallNumber=18

if(bigNumber > smallNumber){
  console.log('45は18より大きいです');
}else{
  console.log('これは間違いです');
}

let randomNumber=Math.floor(Math.random() * 5);

console.log(randomNumber);

if(randomNumber>1 && randomNumber<3){
  console.log('大当たりです！');
}else if(randomNumber===3 ||randomNumber===1){
  console.log('惜しい！外れです');
}else{
  console.log('残念、外れです');
}

switch(randomNumber){
  
  case 1:
    console.log('惜しい！外れです');
    break;

  case 2:
    console.log('大当たりです！');
    break;

  case 3:
    console.log('惜しい！少し外れです');
    break;

  default:
    console.log('はずれー');
    break;
}

for (let i = 50 ; i>=2; i-=5){
  console.log(i);
}

const userFirstname=['前原','田中','高木','茂木','松丸'];

userFirstname[5]='マイケル'

console.log(userFirstname);

console.log(68/(1.7*1.7));

for(let i=0;i<userFirstname.length;i++){
  console.log(userFirstname[i]);
}


let Number0 =31;

if(Number0 %2 ===0 && Number0 %5 ===0){
  console.log('2と5の倍数です');

}else if(Number0 %3 === 0){
  console.log('3の倍数です');
}else{
  console.log(Number0);
}












