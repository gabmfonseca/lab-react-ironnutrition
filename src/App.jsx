import React, { Component } from 'react';
import './App.scss';
import MealBox from './components/MealBox';
import Search from './components/Search';
import meals from './meals.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formActive: false,
      meals: meals,
      name: '',
      calories: '',
      image: '',
      search: ''
    };
    this.showForm = this.showForm.bind(this);
    this.addMeal = this.addMeal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.searchMeal = this.searchMeal.bind(this);
  }

  showForm() {
    this.setState(previousState => ({
      formActive: !previousState.formActive
    }));
  }

  addMeal(event) {
    event.preventDefault();
    const newMeal = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    };
    console.log(newMeal);

    this.setState(previousState => ({
      meals: [...previousState.meals, newMeal],
      formActive: !previousState.formActive
    }));
  }

  handleInputChange(event) {
    const value = event.target.value;
    const inputName = event.target.name;

    this.setState({
      [inputName]: value
    });
  }

  searchMeal(query) {
    this.setState({
      search: query
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Search search={this.searchMeal} />
        <button onClick={this.showForm}>Add a new meal</button>
        {this.state.formActive && (
          <form onSubmit={this.addMeal}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="Number of calories"
              name="calories"
              value={this.state.calories}
              onChange={this.handleInputChange}
            ></input>
            <input
              type="text"
              placeholder="Image URL"
              name="image"
              value={this.state.image}
              onChange={this.handleInputChange}
            ></input>
            <button>Submit</button>
          </form>
        )}
        {this.state.meals.map(meal => {
          if (meal.name.toLowerCase().includes(this.state.search.toLowerCase())) {
            return <MealBox key={meal.name} {...meal} />;
          }
        })}
      </div>
    );
  }
}

export default App;
