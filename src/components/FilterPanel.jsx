import React from 'react';
import Card from "../UI/Card";
import Badge from "../UI/Badge";
import Stack from "../UI/Stack";
import {useSelector} from "react-redux";
import {selectFilters} from "../store/filters/filter-selectors";

const FilterPanel = () => {
    const currentFilters=useSelector(selectFilters);


    if(currentFilters.length===0){
        return null;
    }
    
    return (
        <Card className={'filter-panel'}>
    <div className={'filter-panel-wrapper'}>
        <Stack>
            {currentFilters.map(filter=>(
                <Badge
                    variant={'clearable'}
                    key={filter}
                >{filter}</Badge>
            ))}

        </Stack>

        <button className={'link'}>Clear</button>
    </div>

        </Card>
    );
};

export default FilterPanel;
