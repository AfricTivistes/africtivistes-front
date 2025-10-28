import React from "react";

const Pagination = ({ totalPages, currentPage, basePath }) => {
    // Toujours afficher la pagination, même pour une seule page
    if (totalPages < 1) return null;

    const getPageNumbers = () => {
        const pages = [];
        const maxVisible = 5;
        
        // Toujours afficher au moins la page courante
        if (totalPages === 1) {
            pages.push(1);
        } else if (totalPages <= maxVisible) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (currentPage <= 3) {
                for (let i = 1; i <= 4; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1);
                pages.push('...');
                for (let i = totalPages - 3; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                pages.push('...');
                for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                    pages.push(i);
                }
                pages.push('...');
                pages.push(totalPages);
            }
        }
        
        return pages;
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="pagination-container">
            <div className="pagination-info">
                <span className="pagination-text">
                    Page {currentPage} sur {totalPages}
                </span>
            </div>
            
            <nav className="pagination-modern" aria-label="Pagination">
                <div className="pagination-wrapper">
                    {/* Bouton Précédent */}
                    <div className="pagination-nav">
                        {currentPage > 1 ? (
                            <a 
                                href={currentPage === 2 ? basePath : `${basePath}${currentPage - 1}`}
                                className="pagination-btn pagination-prev"
                                aria-label="Page précédente"
                            >
                                <i className="flaticon-left-arrow"></i>
                                <span>Précédent</span>
                            </a>
                        ) : (
                            <span className="pagination-btn pagination-prev disabled">
                                <i className="flaticon-left-arrow"></i>
                                <span>Précédent</span>
                            </span>
                        )}
                    </div>

                    {/* Numéros de pages */}
                    <div className="pagination-numbers">
                        {pageNumbers.map((page, index) => (
                            <div key={index} className="pagination-item">
                                {page === '...' ? (
                                    <span className="pagination-ellipsis">
                                        <i className="flaticon-more"></i>
                                    </span>
                                ) : (
                                    <a
                                        href={page === 1 ? basePath : `${basePath}${page}`}
                                        className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                                        aria-label={`Page ${page}`}
                                        aria-current={currentPage === page ? 'page' : undefined}
                                    >
                                        {page}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Bouton Suivant */}
                    <div className="pagination-nav">
                        {currentPage < totalPages ? (
                            <a 
                                href={`${basePath}${currentPage + 1}`}
                                className="pagination-btn pagination-next"
                                aria-label="Page suivante"
                            >
                                <span>Suivant</span>
                                <i className="flaticon-right-arrow"></i>
                            </a>
                        ) : (
                            <span className="pagination-btn pagination-next disabled">
                                <span>Suivant</span>
                                <i className="flaticon-right-arrow"></i>
                            </span>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Pagination;