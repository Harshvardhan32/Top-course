import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import { apiURL, filterData } from './data';
import { toast } from 'react-toastify';

function App() {

  const [courses, setCourses] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch(apiURL);
        const output = await res.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something Went Wrong!");
      }
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}/>
      </div>
      <div>
        <Cards courses={courses} category={category}/>
      </div>
    </div>
  );
}

export default App;