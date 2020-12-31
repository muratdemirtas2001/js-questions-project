//using selectors inside the element
// traversing the dom

const btns=document.querySelectorAll('.question-btn');
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        
        // const question=e.path[4]; you can also reach the element with path

        const question= e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    })
})