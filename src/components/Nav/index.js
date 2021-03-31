import React, {useEffect} from 'react';
import './Nav.css';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

function Nav(props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory,
        setContactSelected,
        setResumeSelected
    } = props;
    let scrollAmount;
    let scrollUp = false;

    useEffect(() => {
        document.title = currentCategory.name;
    },[currentCategory]);

    function scrollFunction(i) {
        if (i - window.scrollY > 0) {
            scrollAmount = i-window.scrollY
            scrollUp = true
        }
        return scrollAmount;
    }



return(
    <header>
        <nav>
            <ul>
                <li className="who-am-i-li">
                    <a 
                    href="#about" className="who-am-i-a"
                    onClick={() => {
                        setContactSelected(false)
                        setResumeSelected(false)
                    }
                }
                    >Who Am I?</a>
                </li>
                <li className={` mx-2 `}>
                        <span 
                        onClick={() => {
                            setContactSelected(true)
                            setResumeSelected(false)
                        }
                        }
                        >Contact</span>
                </li>
                <li className={`mx-2`}>
                    <span 
                    onClick={() => {
                        setContactSelected(false)
                        setResumeSelected(true)
                        setTimeout(() => {
                            window.scrollBy({ top: scrollFunction(1955), left: 0, behavior: 'smooth' });
                        }, 10);
                    }
                    }
                    >Resume</span>
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
                            setContactSelected(false)
                            setResumeSelected(false)
                            console.log(category)
                            setTimeout(() => {
                                window.scrollBy({ top: scrollFunction(1150), left: 0, behavior: 'smooth' });
                            }, 0);
                            
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