const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')


function Counter() {
let countNum = 0
const makeElement= (teg, attr_n, attr_v, content) => {
    let output = document.createElement(teg)
    output.setAttribute(attr_n,attr_v)
    output.textContent = content
    return output
}
const updeteCounter=(n) => {
    if(countNum + n < 0) {
        return
    }
    countNum += n
    number.textContent = countNum
}
// const delCounter = () => {
//     const parentElement = counter.parentNode;

// parentElement.removeChild(counter);
// }

const delCounter = (e) => {
    console.log(e.target.closest('.counter'))
    e.target.closest('.counter').remove()
}


const counter = makeElement('div' , 'class', 'counter','')
const btnInc = makeElement('button', 'class', 'btn-inc', '+')
const number = makeElement('h3', 'class', 'number', '0')
const btnDec = makeElement('button', 'class', 'btn-dec', '-')
const btnClr = makeElement('button', 'class', 'btn-clr', '0')
const btnDel = makeElement('button', 'class', 'btn-del', 'X')



btnInc.addEventListener('click', () => updeteCounter(1))
btnDec.addEventListener('click', () => updeteCounter(-1))
btnClr.addEventListener('click', () => updeteCounter(-countNum))
btnDel.addEventListener('click', delCounter)


counter.append(btnInc)
counter.append(number)
counter.append(btnDec)
counter.append(btnClr)
counter.append(btnDel)

return counter

counter.append(btnInc,number,btnDec,btnClr,btnDel)

}
// root.append(Counter())
// root.append(Counter())
// root.append(Counter())

const hdlAddCounter = () => (
    root.append(Counter())
)

btnAdd.addEventListener('click', hdlAddCounter)
Nantawoot
