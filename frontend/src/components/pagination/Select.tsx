/* eslint-disable */
import React, {ChangeEvent, useState} from 'react'
import {useDispatch} from 'react-redux';


type PropsType = {
    count: number
}
const Select =(props: PropsType) => {
    const {count} = props
    const dispatch = useDispatch()
    const [state, setState] = useState<number>(count)

    const onClickHandler = () =>{
        // dispatch(setPageCountCardsAC(state))
    }

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>)=>{
        setState(+e.currentTarget.value)
    }
    const arOptions = Array.from(Array(30).keys())
    const option = arOptions.map((index,arr)=> {
        return <option key={index}>{arr}</option>
    })
    return (
        <div>
            <select value={state}
                    onChange={onChangeHandler}
                    onClick={onClickHandler}
                    // className={style.select}
            >
                {option}
            </select>
        </div>
    );
};

export default Select;
