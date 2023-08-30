import styles from './Students.module.scss'
import {SearchInput} from "../../components/SearchInput/SearchInput";
import {SortSelect} from "../../components/SortSelect/SortSelect";
import {List} from "../../components/List/List";
import {useState} from "react";
import {IFilter} from "../../interfaces/IFilter";
export const Students = () => {

    const [filter,setFilter] = useState<IFilter>({query: '', sort: 'Имя А-Я'});

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.bold}>Студенты</div>
            <div className={styles.filters}>
                <SearchInput setFilter={setFilter} filter={filter}/>
                <SortSelect  setFilter={setFilter} filter={filter}/>
            </div>
            <List filter={filter}/>
        </div>
    )
}