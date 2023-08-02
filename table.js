function spinRoulette() {
    const roulette = document.getElementById("roulette");
    let deg = Math.floor(Math.random() * 360 + 720);
    roulette.style.transform = `rotate(${deg}deg)`;
}
function resetRoulette() {
    const roulette = document.getElementById("roulette");
    roulette.style.transform = "rotate(0deg)";
}