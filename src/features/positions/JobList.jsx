import React from 'react';
import JobPosition from "./JobPosition";
import {useDispatch, useSelector} from "react-redux";
import {selectVisiblePositions, usePositions} from "./use-positions";
import {addFilter, selectFilters} from "../filter/filter-slice";
import {useFetchPositions} from "./use-fetch-positions";

const JobList = () => {
    useFetchPositions();
    const positions = usePositions()
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters);
    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter));
    };
    return (
        <div className={'job-list'}>
            {positions.map(item => (
                <JobPosition
                    key={item.id}
                    handleAddFilter={handleAddFilter}
                    {...item}
                />
            ))}
        </div>
    );
};

export default JobList;
