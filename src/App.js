// import logo from './logo.svg';
import './App.css';
// import Instructor from './Instructor.js';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to poop.
//         </p>
//         <Instructor />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

const instructors = [
  { name: 'Aidan', email: "asdlfkjasdf", bio: "hello" },
  { name: 'Kat', email: "alsdasdkkfjalsdf", bio: "hallo" },
  { name: 'Luc', email: "alsdkfjasdlfasdflas", bio: "hello there" },
];

export default function InstructorList() {
  const listItems = instructors.map(instructor =>
    <li>
      <p className="name">{instructor.name}</p>
      <p>{instructor.email}</p>
      <p>{instructor.bio}</p>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
