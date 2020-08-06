/**
 * @name shuffleElements
 * @param {*} items
 * @description The function is used to shuffle the items
 * @returns shuffledItems
 */
const shuffleElements = (elements) => {
  let shuffledElements = elements.slice(0);
  let temp;
  let i = shuffledElements.length;
  let random;
  while (--i) {
    random = Math.floor(i * Math.random());
    temp = shuffledElements[random];
    shuffledElements[random] = shuffledElements[i];
    shuffledElements[i] = temp;
  }
  return shuffledElements;
}

window.onload = () => {
  let list = document.getElementById("shuffle-sort-tiles");

  /**
   * @name shuffleNodes
   * @param none
   * @description method to shuffle the tiles on click of shuffle button
   * @returns none
   */
  const shuffleTiles = () => {
    let nodes = list.children;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffleElements(nodes);
    domManipulation(nodes);
  }

  /**
   * @name domManipulation
   * @param nodes
   * @description method to manipulate dom nodes
   * @returns none
   */
  const domManipulation=(nodes)=>{
    let i=0;
    const fragment = document.createDocumentFragment();
    while (i < nodes.length) {
      fragment.appendChild(nodes[i]);
      ++i;
    }
    list.appendChild(fragment);
  }

  /**
   * @name sortTiles
   * @param none
   * @description method to sort the tiles on click of sort button
   * @returns none
   */
  const sortTiles = () => {
    let items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
      if (items[i].nodeType == 1) {
        itemsArr.push(items[i]);
      }
    }

    itemsArr.sort((a, b) => {
      return a.innerHTML == b.innerHTML
        ? 0
        : a.innerHTML > b.innerHTML
        ? 1
        : -1;
    });

    domManipulation(itemsArr);
  }

  // On-click button events

  document.getElementById("sort-btn").onclick = sortTiles;
  document.getElementById("shuffle-btn").onclick = shuffleTiles;
};
