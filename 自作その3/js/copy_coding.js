
const nameSet = (username,userage) => {
  console.log(`はじめまして！僕の名前は${username}です！`);
  console.log(`年齢は${userage}歳です！`)
  console.log('よろしくお願いします！');
  return username==='まひろ' && userage === 18;
};

const return2 =() => {
  if (nameSet('まひ',18)){
    console.log('まひろさんというのですね');
  }else{
    console.log('もう一度確認');
  }
};

return2();

const getMyClass = document.querySelectorAll('.menu');
getMyClass.forEach(element =>{
  element.addEventListener('click',() => {
  element.style.color = 'red';
  });
});





