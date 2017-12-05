Array.prototype.shuffle = function() {
  let array = this;
  let len = array.length;
  for (let i = len - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const tBody = document.querySelector('.j_t_body');
const allRow = tBody.children;

let resultConst = {
  A: [...Array(10).fill(0)],
  B: [...Array(10).fill(0)],
  C: [...Array(10).fill(0)],
  D: [...Array(10).fill(0)],
  E: [...Array(10).fill(0)],
  F: [...Array(10).fill(0)],
  G: [...Array(10).fill(0)],
  H: [...Array(10).fill(0)],
  I: [...Array(10).fill(0)],
  J: [...Array(10).fill(0)]
}

let testArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

function paint(resultConstNew){
  for (let key in resultConstNew) {
    let index = testArray.indexOf(key)
    let row = allRow[index];
    let cols = row.children;
    let result = resultConstNew[key];
    for (let i = 0, len = result.length; i < len; i++) {
      cols[i + 1].innerHTML = Math.round(result[i] / 100) / 10 + '%';
    }
  }
}

function shuffle() {
  let resultConstNew = JSON.parse(JSON.stringify(resultConst));
  for (let i = 0; i < 100000; i++) {
    let test2 = [].concat(testArray);
    test2.shuffle();
    for (let j = 0; j < test2.length; j++) {
      resultConstNew[test2[j]][j] = resultConstNew[test2[j]][j] + 1;
    }
  }
  paint(resultConstNew);
}

function simpleSort(){
  let resultConstNew = JSON.parse(JSON.stringify(resultConst));
  for (let i = 0; i < 100000; i++) {
    let test2 = [].concat(testArray);
    test2.sort(() => Math.random() > .5)
    for (let j = 0; j < test2.length; j++) {
      resultConstNew[test2[j]][j] = resultConstNew[test2[j]][j] + 1;
    }
  }
  paint(resultConstNew);
}

function init() {
  document.querySelector('.j_shuffle_sort').addEventListener('click', function() {
    shuffle();
  })
  document.querySelector('.j_simple_sort').addEventListener('click', function() {
    simpleSort();
  })
}

window.addEventListener('load', function() {
  init();
})