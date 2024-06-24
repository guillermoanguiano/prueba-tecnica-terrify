import { mockData } from "@/util/mockdata";
import { api } from "./request";

export const mediaApi = {
    // getMedia: async () => {
    //     return await api({
    //         method: 'GET',
    //         endpoint: '/promotionVideo'
    //     })
    // }
    getMedia: async () => {
        return mockData;
    }
};
