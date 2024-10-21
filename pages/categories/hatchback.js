import CarsList from "../../components/modules/CarsList";
import carsData from "./../../data/carsData";

function hatchback() {
  const HatchbackCars = carsData.filter((car) => car.category == "hatchback");
  return (
    <div>
      <CarsList data={HatchbackCars} />
    </div>
  );
}

export default hatchback;
