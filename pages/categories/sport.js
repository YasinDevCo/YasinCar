import CarsList from "../../components/modules/CarsList";
import carsData from "./../../data/carsData";

function Sport() {
  const SportCars = carsData.filter((car) => car.category == "sport");
  return (
    <div>
      <CarsList data={SportCars} />
    </div>
  );
}

export default Sport;
