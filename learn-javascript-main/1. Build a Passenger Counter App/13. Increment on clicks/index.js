// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count")

let count = 0

function increment() {
    count = count + 1 //increment
    countEl.innerText = count

    // m2 (no var): document.getElementById("count").innerText = count //store into the html heading
    console.log(count) // for debug
}


