import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';


import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Users from './Users'; // Import the Users component
import Events from './Events'
import School from './School';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/users" element={<Users />}
   />
   
</Routes>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Events" element={<Events />}
   />
   
</Routes>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/School" element={<School />}
   />
   
</Routes>
      </div>
    </Router>
  );
}

export default App;
