import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import data from '../../mock/data.json'
import {addPositions} from "./position-slice";
import {selectFilters} from "../filter/filter-slice";
import {selectVisiblePositions} from "../../store_legacy/positions/position-selectors";

export const usePositions = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters)
    const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

    useEffect(() => {
        dispatch(addPositions(data));
    })

    return positions
}

export const selectVisiblePositions = (state, filters) => {
    if (filters.length === 0) return state.positions;

    return state.positions.filter(pos => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);
        return filters.every(filter => posFilters.includes(filter))
    })
}