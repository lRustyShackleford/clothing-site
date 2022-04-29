import './category-directory.styles.scss';
import CategoryItem from '../category-item/category-item.component';

const CategoryDirectory = ({ categories }) => {
    
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
    )
} 

export default CategoryDirectory;