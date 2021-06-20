const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const select = document.querySelector('.select');
const sound = new Audio('./sound.mp3')
let input = ''

let array = ''


function start() {
    let idx = 0
    container.style.width = array.length * 30 + 'px'
    array.forEach((item) => {
        let ele = document.createElement('div')
        ele.classList.add('element')
        ele.classList.add('ele-' + idx)
        ele.innerText = item
        idx += 1
        ele.style.height = item * 20 + 'px'
        container.append(ele)
    })
    let count = 1;
    for (let i = 0; i < idx; i++) {
        for (let j = 0; j < idx - i - 1; j++) {
            setTimeout(function () {
                if (Number(array[j]) > Number(array[j + 1])) {
                    let tmp = array[j]
                    array[j] = array[j + 1]
                    array[j + 1] = tmp
                }
                let index = 0
                array.forEach((item) => {
                    let elem = document.querySelector('.ele-' + index)
                    elem.style.backgroundColor = 'orangered'
                    elem.style.height = item * 20 + 'px'
                    if (index == j || index == j + 1)
                        elem.style.backgroundColor = 'green'
                    elem.innerText = item
                    index += 1
                })
                sound.play()
            }, count * 700)
            count += 1
        }
    }
    setTimeout(() => {
        let ele = document.querySelectorAll('.element')

        ele[0].style.backgroundColor = 'orangered'
        if (ele.length > 1) {
            ele[1].style.backgroundColor = 'orangered'
        }
        btn.removeAttribute('disabled')
    }, count * 700)
}

btn.addEventListener('click', () => {
    if (select.value == 'bubble sort') {
        btn.setAttribute('disabled', 'disabled')
        container.innerHTML = ''
        input = document.querySelector('.input').value
        array = input.split(',')
        start()
    }

}, false)