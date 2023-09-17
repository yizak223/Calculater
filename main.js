document.body.innerHTML+=
`
<article>
    <div id="calulator">
        <div id="result"></div>

        <div id="butns_numbers_math">
            <div id="numbers">
                <button class='press_num'>7</button>
                <button class='press_num'>8</button>
                <button class='press_num'>9</button>
                <button class='press_num'>4</button>
                <button class='press_num'>5</button>
                <button class='press_num'>6</button>
                <button class='press_num'>1</button>
                <button class='press_num'>2</button>
                <button class='press_num'>3</button> 
                <button class='press_num'>0</button> 
                <div id='add_btn'>
                    <button id='dlt'>delete</button>
                    <button id='rst'>reset</button>
                    <button class='save_ans'>Ans</button>
                    <button class='press_num'>.</button>
                </div>
            </div>
            <div id="btn_math">
                <button class='press_operator'>X</button>
                <button class='press_operator'>/</button>
                <button class='press_operator'>+</button>
                <button class='press_operator'>-</button>
                
                
                <div id="equal">
                    <button id='equal_operator'>=</button> 
                </div>
            </div>
        </div>
    </div>
</article>
`

const mainArticle=document.querySelector('article')
const calulator=document.querySelector('#calulator')
const butns_numbers_math=document.querySelector('#butns_numbers_math')
const numbers=document.querySelector('#numbers')
const btn_math=document.querySelector('#btn_math')
const equal=document.querySelector('#equal')
const result=document.querySelector('#result')

const PRESS_NUM=document.querySelectorAll('.press_num')
const PRESS_OPERATOR=document.querySelectorAll('.press_operator')

let firstnum='';
let secondnum='';
isThereOperator=false;

for (const num of PRESS_NUM) {
    result.innerHTML=
        `<span id='numArea'></span>`
        num.addEventListener('click',()=>
    {
        numArea.innerHTML+=
        `${num.textContent}`  
        if(isThereOperator==false){
           firstnum+=num.textContent 
        }
        else{
            secondnum+=num.textContent 
        }
        console.log(firstnum);
        console.log(secondnum);
    }) 
}

let myoperator;
for (const operator of PRESS_OPERATOR) {
    operator.addEventListener('click',()=>
    {
            numArea.innerHTML+=
            `${operator.textContent}` 
            myoperator=operator.textContent
            isThereOperator=true
            console.log(myoperator);
        })
}

equal_operator.addEventListener('click',()=>{
    switch (myoperator) {
        case 'X':
                numArea.innerHTML=
                `${+firstnum*+secondnum}`  
                firstnum='';
                secondnum='';
            return;
        case '-':
                numArea.innerHTML=
                `${+firstnum-+secondnum}` 
                firstnum='';
                secondnum=''; 
            return;
        case '+':
                numArea.innerHTML=
                `${+firstnum+(+secondnum)}` 
                firstnum='';
                secondnum='';  
            return;
        case '/':
                numArea.innerHTML=
                `${+firstnum/+secondnum}` 
                firstnum='';
                secondnum='';  
            return;
        default:
            break;
    }
})
rst.addEventListener('click',()=>{
    result.innerHTML=
        `<span id='numArea'></span>`
        firstnum='';
        secondnum=''; 
        isThereOperator=false
})

dlt.addEventListener('click',()=>{
    // if(!isNaN(numArea.textContent/10))
    // {
      numArea.textContent=Math.floor(numArea.textContent/10) 

    // }
    // else{   
    //     let stringNum=`${numArea.textContent}`
    //     console.log(stringNum);
    //     numArea.textContent=stringNum.substring(0,stringNum.length-1)
    // }
    if(isThereOperator==false){
        // let stringNum=`${numArea.textContent}`
        firstnum=Math.floor(firstnum/10)
     }
     else{
        // let stringNum=`${numArea.textContent}`
         secondnum=Math.floor(secondnum/10)
     }
})


// let isThereOperator=false

// for (const num of PRESS_NUM) {

//         result.innerHTML=
//         `<span id='numArea'></span>`
//     num.addEventListener('click',()=>
//     {
//         numArea.innerHTML+=
//         `${num.textContent}`  
//     }) 
// }

// let c=0
// for (const operator of PRESS_OPERATOR) {

//     operator.addEventListener('click',()=>
//     {
//         // if(isThereOperator==false)
//         // {
//             numArea.innerHTML=
//             `${operator.textContent}` 
//             isThereOperator=true  
//             // if (isThereOperator==true) {
//             //     result.innerHTML+=
//             // `<span id=secondNumArea${c++}></span>`
//             // }
//         },{once:true})
       

//             for (const num of PRESS_NUM) {
//                 // removeEventListener('click',operator)
//                 num.addEventListener('click',()=>
//                 {
//                     secondNumArea0.innerHTML+=
//                     `${num.textContent}`  
//                 },{once:true}) 
//             }
//         }
    


  







// if (isThereOperator==false) {
//     for (const num of PRESS_NUM) {
//                 result.innerHTML=
//                 `<span id='numArea'></span>
//                 <span id='operatorArea'></span>`
//             num.addEventListener('click',()=>
//                 {
//                     console.log(isThereOperator);
//                     numArea.innerHTML+=
//                     `${num.textContent}` 
//                 }) 
//             }
//         }
// else if(isThereOperator){
//     console.log(isThereOperator);
//     for (const num of PRESS_NUM) {
//     result.innerHTML+=
//     `<span id='secondNumArea'></span>`
//     num.addEventListener('click',()=>
//     {
//         secondNumArea.innerHTML+=
//         `${num.textContent}` 
//     })
//     }
// }     
    


    

// result.innerHTML=
// `<span id='numArea'></span>
// <span id='operatorArea'></span>`
// num.addEventListener('click',()=>
// {
//  console.log(isThereOperator);
//     numArea.innerHTML+=
//     `${num.textContent}` 
// })

    