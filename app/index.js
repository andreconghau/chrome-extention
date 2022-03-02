alert('Init Chrome ext');
console.log("My Chrome ext staring");

let htmlTemplate = `<div id='ig-change-color'>
                        <button class='red' data-color='red'>RED</button>
                        <button class='green' data-color='green'>GREEN</button>
                    </div>`;



window.onload = function() {
    const wrapper = document.querySelector('body>div');
    console.log(wrapper);
    if (wrapper !== null) {
        wrapper.innerHTML += htmlTemplate;
    }

    const buttonObj = document.querySelectorAll('#ig-change-color button');
    const bodyObj = document.querySelector('body header');
    if (buttonObj !== null) {

        buttonObj.forEach(function(item) {
            item.onclick = function() {
                console.log('here');
                this.classList.add('acitve');
                const colorChange = this.getAttribute('data-color');
                console.log(colorChange);
                bodyObj.style.backgroundColor = colorChange;
            }
        })

    }
}