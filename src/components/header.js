
const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
const headCard = document.createElement('div');
const dateSpan = document.createElement('span');
const titleH1 = document.createElement('h1');
const tempSpan = document.createElement('span');

headCard.classList.add('header');
dateSpan.classList.add('date');
titleH1.classList.add('h1');
tempSpan.classList.add('temp');

dateSpan.textContent = date;
titleH1.textContent = title;
tempSpan.textContent = temp;

headCard.appendChild(dateSpan);
headCard.appendChild(titleH1);
headCard.appendChild(tempSpan);

return headCard;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const appendToMe = document.querySelector(selector);
  const myNewHeader = Header("Lambda Times", "January 6, 2021", "26°")
  appendToMe.appendChild(myNewHeader);

}

export { Header, headerAppender }
