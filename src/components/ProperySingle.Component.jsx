import { Link } from "react-router-dom";

const PropertySingle = (props) => {
  const {
    id,
    image_url,
    estate_title,
    area_sq_ft,
    status,
    facilities,
    description,
  } = props.property;
  return (
    <>
      <div className="card max-w-full mb-5 w-96 bg-base-100 shadow-xl py-3">
        <figure>
          <img src={image_url} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {estate_title}
            {status === "sale" && (
              <div className="badge badge-success badge-outline ">
                {status.toUpperCase()}
              </div>
            )}
            {status === "rent" && (
              <div className="badge badge-warning badge-outline ">
                {status.toUpperCase()}
              </div>
            )}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            {facilities.map((facility, index) => (
              <div className="badge badge-outline" key={index}>
                {facility}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link
            className="btn btn-success text-center text-white w-[200px]"
            to={`/house/${id}`}
          >
            View Property
          </Link>
        </div>
      </div>
    </>
  );
};

export default PropertySingle;
