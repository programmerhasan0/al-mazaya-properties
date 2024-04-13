import { useLocation, useParams } from "react-router-dom";
import MainLayout from "../layouts/Main.Layout";
import { useEffect, useState } from "react";
import Private from "./Private.Component";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const findProperty = data.find((item) => item.id.toString() === id);
        setProperty(findProperty);
      });
  }, []);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area_sq_ft,
    location,
    facilities,
    image_url,
  } = property;
  document.title = estate_title;

  return (
    <Private>
      <MainLayout>
        <h1 className="text-3xl">This is Details Page of {id}</h1>
        Name of the Property : {estate_title}
        <img src={image_url} alt="" />
        <article>{description}</article>
        <p>type of segment : {segment_name}</p>
        <p>price : ${price} Only</p>
        <p>for : {status}</p>
        <p>area : {area_sq_ft}</p>
        <p>location : {location}</p>
      </MainLayout>
    </Private>
  );
};

export default PropertyDetails;
