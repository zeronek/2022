// // console.log('03');



// // var a = 1;
// // var b = a;
// // b = 2;
// // console.log(a, b);

// // var a = [1];
// // var b = a;
// // b[0] = [2];
// // console.log(a, b);

// // // 참조 reference
// // var a = { x: 1 };
// // var b = a;
// // b.x = 2;
// // console.log(a, b);


// // function byValue(count) {
// //     count = count + 2;
// //   }
// //   var count = 3;
// //   byValue(count);
// //   console.log(count); //3
  
// //   //call by reference
// //   function byReference(count) {
// //     count.push('2');
// //   }
// //   var count = ['1'];
// //   byReference(count);
// //   console.log(count); // ["1","2"]


// // var isMAn = true;
// // var gender  = ""
// //   if (isMan) {
// //       gender = '남자';
// //     // 표현식이 true일경우 블럭 코드 실행
    
// //   } else {
// //     gender = '여자';
// //   }
  
// // function log(str){
// //     console.log(str);
// // }

// // var isDelete = confirm('삭제하실?');
// // if(isDelete){

// // }

// // if (confirm(삭제하실?)){

// // }

// // function a(){
// //     console.log('a');
// //     function b(){}
// // }

// // (function() {
// //     var a = 1;
// //     console.log(a);
    
// //   })();

// var name = 'FE';
// var age = 28;
// var play = function() {};
// var data = { company: 'kakao' };
// var fruits = ['사과', '바나나'];

var text = 'abc def ghi jkl abc def'; // 대상 문자열
var testReg = /abc/; // 찾을 문자열
var result = testReg.test(text);

console.log(result); // true