export function FoodShow({food}){
    return (

      <>
      
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
      
      
      </>

    )
}