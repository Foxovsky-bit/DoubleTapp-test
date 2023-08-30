import {IStudent} from "./IStudent";
import {IResponseError} from "./IResponseError";

export interface IResponseStudents {
    students?: IStudent[]
    errors?: IResponseError[]
}