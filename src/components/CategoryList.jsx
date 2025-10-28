import React from 'react';
import { Link } from 'gatsby-plugin-react-intl';
import { FormattedMessage } from 'gatsby-plugin-react-intl';

const CategoryList = ({ categoryNames }) => {
    const list = Array.isArray(categoryNames) ? categoryNames : [];
    return (
        <div className="blog-subscribe rounded">
            <h4 className="mb-3"><FormattedMessage id='categoryList'/></h4>
            {list.length === 0 ? (
                <p style={{ margin: 0 }}><FormattedMessage id='noCategories' defaultMessage='No categories available.'/></p>
            ) : (
                <ul>
                    {list.map((category) => (
                        <li key={category.slug}>
                            <Link
                                style={{ color: '#a63117', transition: 'color 0.3s ease-in-out' }}
                                to={`/${category.slug}`}
                            >
                                {category.name} ({category.postsLength ?? (category.posts?.length ?? 0)})
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoryList;
