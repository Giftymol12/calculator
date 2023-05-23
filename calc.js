function buttonclick(val) {
    document.getElementById('display').value += val
}
function clearScreen() {
    document.getElementById('display').value = "";
}
function equalClick() {
    var text = document.getElementById('display').value
    var result = eval(text)
    document.getElementById('display').value = result
}