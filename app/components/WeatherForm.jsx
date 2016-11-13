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
        <input type="search" ref="location" placeholder="Search weather by city"></input>
        <button className="button hollow expanded">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
