import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "./../../components/modules/CarsList";
function FilterCar() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filterCar = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  return <CarsList data={filterCar} />;
}

export default FilterCar;
