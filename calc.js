function ent_numb(val) {
    document.getElementById("val_numb").value += val;
}
function clear_inp() {
    document.getElementById("val_numb").value = null
}
function backSpace() {
    let val_numb = document.getElementById("val_numb")
    val_numb.value = val_numb.value.slice(0, -1)
    // console.log(val_numb);
}
function calculate_ans() {
    let val_numb = document.getElementById("val_numb")
    console.log(val_numb.value)
    val_numb.value = eval(val_numb.value)
}