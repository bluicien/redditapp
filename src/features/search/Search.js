import React from 'react';
import styles from '../../stylesheets/navBar.module.css'
import { selectSearchTerm, setSearchTerm } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon  from '../../search.svg';

export default function Search() {


    const dispatch = useDispatch();
    const searchTerm = useSelector(selectSearchTerm);

    const onChangeHandler = ({target}) => {
        dispatch(setSearchTerm(target.value));
    }



    return (
        <form className={styles.searchForm}>
            <input 
                className={styles.search} 
                id='search' 
                type='text' 
                placeholder='Search Reddit'
                onChange={onChangeHandler}
                value={searchTerm}
            />
            <button className={styles.searchBtn}><img src={searchIcon} alt='Search Icon'/></button>
        </form>
    );
}