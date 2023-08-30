import styles from './SortSelect.module.scss'
import {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from "react";
import {IFilter} from "../../interfaces/IFilter";
import sort from '../../assets/svg/sort.svg'
import check from '../../assets/svg/check.svg'

interface ISortSelectProps {
    filter: IFilter;
    setFilter: Dispatch<SetStateAction<IFilter>>
}
export const SortSelect:FC<ISortSelectProps> = ({filter,setFilter}) => {

    const [isActive,setIsActive] = useState<boolean>(false);
    const refSelect = useRef<HTMLDivElement>(null);
    const options = [
        'Имя А-Я',
        'Имя Я-А',
        'Цвет А-Я',
        'Цвет Я-А',
        'Сначала моложе',
        'Сначала старше',
        'Высокий рейтинг',
        'Низкий рейтинг'
    ]

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event:MouseEvent) => {
        if (refSelect.current?.contains(event.target as Node)) {
            return;
        }

        setIsActive(false);
    };

    return (
        <div onClick={() => setIsActive(!isActive)}
             ref={refSelect}
             className={styles.select}
        >
            <div className={styles.sortType}>{filter.sort}</div>
            <img className={styles.sortImg} src={sort} alt=''/>
            {
                isActive &&
                <ul className={styles.popUp}>
                    {
                    options.map((option) => {
                        return (
                            <li className={`${styles.option} ${option === filter.sort ? styles.selected : ''}`}
                                onClick={() => setFilter({...filter,sort:option})}
                                key={option}
                            >
                                <div className={styles.optionName}>{option}</div>
                                {
                                    option === filter.sort &&
                                    <img className={styles.check}
                                         src={check}
                                         alt=''
                                    />
                                }
                            </li>
                        )
                        })
                    }
                </ul>
            }
        </div>
    )
}