import api from "@axios";
import * as _ from "lodash";
import {ref} from "vue";
import {_HasCRUD, _HasId} from "@/helpers/interfaces";
import {_ApiResponse, _DataObject} from "@/helpers/types";
import {_ObjInArr} from "@/helpers/objectInArray";
import {signal} from "@/helpers/cancelSignal.ts";

const currentController = ref<any>();
export class Api implements _HasCRUD {
    constructor(
      private Object: _DataObject,
      private URL: string,
      private Payload?: _HasId
    ) {}

    async Index(): Promise<_ApiResponse> {
        this.Object.loading = true
        try {
            const { data } = await api.get(this.URL,{ signal: signal(currentController) })
            this.Object.data = data.data
            if (_.has(this.Object, 'pagination')) this.Object.pagination = data.meta
            this.Object.loading = false
            return data
        } catch (e: any) {
            // this.Object.loading = false
            throw e.response.data.errors
        }
    }
    async Store(): Promise<_ApiResponse> {
        try {
            const { data } = await api.post(this.URL, this.Payload)
            // if ( _.size(this.Object) ) await new Classes(this.Object, this.URL).Index()
            if ( _.size(this.Object) ) await this.Index()
            return data
        } catch (e: any) {
            throw e.response.data.errors
        }
    }
    async Update(): Promise<_ApiResponse> {
        try {
            const { data } = await api.put(`${this.URL}/${this.Payload?.id}`)
            await _ObjInArr(this.Object.data, data.data)
            return data
        } catch (e: any) {
            throw e.response.data.errors
        }
    }
    async Destroy(): Promise<_ApiResponse> {
        try {
            const { data } = await api.delete(`${this.URL}/${this.Payload?.id}`)
            await this.Index()
            return data
        } catch (e: any) {
            throw e.response.data.errors
        }
    }
}
