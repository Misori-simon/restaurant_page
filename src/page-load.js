const pageLoad = () => {
  function navlinkGenerator(parent, arr, className) {
    const tabsArr = [];
    for (let i = 0; i < arr.length; i += 1) {
      const li = document.createElement('li');
      li.classList.add(className);

      const a = document.createElement('a');
      a.setAttribute('href', '#');
      a.innerHTML = arr[i];

      li.appendChild(a);
      parent.appendChild(li);
      tabsArr.push(li);
    }
    return tabsArr;
  }

  const contentDiv = document.getElementById('content');

  const header = document.createElement('header');
  header.classList.add('header');
  // for logo and tagline
  const logoWrap = document.createElement('a');
  logoWrap.setAttribute('href', 'index.html');
  logoWrap.setAttribute('title', 'home');
  logoWrap.classList.add('logo');

  const logoImage = document.createElement('img');
  logoImage.setAttribute('src', './logo.png');
  logoImage.setAttribute('alt', 'fembe eats');
  logoWrap.appendChild(logoImage);

  const tagline = document.createElement('p');
  tagline.classList.add('tagline');
  tagline.innerHTML = 'Eat fresh, stay healthy';
  logoWrap.appendChild(tagline);

  header.appendChild(logoWrap);

  // for navigation
  const nav = document.createElement('nav');
  nav.classList.add('nav-wrap');

  const ul = document.createElement('ul');
  ul.classList.add('nav');

  const tabs = navlinkGenerator(ul, ['Home', 'Order', 'Contact US'], 'nav-items');


  nav.appendChild(ul);

  header.appendChild(nav);

  contentDiv.appendChild(header);
  return tabs;
};

export default pageLoad;
