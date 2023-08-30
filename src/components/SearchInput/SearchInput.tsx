import styles from './SearchInput.module.scss'
import {ChangeEvent, Dispatch, FC, SetStateAction} from "react";
import {IFilter} from "../../interfaces/IFilter";
import search from '../../assets/svg/search.svg'

interface ISearchInputProps {
    filter: IFilter;
    setFilter: Dispatch<SetStateAction<IFilter>>
}
export const SearchInput:FC<ISearchInputProps> = ({filter,setFilter}) => {

    return (
        <div className={styles.search}>
            <img className={styles.searchImg} src={search} alt=''/>
            <input
                value={filter.query}
                onChange={(e:ChangeEvent<HTMLInputElement>) => setFilter({...filter,query: e.target.value})}
                placeholder={'Поиск по имени'}
                className={styles.input}
            />
        </div>
    )
}