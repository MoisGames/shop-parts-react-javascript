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

export const fetchParts = async (categoryId,brandId,page,limit = 12) => {
    const {data} = await $host.get('api/part', {params: {
        categoryId,brandId,page,limit
    }})
    return data;
}

export const createPart = async (part) => {
    const {data} = await $host.post('api/part', part)
    return data;
}

export const fetchOneParts = async (id) => {
    const {data} = await $host.get('api/part/' + id)
    return data;
}