import * as _ from "lodash"
export const resetStore = (pinia: any): void => {
    const initialState = _.cloneDeep(pinia.store.$state)
    pinia.store.$reset = () => pinia.store.$patch(_.cloneDeep(initialState))
}