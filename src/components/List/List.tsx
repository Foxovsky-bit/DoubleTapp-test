import styles from './List.module.scss'
import {ListItem} from "../ListItem/ListItem";
import {FC, useCallback, useEffect, useMemo, useState} from "react";
import {getStudents} from "../../api/requests/getStudents";
import {IStudent} from "../../interfaces/IStudent";
import {getAge} from "../../utils/getAge";
import {IFilter} from "../../interfaces/IFilter";
import {Loader} from "../Loader/Loader";
import {IResponseStudents} from "../../interfaces/IResponseStudents";

interface IListProps {
    filter: IFilter
}

export const List: FC<IListProps> = ({filter})  => {

    const [students,setStudents] = useState<IStudent[]>([]);
    const [isStudentsLoading,setIsStudentsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsStudentsLoading(true)
        getStudents().then((response:IResponseStudents) => {
            if (response.errors) {
                alert('Ошибка получения данных')
                return
            }
            setStudents(response.students!);
            setIsStudentsLoading(false)
        });
    },[])

    const searchedStudents = useMemo(() => {
        if (filter.query) {
            return [...students].filter(student => student.name.toLowerCase().includes(filter.query.toLowerCase()))
        }
        return students
    },[filter.query,students])

    const sortedAndSearchedStudents = useMemo(() => {
        const sortFunction = (a:IStudent, b:IStudent) => {
            switch (filter.sort) {
                case 'Имя А-Я':
                    return a.name.localeCompare(b.name);
                case 'Имя Я-А':
                    return b.name.localeCompare(a.name);
                case 'Сначала моложе':
                    return getAge(a.birthday) - getAge(b.birthday);
                case 'Сначала старше':
                    return getAge(b.birthday) - getAge(a.birthday);
                case 'Высокий рейтинг':
                    return b.rating - a.rating;
                case 'Низкий рейтинг':
                    return a.rating - b.rating;
                case 'Цвет А-Я':
                    return a.color.localeCompare(b.color);
                case 'Цвет Я-А':
                    return b.color.localeCompare(a.color);
                default:
                    return 0;
            }
        };

        return [...searchedStudents].sort(sortFunction);
    }, [filter.sort, searchedStudents]);

    const deleteStudent = useCallback(
        (id: number) => {
            setStudents([...students].filter(student => student.id !== id))
        },
        [students]
    );

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.columnNames}>
                <div className={styles.column}></div>
                <div className={styles.column}>ФИО</div>
                <div className={styles.column}>Специальность</div>
                <div className={styles.column}>Группа</div>
                <div className={styles.column}>Возраст</div>
                <div className={styles.column}>Рейтинг</div>
                <div className={styles.column}></div>
                <div className={styles.column}></div>
            </div>
            {
                isStudentsLoading
                    ? <Loader/>
                    : sortedAndSearchedStudents.length !== 0
                        ?
                        <ul className={styles.studentList}>
                            {
                                sortedAndSearchedStudents.map((student:IStudent) => {
                                    return(
                                        <ListItem
                                            student={student}
                                            deleteStudent={deleteStudent}
                                            key={student.id}
                                        />
                                    )
                                })
                            }
                        </ul>
                        : <div className={styles.notFound}>Студенты не найдены</div>
            }
        </div>
    )
}