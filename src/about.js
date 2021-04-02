const about = () => {

  function paragraphGenerator(parent, arr, className) {
    for (let i = 0; i < arr.length; i += 1) {
      const para = document.createElement('p');
      para.classList.add(className);
      para.innerHTML = arr[i];

      parent.appendChild(para);
    }
  }
  const contentDiv = document.getElementById('content');

  const aboutWrap = document.createElement('div');
  aboutWrap.classList.add('menu-item-wrap');

  const aboutHeader = document.createElement('h3');
  aboutHeader.classList.add('about-header');
  aboutHeader.innerHTML = 'OUR STORY';

  aboutWrap.appendChild(aboutHeader);

  const subheader = document.createElement('h4');
  subheader.classList.add('sub-header');
  subheader.innerHTML = 'An African Cuisine';

  aboutWrap.appendChild(subheader);

  const paragraphs = [
    "To provide you the best cup of tea we can offer, we insist on quality and we strictly control the quality of each store. Because we treat each guest as a valued customer, we thank you for your support and we want to know that you are served the best drink we can offer to you. Always let us know if a drink wasn't the very best you expected!",
    'At One More Tea we are often looking to create new drinks, increasing our menu selection and continuing to make progress, just so that you can always enjoy coming back to visit us.',
    'The key to our success is simple: providing quality consistent food that taste great every single time. We pride ourselves on serving our customers delicious and genuine Taiwanese dishes based on tradition.',
    'Eat delicious food. Drink a cup of tea. Done? Have ONE MORE!',
  ];

  paragraphGenerator(aboutWrap, paragraphs, 'about-text');

  contentDiv.appendChild(aboutWrap);
};

export default about;
