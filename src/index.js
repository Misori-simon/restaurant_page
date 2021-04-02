import pageLoad from './page-load';
import about from './about';
import menu from './menu';
import contact from './contact';
import active from './active';

const dishes = [
  {
    name: 'Fufu and Eru',
    info: 'This meal is made from casava, vegetable(eru and waterleaf), meat and cow skin',
    regularPrice: 1200,
    salePrice: 1000,
    image: './logo.png',
  },
  {
    name: 'Ndole and Plantains',
    info: 'This meal is made from plantains, vegetable(bitter leaf), egusi, meat and smooked fish',
    regularPrice: 2000,
    salePrice: 1500,
    image: './logo.png',
  },
  {
    name: 'Garri and Okra Soup',
    info: 'This meal is made from garri, okra, vegetable, egusi, meat and cow skin',
    regularPrice: 1200,
    salePrice: 1000,
    image: './logo.png',
  },
  {
    name: 'Kwacoco and Mbanga Soup',
    info: 'This meal is made of cocoyam, vegetable, palm fruits, meat and smooked fish',
    regularPrice: 0,
    salePrice: 2000,
    image: './logo.png',
  },
  {
    name: 'Kati Kati',
    info: 'This meal is made from cornfufu, vegetable and fried chicken',
    regularPrice: 1500,
    salePrice: 1000,
    image: './logo.png',
  },
];

const tabs = pageLoad();
about();

tabs[0].addEventListener('click', () => { about(); active(tabs, 0, 'active'); });
tabs[1].addEventListener('click', () => { menu(dishes); active(tabs, 1, 'active'); });
tabs[2].addEventListener('click', () => { contact(); active(tabs, 2, 'active'); });
