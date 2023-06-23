import React from "react";
import numeral from "numeral";
import Link from "next/link";

const CoinList = ({ cryptoCurrencies = []}) => {
  return (
    <div>
      <div class="mx-auto max-w-7xl">
        <h1 class="text-3xl font-bold mb-4">Online Cryptocurrency</h1>
        <table class="table-fixed w-full">
          <thead class="bg-gray-500">
            <tr>
              <th class="w-1/3 text-left px-4 py-2">Name</th>
              <th class="w-1/3 text-left px-4 py-2">Symbol</th>
              <th class="w-1/3 text-left px-4 py-2">Current Price</th>
              <th class="w-1/3 text-left px-4 py-2">Total Volume</th>
              <th class="w-1/3 text-left px-4 py-2">Price Change</th>
              <th class="w-1/3 text-left px-4 py-2">MarketCap</th>
            </tr>
          </thead>
          <tbody>
            {cryptoCurrencies && cryptoCurrencies.map((item) => (
              <Link href={`/coin/${item.id}`} key={item.id}>
                <tr class="hover:bg-gray-500">
                  <td class="text-left px-4 py-2">
                    <div className="flex justify-normal">
                      <div>
                        <img className="w-5 h-5 mr-4" src={item.image} alt="" />
                      </div>
                      <div>{item.name}</div>
                    </div>
                  </td>
                  <td class="text-left px-4 py-2">{item.symbol}</td>
                  <td class="text-left px-4 py-2">
                    {numeral(item.current_price).format("$0,0.00")}
                  </td>
                  <td class="text-left px-4 py-2">
                    {numeral(item.total_volume).format("$0,0.00")}
                  </td>
                  {item.price_change_percentage_24 < 0 ? (
                    <td className="text-left px-4 py-2 text-red-500">
                      {item.price_change_percentage_24h}%
                    </td>
                  ) : (
                    <td className="text-left px-4 py-2 text-green-500">
                      {item.price_change_percentage_24h}%
                    </td>
                  )}
                  <td class="text-left px-4 py-2">
                    {numeral(item.market_cap).format("$0,0.00")}
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinList;
