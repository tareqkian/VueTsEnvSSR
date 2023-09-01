import * as _ from "lodash";
import {_HasId} from "@/helpers/interfaces";

export const _ObjInArr = async (Array: any[], Object: _HasId) => {
    const index = _.findIndex(Array, ['id', Object.id])
    Array[index] = Object
}
