import './App.css';
import TheHeader from "./components/TheHeader";
import FilterPanel from "./components/FilterPanel";
import JobList from "./components/JobList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addPositions} from "./store/positions/position-actions";
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
