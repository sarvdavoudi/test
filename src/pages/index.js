import CoinList from "../containers/CoinList/CoinList";
import Layout from "../containers/Layout/Layout";
import SearchBar from "../Components/SearchBar/SearchBar";
import { useState } from "react";

const Home = ({ serverCryptoCurrenctys = {} }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCryptoCurrenctys = Array.isArray(serverCryptoCurrenctys)
    ? serverCryptoCurrenctys.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <Layout>
      <SearchBar onChange={handleSearch} searchTerm={searchTerm} placeHolder={"search"} />
      <CoinList cryptoCurrenctys={filteredCryptoCurrenctys} />
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
    );
    const CryptoCurrenctys = await res.json();
    return {
      props: {
        serverCryptoCurrenctys: CryptoCurrenctys,
      },
    };
  } catch (error) {
    console.log("Error fetching data: ", error);
    return {
      props: {
        serverCryptoCurrenctys: [],
      },
    };
  }
}