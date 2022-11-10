import travelMarker from "../assets/images/travel_marker.svg"

function Card() {
  return (
    <div className="card">
      <img src="" alt="" />
      <div>
        <img src={travelMarker} alt="" />
        <h4>Japan</h4>
        <a href="">View on Google Maps</a>
      </div>
      <h2>Mount Fuji</h2>
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
