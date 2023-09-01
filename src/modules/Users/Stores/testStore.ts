import {defineStore} from "pinia";
import {reactive} from "vue";
import {Api} from "@/helpers/classes";

export const useTestStore = defineStore('testStore', () => {
  const res = reactive({
    loading: false,
    data: [],
    pagination: []
  })

  const Index = () => new Api(res, '/test').Index()
  const Index2 = () => new Api(res, '/test2').Index()

  return {
    res,
    Index,
    Index2,
  }
})