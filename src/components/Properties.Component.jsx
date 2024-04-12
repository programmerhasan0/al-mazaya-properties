import { useEffect, useState } from "react";
import PropertySingle from "./ProperySingle.Component";
import { Link, useLocation } from "react-router-dom";

const Properties = () => {
  const [propertyData, setPropertyData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        if (location.pathname === "/") {
          setPropertyData([data[0], data[1], data[2]]);
        } else {
          setPropertyData(data);
        }
      });
  }, []);

  return (
    <>
      {location.pathname === "/" && (
        <h2 className="text-3xl text-center mt-3 mb-3">Explore Your Home</h2>
      )}
      <div className=" container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-[5rem]">
        {propertyData.map((property) => (
          <PropertySingle property={property} key={property.id} />
        ))}
      </div>
      <div className="text-center mt-5 mb-5">
        <Link className="btn btn-success text-white uppercase" to="/houses">
          View More
        </Link>
      </div>
    </>
  );
};

export default Properties;
