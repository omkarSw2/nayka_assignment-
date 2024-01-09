import { useEffect, useState } from "react";
import PieChart from "../../components/PieChart/PieChart";

const Analytics = () => {
  const [productChartData, setproductChartData] = useState(null);
  const [genderchartData, setGenderChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nutty-jersey-fox.cyclic.app/api/products/category/chart"
        );
        const data = await response.json();

        setproductChartData(data.productChart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://nutty-jersey-fox.cyclic.app/api/products/gender/chart"
        );
        const data = await response.json();
        setGenderChartData(data.productChart);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-2">
      <div className="w-1/2">
        {" "}
        {productChartData ? (
          <PieChart data={productChartData} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
      <div className="w-1/2">
        {genderchartData ? (
          <PieChart data={genderchartData} />
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  );
};

export default Analytics;
