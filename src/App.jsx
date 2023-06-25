import './App.css';
import TheHeader from "./components/TheHeader";
import FilterPanel from "./features/filter/FilterPanel";
import JobList from "./features/positions/JobList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPositions} from "./store_legacy/positions/position-actions";
import data from './mock/data.json'
function App() {
    const dispatch=useDispatch();

    useEffect(()=>{
    dispatch(addPositions(data))
    },[])
  return (
    <>
   <TheHeader/>
      <div className="container">
        <FilterPanel/>
        <JobList/>
      </div>
    </>
  )
}

export default App;
