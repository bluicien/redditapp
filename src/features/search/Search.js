import React from 'react';
import styles from '../../stylesheets/navBar.module.css'
import { selectSearchOptions, selectSearchTerm, selectSearchType, setSearchTerm, setSearchType } from './searchSlice';
import { useDispatch, useSelector } from 'react-redux';
import searchIcon  from '../../search.svg';
import { createSearchParams, useNavigate } from 'react-router-dom';
import { searchReddit } from '../redditPosts/newsfeedSlice';

export default function Search() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchTerm = useSelector(selectSearchTerm);
    const searchOptions = useSelector(selectSearchOptions);
    const searchType = useSelector(selectSearchType);
    

    const handleSearch = (e) => {
        e.preventDefault();

        dispatch(searchReddit(searchTerm))

        const searchQueryParams = {
            keyword: searchTerm
        };
    
        const searchQueryString = createSearchParams(searchQueryParams);
    
        navigate({
            pathname: 'search',
            search: `?${searchQueryString}`
        }); 
        
    }


    const searchChangeHandler = ({target}) => {
        dispatch(setSearchTerm(target.value));
    }
    
    const selectChangeHandler = ({target}) => {
        dispatch(setSearchType(target.value));
    }


    return (
        <form onSubmit={handleSearch} className={styles.searchForm}>
            <select className={styles.searchType} value={searchType} onChange={selectChangeHandler}>
                {searchOptions.map((option, i) => (
                    <option key={i} value={option}>{option[0].toUpperCase() + option.slice(1)}</option> // Capitalize first letter of options.
                ))}
            </select>
            <input 
                className={styles.search} 
                id='search' 
                type='text' 
                placeholder='Search Reddit'
                onChange={searchChangeHandler}
                value={searchTerm}
            />
            <button className={styles.searchBtn} type='submit'>
                <img src={searchIcon} alt='Search Icon'/>
            </button>
        </form>
    );
}