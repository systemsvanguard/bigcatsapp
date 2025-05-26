import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';  

interface BigCat {
  id: number;
  catname: string;
  img1: string;
  synopsis: string;
  page: string;
  geo_range: string;
  scientific_name: string;
}

const Home = () => {
  const [cats, setCats] = useState<BigCat[]>([]);
  
  // stretch project: add a UI search, and a UI filter
  const [searchText, setSearchText] = useState('');
  const [regionFilter, setRegionFilter] = useState('All');

  //-----------------------
  /* http://localhost:4001/bigcats/ | https://bigcatsapi.ryanhunter.ca/bigcats   */
  //------------------------
	useEffect(() => {
	  axios.get('https://bigcatsapi.ryanhunter.ca/bigcats')
		.then(res => {
		  console.log('API data received:', res.data);
		  setCats(res.data); // res.data is the array | NOT, setCats(res.data.bigcats);  
		})
		.catch(err => console.error('API fetch error:', err));
	}, []);
  //------------------------
  

  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered my-2">Discover the Big Cats</h1>
		
        
		
		
			<div className="columns has-text-right my-2">  {/* start of First Grid */} 
			  <div className="column is-full">
			  
				  {/* start ~ search interface */}
					<div className="field is-grouped is-grouped-multiline mb-5">
					  <div className="control">
						<input
						  className="input custom_blue_border"
						  type="text"
						  placeholder="Search by Cat Name ..."
						  value={searchText}
						  onChange={e => setSearchText(e.target.value)}
						/>
					  </div>
					  <div className="control custom_blue_border">
						<div className="select ">
						  <select value={regionFilter} onChange={e => setRegionFilter(e.target.value)}>
							<option value="All">All Regions</option>
							<option value="Africa">Africa</option>
							<option value="Asia">Asia</option>
							<option value="Americas">Americas</option>
							<option value="Europe">Europe</option>
							<option value="Himalayas">Himalayas</option>
						  </select>
						</div>
					  </div>
					</div>			  
				  {/* end ~ search interface */}  		  
			  </div>
			</div>	{/* end of First Grid */} 	
		
		
		<div className="columns is-multiline"> 
          {Array.isArray(cats) && cats.filter(cat =>cat.catname.toLowerCase().includes(searchText.toLowerCase()) && (regionFilter === 'All' || cat.geo_range.toLowerCase().includes(regionFilter.toLowerCase())) ).map(cat => (
		  
		  
            <div key={cat.id} className="column is-one-third">			  
			  {/* Bulma CSS Cards for styling */} 			  
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img 
					  src={`/images/${cat.img1}`}
                      alt={cat.catname}
                      width="350"
                      height="230"
                      style={{ objectFit: 'cover' }}
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title is-4">
                    <Link to={`/bigcats/${cat.page}`}>{cat.catname}</Link>
                  </p>
                  <p className="subtitle is-6">
                    {cat.synopsis.slice(0, 50)}...  
                  </p>
                </div>
              </div>
            </div>
          ))}
        
		
		</div>
      </div>
    </section>
  );
};

export default Home;

