import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

const CategoryList = ({ categoryNames }) => {
    return (
        <div className="blog-subscribe rounded">
            <h4 className="mb-3"><FormattedMessage id='categoryList'/></h4>
        <ul>
            {categoryNames.map(category => (
                <li key={category.slug}>
                    <Link 
                    style={{ color: '#a63117', transition: 'color 0.3s ease-in-out' }} 
                    to={`/${category.slug}`}>
                        {category.name} ({category.postsLength})
                    </Link>
                </li>
            ))}
        </ul>
        </div>
    );
};

export default CategoryList;
