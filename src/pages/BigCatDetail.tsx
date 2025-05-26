import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import BigCatCarousel from '../components/BigCatCarousel';

interface BigCat {
  id: number;
  catname: string;
  img1: string; 
  img2: string; 
  size_img: string; 
  scientific_name: string;
  synopsis: string;
  wiki: string;
  page: string; 
  weight: string;
  height: string;
  geo_range: string;
}

const BigCatDetail = () => {
  const { page } = useParams();
  const [cat, setCat] = useState<BigCat | null>(null);

  // implement carousel 
  const [allCats, setAllCats] = useState<BigCat[]>([]);


  useEffect(() => {
    {/* ----------------------------------------- */}
    {/* 
    axios.get('http://localhost:4001/bigcats')
      .then(res => {
        const allCats: BigCat[] = res.data;
        const match = allCats.find(c => c.page === page);
        setCat(match || null);
      })
      .catch(err => {
        console.error('API fetch error:', err);
      });
      */} 
    {/* ----------------------------------------- */}
    axios.get('https://bigcatsapi.ryanhunter.ca/bigcats') 
    .then(res => {
        const cats: BigCat[] = res.data;
        setAllCats(cats);
        const match = cats.find(c => c.page === page);
        setCat(match || null);
    });

  }, [page]);


  {/* --------------------------------- */}

  if (!cat) {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title has-text-danger">Big Cat Not Found</h1>
          <Link to="/" className="button is-link">Back to Home</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-link">{cat.catname}</h1>
        {/* Single Image Photo below here  */}
        {/* ------------------------- 
        <figure className="image is-3by2">
          <img
            src={`/images/${cat.img1}`}
            alt={cat.catname}
            width="639"
            height="420"
          />
        </figure>
        --------------------------- */}
        {/* stretch project | Image Carousel below here  */}
        <BigCatCarousel images={[cat.img1, cat.img2, cat.size_img]} alt={cat.catname} />

        {/* stretch project # 2 | Add nice 'Previous' & 'Back' buttons to Image Carousel below here  */}

        <div className="buttons mt-4">
        {allCats.length > 0 && cat && (
            <>
            {(() => {
                const currentIndex = allCats.findIndex(c => c.page === page);
                const prev = allCats[(currentIndex - 1 + allCats.length) % allCats.length];
                const next = allCats[(currentIndex + 1) % allCats.length];
                return (
                <>
                    <Link to={`/bigcats/${prev.page}`} className="button is-info is-light">← {prev.catname}</Link>
                    <Link to={`/bigcats/${next.page}`} className="button is-info is-light ml-2">{next.catname} →</Link>
                </>
                );
            })()}
            </>
        )}
        </div>


        {/* ---------------------------------- */}  


        <div className="content mt-4">
          <h1 className="title has-text-link">{cat.catname}</h1>
          <p>
            <i className="mr-2 fa-solid fa-microscope"></i> 
            <strong>Scientific Name : </strong>  
            <span className="has-text-danger"> {cat.scientific_name}</span>
          </p>
          <p>
            <i className="mr-2 fa-brands fa-wikipedia-w"></i> 
            <strong>Wikipedia: </strong>  
            <a href={cat.wiki} target="_blank" rel="noopener noreferrer">{cat.wiki}</a>
          </p>

          <p>
            <i className="mr-2 fa-solid fa-weight-hanging"></i> 
            <strong>Weight : </strong>  
            <span className="mr-2 has-text-weight-semibold is-italic"> {cat.weight}</span>    
            
            <i className="mr-2 fa-solid fa-up-down"></i> 
            <strong>Height : </strong>  
            <span className="mr-2 has-text-weight-semibold is-italic"> {cat.height}</span>  
          </p>
          <p> 
            <i className="mr-2 fa-solid fa-globe"> </i> <strong>Geographic Range: </strong>   
            {cat.geo_range} 
          </p>
          <p><strong>Description : </strong></p>
          <div dangerouslySetInnerHTML={{ __html: cat.synopsis }} />
        </div>

        <Link to="/" className="button is-link mt-4"><i className="mr-2 fa-solid fa-house-chimney"></i> ← Back to Home</Link>
      </div>
    </section>
  );
};

export default BigCatDetail;
