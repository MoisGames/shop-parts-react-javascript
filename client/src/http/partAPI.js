import { $host } from "."

export const fetchCategories = async () => {
    const {data} = await $host.get('api/category')
    return data;
}
export const createCategory = async (category) => {
    const {data} = await $host.post('api/category', category)
    return data;
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data;
}
export const createBrand = async (brand) => {
    const {data} = await $host.post('api/brand', brand)
    return data;
}

export const fetchParts = async () => {
    const {data} = await $host.get('api/part')
    return data;
}

export const fetchOneParts = async (id) => {
    const {data} = await $host.get('api/part/' + id)
    return data;
}