export default function ResidentCard(props) {
  const cardColor = [
    "#eb6ca4",
    "#89A6FB",
    "#78c2fbed",
    "#7F7CAF",
    "#856A5D",
    "#E06D06",
    "#084887",
    "#554971",
    "#B8F3FF",
    "#E8DCB9",
    "#F2CEE6",
    "#7798AB",
    "#FAA916",
    "#96031A",
  ];

  return (
    <>
      <style>
        {`
          .${props.uniqueClass} {
            background: linear-gradient(to bottom right, ${
              cardColor[Math.floor(Math.random() * 5)]
            }, ${cardColor[Math.floor(Math.random() * 5)]});
          }
        `}
      </style>
      <div className="resident-card">
        <div className={`profile-image ${props.uniqueClass}`}></div>
        <div className="user-details">
          <p className="resident-name">{props.data.name}</p>
          <div className="resident-mes">
            <div className="resident-height">
              <p>HEIGHT</p>
              <p>{props.data.height}</p>
            </div>
            <div className="resident-mass">
              <p>MASS</p>
              <p>{props.data.mass}</p>
            </div>
          </div>
          <p className="resident-gender">
            GENDER : <span>{props.data.gender}</span>
          </p>
        </div>
      </div>
    </>
  );
}
