const Carousel = props => {
  const { images } = props;
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide my-4"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {images.map((item, index) => {
          return (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === 0 ? "active" : ""}
            ></li>
          );
        })}
      </ol>
      <div className="carousel-inner" role="listbox">
        {images.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img
              className="d-block img-fluid"
              src={item.image}
              alt={item.name}
            />
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
      <style jsx>{`
        .carousel-item {
          max-height: 400px;
        }
      `}
      </style>
    </div>
  );
};

export default Carousel;
