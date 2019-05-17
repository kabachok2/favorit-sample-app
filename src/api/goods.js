import { API_KEY, API_URL } from "../config"
import { fetchUtil } from "../helpers"

export default {
    /**
     * Получение данных детали
     * @param {number} - Номер детали
     * @param {brand} - Брэнд детали
     * @param {analogues} - Показывать Аналоги детали 
     */
    getGoods: ({ number, brand = "", showAnalogues = false }) =>
        fetchUtil(`${API_URL}/hs/hsprice/?key=${API_KEY}&number=${escape(number)}&brand=${escape(brand)}&analogues=${showAnalogues ? "on" : ""}`),
}