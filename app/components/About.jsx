var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <h4>Built Using React and Foundation</h4>
      <p>This is a simple website built using the React JavaScript framework and styled with the Foundation CSS framework.</p>
      <h4>Using OpenWeather Map API</h4>
      <p>All the data this site displays is obtained through the use of the OpenWeather Map API in realtime.</p>
    </div>
  );
};

module.exports = About;
