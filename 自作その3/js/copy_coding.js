
// const nameSet = (username,userage) => {
//   console.log(`はじめまして！僕の名前は${username}です！`);
//   console.log(`年齢は${userage}歳です！`)
//   console.log('よろしくお願いします！');
//   return username==='まひろ' && userage === 18;
// };

// const return2 =() => {
//   if (nameSet('まひ',18)){
//     console.log('まひろさんというのですね');
//   }else{
//     console.log('もう一度確認');
//   }
// };

// return2();

// const getMyClass = document.querySelectorAll('.menu');
// getMyClass.forEach(element =>{
//   element.addEventListener('click',() => {
//   element.style.color = 'red';
//   });
// });

// const today = new Date();

// const year = today.getFullYear();

// // Storingは文字列に変換するためのもの？
// const month = String(today.getMonth() + 1).padStart(2,0);

// const day = String(today.getDate()).padStart(2,'0');

// const formatDate =`${year}年${month}月${day}日`;

// console.log(formatDate);

// const animalsName = ["わんこ","にゃんこ","うさちゃん"];

// const animalsAge = [5,3,7];

// // for(let i = 0; i < animalsName.length; i++){
// //   console.log(animalsName[i]);
// // }

// const animalsGreeting = (index) => {
  
//   console.log(
//     `こんにちは！
// 僕の名前は${animalsName[index]}です！
// 年齢は${animalsAge[index]}歳です！
// よろしくお願いいたします！`);


//   if(index === 0){
//     console.log(
//       `あなたはわんこさんですね！
// 私の名前は${animalsName[1]}です！
// 年齢は${animalsAge[1]}歳です！
// こちらこそよろしくお願いいたします！`);
//   }
//   else{
//     console.log(
//       `こんにちは！
// 私の名前は${animalsName[2]}です！
// 年齢は${animalsAge[2]}歳です！
// よろしくお願いいたします！`);
//   }
  
//   return{
//     name:animalsName[index],
//     age:animalsAge[index]
//   };
  
// }

// const animalDate = animalsGreeting(1);
// console.log(`${animalDate.name}で${animalDate.age}`);

// const personDate = {
//   name:'まひろ',
//   age:31,
//   address:`岡山県`
// };

// console.log(personDate.name);

// personDate.name = 'ひろ';
// console.log(personDate.name);

// class Humans {
//   constructor(gender,rase,age){
//     this.gender = gender;
//     this.rase = rase;
//     this.age = age;
//   }

//   human(){
//     console.log(`この人は${this.gender}です`);
//   }
// }

// const mike =new Humans('man','american',18);

// mike.human();

// const books = {
//   name:'吾輩は猫である',
//   price:800,
//   pages:250,
//   bookGreet: () => {
//     console.log(`
//     この本は${books.name}です。
//     値段は${books.price}です
//     ページ数は${books.pages}です`);
//   }
// }

// books.bookGreet();

// console.log(document.getElementsByClassName('menu'));

// const menuList = document.getElementsByClassName('menu');

// for(let i = 0;i < menuList.length; i++){
//   console.log(menuList[i]);
// }

// console.log(menuList.length);

// console.log(document.querySelectorAll('.menu'));

// const menuList2 =document.querySelectorAll('.menu');

// for(let i = 0;i < menuList2.length;i++){
//   console.log(menuList2[i]);
// }

// console.log(menuList2.length);

// const menuList2Div =document.createElement('div');


// // menuList2Div.textContent = 'divを作成';
// // menuList2Div.innerHTML = '<a href="#">aタグを作成</a>';

// // document.querySelector('#head-nav').appendChild(menuList2Div);

// menuList2.forEach(menuClick => {
// menuClick.addEventListener ('click',() => {
//   console.log('クリックされました！');
// });
// });

// const AboutLi =document.querySelector('#About ul > li');

// AboutLi.addEventListener('click',() =>{
//   const AList = document.createElement('li');
//   AList.textContent ='Liを作成';
//   document.querySelector('ul').appendChild(AList);
// });

// const ContactForm =document.getElementById('contact-text-1');

// // document.addEventListener('DOMContentLoaded',() =>{
// //   const ContactF = document.getElementById('contact-text-1');
// //   if (ContactF){
// //     ContactF.focus();
// //   }

// // // パスワードの作成時に設定しておくと便利かも！↓

// //   ContactF.addEventListener('click',() =>{
// //   console.log(ContactF.value.length + '文字');
// // });
// // });



// // TOPに戻るボタン

const ScrollToTopButton = () =>{

window.addEventListener('scroll',() =>{
  const scrollValue = document.scrollingElement.scrollTop;
  const backButton =document.getElementById('BackToHome');
  if(scrollValue >= 300) {
    backButton.classList.add('show');
    backButton.style.opacity = ('1');
    backButton.style.pointerEvents = ('auto');
  }else{
    backButton.classList.remove('show');
    backButton.style.opacity = ('0');
    backButton.style.pointerEvents = ('none')
  }
});

};

ScrollToTopButton();


// const hello = () =>{
//   console.log('hello!');
// console.log('hello!');
// setTimeout(() =>{
// console.log('hello!!!!!!');
// },3000);
// console.log('hello!2');
// };

// hello();



// setTimeout(() =>{
//   try{
//   noFunction();
// }catch(error){
//   console.log('存在しないアカウントです');
//   console.log('新規会員登録をしてください');
// }finally{
//   hello();
// }
//   notFunction();
// },3000);


// const errorM =() =>{
//   const aName ='まひろ';
// if(aName !== 'まひろ'){
//   throw new Error('名前が間違っています！');
// }
// console.log('Name:',aName);
// };

// try{
//   errorM();
// }catch(e){
//   console.error(e.message);
// };














