import { $host } from "."

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data;
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data;
}