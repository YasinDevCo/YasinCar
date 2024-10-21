import Categories from "../../components/modules/Categories";
import SearchBar from "../../components/modules/SearchBar";
import CardsPage from "../../components/templates/CardsPage";
import carsData from "../../data/carsData";
function Details() {
  
  return (
    <div>
      <SearchBar/>
      <Categories/>
      <CardsPage data={carsData} />
    </div>
  );
}

export default Details;
