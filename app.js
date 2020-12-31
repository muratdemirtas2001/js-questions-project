// we have 2 option 1-traversing the dom 2-using selectors inside the element
//2-using selectors inside the element

const questions=document.querySelectorAll('.question');
// console.log(questions);
questions.forEach((question)=>{
    // console.log(question);
    btn= question.querySelector('.question-btn');
    btn.addEventListener('click',()=>{
        questions.forEach((item)=>{
            if(question !== item){
                item.classList.remove('show-text');
            }
        })

        question.classList.toggle('show-text');
    })


})


// 1-traversing the dom
// const btns=document.querySelectorAll('.question-btn');
// btns.forEach((btn)=>{
//     btn.addEventListener('click',(e)=>{
        
//         // const question=e.path[4]; you can also reach the element with path

//         const question= e.currentTarget.parentElement.parentElement;
          
//         question.classList.toggle('show-text');
//     })
// })


