export default function Card(props) {
  const cardColor = [
    "#eb6ca4",
    "#89A6FB",
    "#78c2fbed",
    "#7F7CAF",
    "#856A5D",
    "#E06D06",
    "#084887",
  ];

  const fetchResidents = async (e) => {
    props.setIsLoading(true);
    props.setResidentData(null);
    document.querySelector(".resident-overlay").style.display = "flex";
    document.querySelector(".pagination").style.display = "none";
    window.scrollTo(0, 0);
    try {
      const fetchDataPromises = [];

      props.data.residents.forEach((url) => {
        fetchDataPromises.push(fetch(url).then((response) => response.json()));
      });

      const results = await Promise.all(fetchDataPromises);

      props.setResidentData(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    props.setIsLoading(false);
  };

  return (
    <>
      <style>
        {`
          .${props.uniqueClass}:before {
            background: ${cardColor[Math.floor(Math.random() * 5)]};
          }

          .${props.uniqueClass} button {
            background: ${cardColor[Math.floor(Math.random() * 5)]};
          }
        `}
      </style>
      <section className="product-container product-1">
        <div className={`card ${props.uniqueClass}`}>
          <div className="content">
            <div className="title">{props.data.name}</div>
            <div className="bg-title">Star Wars</div>
            <div className="feature">
              <p>
                ☁️ climate : <span>{props.data.climate}</span>
              </p>
              <p>
                👥 population : <span>{props.data.population}</span>
              </p>
              <p>
                🏔️ terrain : <span>{props.data.terrain}</span>
              </p>
              {props.data.residents.length ? (
                <button onClick={fetchResidents}>
                  <p>Residents</p>
                  <img src="./redirect.svg" alt="redirect" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
