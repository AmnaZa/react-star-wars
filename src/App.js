
import React, { useState, useEffect } from 'react';
import { getAllStarships, getStarshipDetails } from './services/sw-api';
import StarshipCard from './StarshipCard';
import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStarship, setSelectedStarship] = useState(null);

  useEffect(() => {
    fetchStarships();
  }, [currentPage]);

  const fetchStarships = async () => {
    try {
      const starshipsData = await getAllStarships(currentPage);
      setStarships((prevStarships) => [...prevStarships, ...starshipsData.results]);
    } catch (error) {
      console.error('Error fetching starships:', error);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleStarshipClick = async (starshipUrl) => {
    try {
      const starshipDetails = await getStarshipDetails(starshipUrl);
      setSelectedStarship(starshipDetails);
    } catch (error) {
      console.error('Error fetching starship details:', error);
    }
  };

  return (
    <div className="container">
      {starships.map((starship) => (
        <StarshipCard
          key={starship.name}
          starship={starship}
          onClick={() => handleStarshipClick(starship.url)}
          selected={selectedStarship && selectedStarship.url === starship.url}
        />
      ))}
      <button className="load-more-btn" onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}

export default App;
