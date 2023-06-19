import { useEffect, useState } from 'react'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos';


// function App() {

//   const [todos, setTodos] = useState([])

//   const fetchTodos = async () => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       setTodos(data);
//     } catch (error) {
//       console.log(error)
//     }
//   };
//   useEffect(() => {
//     fetchTodos()
//   }, [])
//   console.log(todos);
//   return (
//     <main>
//       <header>
//         <h1>Todos</h1>
//       </header>
//       <section>
//         {todos?.map((todoItems, index) => {
//           return (
//             <article key={index}>
//               <h4>{todoItems?.title}</h4>
//               <p>status:{todoItems?.completed ? 'Yes' : 'No'}</p>
//             </article>
//           );
//         })}
//       </section>
//     </main>
//   );
// }


//========================================axios
function App() {

  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await axios(url);
      console.log(response)
      setTodos(response.data);
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    fetchTodos()
  }, [])
  console.log(todos);
  return (
    <main>
      <header>
        <h1>Todos</h1>
      </header>
      <section>
        {todos?.map((todoItems, index) => {
          return (
            <article key={index}>
              <h4>{todoItems?.title}</h4>
              <p>status:{todoItems?.completed ? 'Yes' : 'No'}</p>
            </article>
          );
        })}
      </section>
    </main>
  );
}

export default App;
