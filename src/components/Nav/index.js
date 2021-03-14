import React, {useEffect} from 'react';
import '../../Nav.css';

function Nav(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory,
        style
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    },[currentCategory])

return(
    <header>
        <nav>
            <ul>
                <li>
                    Who Am I?
                </li>
                {categories.map((category) => (
                    <li
                    className={category.name}
                    className="animate-list"
                    key={category.name}
                    >

                        <span
                        onClick={() => {
                            setCurrentCategory(category)
                        }}
                        
                        >
                           {category.name} 
                        </span>

                    </li>
                ))}
            </ul>

        </nav>
    </header>
)
}

export default Nav;