import {_ApiResponse} from "@/helpers/types";

export interface _HasCRUD {
    Index(): Promise<_ApiResponse>
    Store(): Promise<_ApiResponse>
    Update(): Promise<_ApiResponse>
    Destroy(): Promise<_ApiResponse>
}
export interface _HasId {
    id: number,
    [key: string]: any
}
