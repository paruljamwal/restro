import { useState, useEffect } from 'react'
import './App.css'
import { FoodShow } from './components/foodshow';

function App() {

  const [foody, setFoody] = useState([]);

  const [food, setFood] = useState({
    image: "",
    name: "",
    type: "",
    cost: "",
    payment: "",
    votes: "",
    reviews: ""
  });


  const getData = () => {
    fetch("http://localhost:8080/recipies")
      .then((Response) => Response.json())
      .then((food) => setFoody(food));
  }



  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    let { id, value } = e.target;
    setFood({ ...food, [id]: value })
  }

  const handelsubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:8080/recipies", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(food),
    })
      // .then(() => {
      //   alert("Your Food is added succesfully....");
      // })
      .then(() => {
        getData();
      });
  }



  return (
    <div className="App">
      <h1 id='head' >🍕Foody Moody🍰</h1>
      <div id='mainbox'>

        <div id='addfood'>
          <form onChange={handelsubmit} >
            <label>Food</label>
            <img src="" onChange={handleChange} alt="" />
            <label>Name</label>
            <input type="text" onChange={handleChange} placeholder='Enter your recipe name' id='foodname'></input><br /><br />
            <label>Type</label>
            <select name="" id="type" onChange={handleChange}>
              <option value="">Continental food</option>
              <option value="">Sea food</option>
              <option value="">Deserts</option>
              <option value="">Drinks</option>
              <option value="">Fast Food</option>
            </select><br /><br />
            <label>Cost</label>
            <input type="number" onChange={handleChange} placeholder='Enter Cost' id='cost' /><br /><br />
            <label>Payment</label>
            <select name="" id="mode">
              <option value="">Online</option>
              <option value="">OFF line</option>
            </select><br /><br />
            <label>Votes</label>
            <input type="number" onChange={handleChange} placeholder='Votes' id='votes'></input><br /><br />
            <label>Reviews</label>
            <select name="" id="reviews" onChange={handleChange}>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
            </select><br /><br />
            <input type="submit" id='submit'></input>
          </form>
        </div>
        <div id='showfood'>
          <table id="customers">
            <thead>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Votes</th>
              <th>Reviews</th>
            </thead>

            {/* {foody.map((e)=>{
               return <FoodShow food={e} key={e.id}></FoodShow>
             })} */}
            <tbody>

              <td>{food.id}</td>
              <td><img src={food.image}></img></td>
              <td>{food.name}</td>
              <td>{food.type}</td>
              <td>{food.cost}</td>
              <td>{food.payment}</td>
              <td>{food.votes}</td>
              <td>{food.reviews}</td>

            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default App
