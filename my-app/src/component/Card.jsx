function Card({ name, description, image, age }) {
  return (
    <div className='card'>
      {image && <img src={image} alt={name} className='card-img' />}
      <h1>{name}</h1>
      {age && <h3>Age: {age}</h3>}
      <p>{description}</p>
    </div>
  )
}

export default Card
