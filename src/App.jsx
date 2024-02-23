import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ContentSection from "./components/ContentSection/ContentSection";
import Pagination from "./components/Pagination";
import Loader from "./components/Misc/Loader";
import Footer from "./components/Footer";

export default function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    setData(null);
    setIsLoading(true);
    window.scrollTo(0, 0);
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData("https://swapi.dev/api/planets/?page=1");
  }, []);

  return (
    <div className="container">
      <Header />
      <ContentSection data={data} setIsLoading={setIsLoading} />
      <Pagination data={data} fetchData={fetchData} />
      <Footer />
      {isLoading && <Loader />}
    </div>
  );
}
