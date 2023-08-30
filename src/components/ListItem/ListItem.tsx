import styles from './ListItem.module.scss'
import {IStudent} from "../../interfaces/IStudent";
import {FC} from "react";
import {toRussian} from "../../utils/toRussian";
import {getAge} from "../../utils/getAge";
import {toStringAge} from "../../utils/toStringAge";
import bucket from '../../assets/svg/bucket.svg';
import rating from '../../assets/svg/rating.svg'

interface IListItemProps {
    student: IStudent;
    deleteStudent: (id:number) => void
}

export const ListItem : FC<IListItemProps> = ({student,deleteStudent}) => {

    const color = {
        backgroundColor: student.color
    };

    return (
        <li className={styles.itemWrapper}>
            <div className={styles.gridWrapper}>
                <div className={styles.avatarWrapper}>
                    <img src={student.avatar} alt='' className={styles.avatar}></img>
                </div>
                <div className={styles.columnInfo}>{student.name}</div>
                <div className={styles.columnInfo}>{toRussian(student.specialty)}</div>
                <div className={styles.columnInfo}>{toRussian(student.group)}</div>
                <div className={styles.columnInfo}>{getAge(student.birthday)}</div>
                <div className={styles.columnInfo}>{student.rating}</div>
                <div className={styles.color} style={color}></div>
                <button onClick={() => deleteStudent(student.id)} className={styles.deleteButton}>
                    <img src={bucket} alt={''}/>
                </button>
            </div>
            <div className={styles.mobileWrapper}>
                <div className={styles.headCard}>
                    <div className={styles.mainInfo}>
                        <div className={styles.avatarWrapper}>
                            <img src={student.avatar} alt='' className={styles.avatar}></img>
                        </div>
                        <div className={styles.mixInfo}>
                            <div className={styles.studentName}>{student.name}</div>
                            <div className={styles.rowItems}>
                                <div className={styles.ColorMobile} style={color}></div>
                                <img className={styles.ratingImg}
                                     src={rating}
                                     alt={''}
                                />
                                <div className={styles.ratingMobile}>{student.rating}</div>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => deleteStudent(student.id)} className={styles.deleteButton}>
                        <img src={bucket} alt={''}/>
                    </button>
                </div>
                <div className={styles.bottomCard}>
                    <ul className={styles.decoratedList}>
                        <li>
                            <div className={styles.markerWrapper}>
                                <div className={styles.marker}></div>
                            </div>
                            <div className={styles.studentAge}>{toStringAge(getAge(student.birthday))}</div>
                        </li>
                        <li>
                            <div className={styles.markerWrapper}>
                                <div className={styles.marker}></div>
                            </div>
                            <div className={styles.studentAge}>{toRussian(student.specialty)}</div>
                        </li>
                        <li>
                            <div className={styles.markerWrapper}>
                                <div className={styles.marker}></div>
                            </div>
                            <div className={styles.studentAge}>{toRussian(student.group)}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    )
}