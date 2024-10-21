import Link from "next/link";
import Categories from "../components/modules/Categories";
import SearchBar from "../components/modules/SearchBar";
import CardsPage from "../components/templates/CardsPage";
import carsData from "../data/carsData";

function Index() {
  const cars = carsData.slice(0, 6);
  return (
    <div style={{position:"relative"}}>
      <SearchBar />
      <Categories />
      <Link href={"/cars"}>
        <button
        className="btnAll"
        >
          see all
        </button>
      </Link>
      <CardsPage data={cars} />
    </div>
  );
}

export default Index;
