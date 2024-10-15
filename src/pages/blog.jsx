import React from 'react';
import './blog.css'; // Importer le fichier CSS

const Blog = () => {
  return (
    <>
      {/* Bannière */}
      <img 
        src="/img/banner.jpg" 
        alt="Bannière" 
        className="banner"
      />

      <div className="blog-background">
        <div className="container blog-section">
          <h1>MON BLOG</h1>
          <p id="blog-description" className="blog-description" >
            Découvrez mes articles sur le développement web.
          </p>

          <div className="row">
            {/* Premier pavé */}
            <div className="col-md-4 blog-card">
              <img src="/img/blog/coder.jpg" alt="Page de codage" className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">Coder son site en HTML/CSS</h2>
                <p className="blog-description">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/article-1" className="view-link">Lire la suite</a>
                <p className="additional-text">Publié le 22 août 2022</p>
              </div>
            </div>

            {/* Deuxième pavé */}
            <div className="col-md-4 blog-card">
              <img src="/img/blog/croissance.jpg" alt="Pile de pièces alignées de facon croissante" className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">Vendre ses produits sur le web</h2>
                <p className="blog-description">
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/article-1" className="view-link">Lire la suite</a>
                <p className="additional-text">Publié le 20 août 2022</p>
              </div>
            </div>

            {/* Troisième pavé */}
            <div className="col-md-4 blog-card">
              <img src="/img/blog/google.jpg" alt="Ordinateur avec logo Google" className="blog-image" />
              <div className="blog-content">
                <h2 className="blog-title">Se positionner sur Google</h2>
                <p className="blog-description">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/article-1" className="view-link">Lire la suite</a>
                <p className="additional-text">Publié le 1 août 2022</p>
              </div>
            </div>

            {/* Quatrième pavé */}
            <div className="col-md-4 blog-card">
              <img src="/img/blog/screens.jpg" alt="Ordinateur micro-ordinateur et tablette  " className="blog-image" />
              <div className="blog-content"> 
                <h2 className="blog-title">Coder en responsive design</h2>
                <p className="blog-description">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/article-1" className="view-link">Lire la suite</a>
                <p className="additional-text">Publié le 31 juillet 2022</p>
              </div>
            </div>

            {/* Cinquième pavé */}
            <div className="col-md-4 blog-card">
              <img src="/img/blog/seo.jpg" alt="Photo SEO" className="blog-image" />
              <div className="blog-content"> 
                <h2 className="blog-title">Technique de référencement</h2>
                <p className="blog-description">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/article-1" className="view-link">Lire la suite</a>
                <p className="additional-text">Publié le 30 juillet 2022</p>
              </div>
            </div>

            {/* Sixième pavé */}
            <div className="col-md-4 blog-card">
              <img src="/img/blog/technos.png" alt="Photo logo techno" className="blog-image" />
              <div className="blog-content"> 
                <h2 className="blog-title">Apprendre à coder</h2>
                <p className="blog-description">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </p>
                <a href="/article-1" className="view-link">Lire la suite</a>
                <p className="additional-text">Publié le 12 juillet 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;