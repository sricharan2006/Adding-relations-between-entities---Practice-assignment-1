const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <h4>{location}</h4>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
