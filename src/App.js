import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminHome from './components/Admin/Hotels/Hotels';
import Add_Hotel from './components/Admin/Add_Hotel/Add_Hotel';
import DisplayHotels from './components/User/DisplayHotels/DisplayHotels';
import BookNow from './components/User/Book/Book';
import Bookings from './components/Admin/Bookings/Bookings';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<AdminHome />} />
        <Route exact path='/add_hotel' element={<Add_Hotel />} />
        <Route exact path='/display_hotels' element={<DisplayHotels />} />
        <Route exact path='/book_now' element={<BookNow />} />
        <Route exact path='/bookings' element={<Bookings />} />
      </Routes>
    </Router>
  );
}
export default App;
