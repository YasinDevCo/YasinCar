import CarsList from "../../components/modules/CarsList";
import carsData from "./../../data/carsData";

function Sedan() {
  const SedanCars = carsData.filter((car) => car.category == "sedan");
  return (
    <div>
      <CarsList data={SedanCars} />
    </div>
  );
}

export default Sedan;
