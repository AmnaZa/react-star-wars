function StarshipCard({ starship, onClick, selected }) {
  return (
    <div className={`starship-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <h3>{starship.name}</h3>
      {selected && (
        <div className="starship-details">
          <p>Model: {starship.model}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          {/* Add other details you want to display */}
          <button className="close-btn" onClick={(e) => e.stopPropagation()}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default StarshipCard;
