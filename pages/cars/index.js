import CardsPage from "../../components/templates/CardsPage";
import carsData from "../../data/carsData";
function Details() {
  
  return (
    <div>
      <CardsPage data={carsData} />
    </div>
  );
}

export default Details;
