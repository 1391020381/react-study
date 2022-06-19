import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 
} from 'react-router-dom'
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Users from "./pages/users/users";
import Topics  from './pages/topics/topics';
import './App.css';

function App() {
  return (
    <Router>
        <div className="APP">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">about</Link>
                </li>
                <li>
                  <Link to="/users">users</Link>
                </li>
                <li>
                  <Link to="/topics">topics</Link>
                </li>
              </ul>
            </nav>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 匹配的第一个路由 / 根路由放在最后  */}
            <Switch>
                <Route path="/about">
                  <About/>
                </Route>
                <Route path="/topics">
                  <Topics/>
                </Route>
                <Route path="/users">
                  <Users/>
                </Route>
                <Route path="/">
                  <Home/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//             <li>
//               <Link to="/topics">topics</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/topics">
//                 <Topics/>
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
// function Topics() {
//   return <h2>Topics</h2>;
// }