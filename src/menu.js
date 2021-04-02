const menu = (items) => {
  function menuItemGenrator(parent, arr) {
    for (let i = 0; i < arr.length; i += 1) {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-items');

      const menuItemLeft = document.createElement('div');
      menuItemLeft.classList.add('left');

      const image = document.createElement('img');
      image.classList.add('food-icon');
      image.setAttribute('src', `${arr[i].image}`);

      menuItemLeft.appendChild(image);

      const menuItemRight = document.createElement('div');
      menuItemRight.classList.add('right');

      const foodName = document.createElement('h3');
      foodName.classList.add('food-name');
      foodName.innerHTML = arr[i].name;

      menuItemRight.appendChild(foodName);

      const controls = document.createElement('div');
      controls.classList.add('food-controls');

      const regularPrice = document.createElement('p');
      regularPrice.classList.add('regular-price');
      regularPrice.innerHTML = `XAF ${arr[i].regularPrice}`;

      controls.appendChild(regularPrice);

      const salePrice = document.createElement('p');
      salePrice.classList.add('sale-price');
      salePrice.innerHTML = `XAF ${arr[i].salePrice}`;

      controls.appendChild(salePrice);

      const orderBtn = document.createElement('button');
      orderBtn.classList.add('order-btn');
      orderBtn.innerHTML = 'order';

      controls.appendChild(orderBtn);

      menuItemRight.appendChild(controls);

      const info = document.createElement('p');
      info.classList.add('food-info');
      info.innerHTML = arr[i].info;

      menuItemRight.appendChild(info);

      menuItem.appendChild(menuItemLeft);
      menuItem.appendChild(menuItemRight);

      parent.appendChild(menuItem);
    }
  }

  const contentDiv = document.getElementById('content');

  const menuItemsWrap = document.getElementById('page');
  menuItemsWrap.innerHTML = '';
  menuItemsWrap.setAttribute('class', '');
  menuItemsWrap.classList.add('menu-item-wrap');

  const menuHeader = document.createElement('h3');
  menuHeader.classList.add('menu-header');
  menuHeader.innerHTML = "Today's Menu";

  menuItemsWrap.appendChild(menuHeader);

  menuItemGenrator(menuItemsWrap, items);

  contentDiv.appendChild(menuItemsWrap);
};

export default menu;
