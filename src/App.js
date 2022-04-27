import './categories.styles.scss';
import CategoryItem from './components/category-item/category-item.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: 'Hats',
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      description: "Wearing a hat",
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      description: "Variety of jackets"
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      description: "Variety of sneakers"
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      description: "Woman posing"
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      description: "Man posing"
    },
  ];

  return (
    <div className="categories-container">     
          {categories.map(({id, title, imageUrl}) => {
            return (
              <CategoryItem
                key={id}
                title={title}
                imageUrl={imageUrl}
              />
            );
          })};             
    </div>
  );
}

export default App;
