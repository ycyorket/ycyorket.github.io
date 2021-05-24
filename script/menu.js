let menu = [
    {id: "hc", text: 'HTML与CSS', number: 1},
    {id: "ac", text: 'CSS进阶', number: 1},
    {id: "j", text: 'Javascript', number: 1},
    {id: "r", text: 'React', number: 1},
    {id: "bn", text: '浏览器与网络', number: 2},
    {id: "p", text: '性能', number: 1},
    {id: "d", text: '设计', number: 1},
    {id: "s", text: 'web安全', number: 1},
]

function fillMenu(){
    for(let i of menu){
        console.log(i)
        let anchor = document.getElementById(i.id);
        anchor.innerHTML = i.text + "(" + i.number + ")"
    }
}