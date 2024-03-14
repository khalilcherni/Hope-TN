import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';


import { useState } from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Home from './Home';
import Users from './Users'; // Import the Users component
import Events from './Events'
import School from './School';
import Voluntarywork from './Voluntary';
import Supporters from './Supporters';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <Router>
      <div className="grid-container">
        
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
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Voluntary" element={<Voluntarywork />}
   />
   
</Routes>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Supporters" element={<Supporters />}
   />
   
</Routes>
      </div>
    </Router>
  );
}

export default App;
