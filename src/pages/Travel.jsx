import travelMarker from "../assets/images/travel_marker.svg"

function Card() {
  return (
    // imgSrc country mapLink name from to desc
    <div className="card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/NUSHigh-Campus.JPG/220px-NUSHigh-Campus.JPG"/>
      <div>
        <img src={travelMarker} alt="" />
        <h4>Singapore</h4>
        <a href="">View on Google Maps</a>
      </div>
      <h2>NUS High School</h2>
      <h3>12 Jan, 2021 - 24 Jan, 2021</h3>
      <p>
        NUS High School is 6 year diploma course special school that specialises
        in Maths and Science
      </p>
    </div>
  );
}

export default () => (
    <Card/>
)
