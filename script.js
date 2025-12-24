const skills = [

    { name: "HTML", level: 90 },
    { name: "Javascript ", level: 75 },
    { name: "React", level: 75 },
    { name: "Tailwind", level: 80 },
    { name: "Python", level: 70 },
    { name: "SQL", level: 75 },
    { name: "MS-Excel", level: 85 }


];
document.addEventListener("DOMContentLoaded",()=>{
    const skillList=document.getElementById("skillList");
    if(!skillList) return;
    skills.forEach(skill=>{
        const skillItem=document.createElement("div");
        skillItem.className="skill-item";
        skillItem.innerHTML=`<span class="skill-name">${skill.name}</span>
        <div class="skill-bar">
            <div class="skill-fill" style="width:${skill.level}%"></div>
        </div>
        `;
        skillList.appendChild(skillItem);
    });
});
const menu=document.querySelector('.nav-menu');
const btn=document.createElement('div');
btn.innerHTML='&#9776;';
document.querySelector('.nav-container').appendChild(btn);
function checkscreen(){
    if(window.innerWidth<=768){
        btn.style.display='block';
        menu.style.display='none';
    }
    else{
        btn.style.display='none';
        menu.style.display='flex';
    }
}
        btn.onclick=()=>{
            if(window.innerHTML<=768)
                menu.style.display=menu.style.display==='flex' ? 'none' : 'flex'
        };
checkscreen();
