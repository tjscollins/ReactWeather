var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();
    var loc = this.refs.location.value;
    if (loc.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(loc);
    }
  },
  render: function() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="location" placeholder="Enter City Name"></input>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
