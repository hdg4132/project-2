(function (){
const spanEl = document.querySelector('main h2 span'),
     txtArr = ['Back-end Developer', 'Front-end Developer', 'Publisher', 'UI/UX Designer'];

let index = 0;
//txtArr 안에 들은 4문장중 하나 선택해서 한글자씩 쪼개기

let currentTxt = txtArr[index].split('');
//console.log(currentTxt)

function writeTxt(){
    //shift = 배열의 맨 앞부터 보여주고 삭제
    spanEl.textContent += currentTxt.shift();
    //console.log(currentTxt)
    //아직 보여줄 글자가 남아있다면 함수 본인을 계속 진행시킴
    if(currentTxt.length !== 0){
        setTimeout(writeTxt, 60)
    }else{
        //조건문이 모두 끝나면 spanEl의 텍스트를 currentTxt에 다시 집어넣음
        currentTxt = spanEl.textContent.split('')
        setTimeout(deleteTxt,3000)
        
    }
}
function deleteTxt(){
    currentTxt.pop()
    //글자 하나 날릴때마다 남은 글자들을 join명령어로 합쳐줌(따옴표 없애고 단어완전체로 변형)
    spanEl.textContent = currentTxt.join('');
    //current변수 안에 글자가 남아잇다면 계속 자기자신 실행시켜서 한글자씩 날리고 글자 합쳐서 보여줌 
    if(currentTxt.length !== 0 ){
        setTimeout(deleteTxt,50)
    }else{
        index = (index+1)%txtArr.length;
        currentTxt = txtArr[index].split('');
        writeTxt()
    }
    
}
writeTxt()
})();


// 240401 header active 추가
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');

    if(this.window.scrollY>10){
        header.classList.add('on')
    }else{
        header.classList.remove('on')
    }
})

