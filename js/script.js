//=================== Hamburger Menu ====================
const hamb = document.querySelector(".hamb");
const nav = document.querySelector(".nav-mobile");

hamb.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
})

/*======================================================*/
//=================== Rotating Title ====================

var typeText = document.querySelector(".typeText")
var textToBeTypedArr = ["Konrad", "Programmer", "Designer"]
var index = 0
var isAdding = true
var textToBeTypedIndex = 0

function playAnim() {
    setTimeout(function () {
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
            if (index > textToBeTypedArr[textToBeTypedIndex].length) {
                isAdding = false
                setTimeout(playAnim(), 2000)
                return
            } else {
                index++
            }
        } else {
            if (index == 0) {
                isAdding = true
                textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
            } else {
                index--
            }
        }
        playAnim()
    }, 200)
}
playAnim()
