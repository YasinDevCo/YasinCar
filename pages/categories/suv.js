import CarsList from "../../components/modules/CarsList";
import carsData from "./../../data/carsData";

function Suv() {
  const SuvCars = carsData.filter((car) => car.category == "suv");
  return (
    <div>
      <CarsList data={SuvCars} />
    </div>
  );
}

export default Suv;
