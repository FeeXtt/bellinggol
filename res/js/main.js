

const ham = document.getElementById("bellingham");
const ron = document.getElementById("roncek");

let goal = new Audio('./res/img/gol.mp3')
let sui = new Audio('./res/img/suiii.mp3')

ham.onclick = () => {
    goal.play()
}
ron.onclick = () => {
    sui.play()
}