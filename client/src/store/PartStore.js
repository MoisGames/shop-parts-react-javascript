import {makeAutoObservable} from 'mobx'

export default class PartStore {
    constructor() {
        this._categories = []
        this._brands = []
        this._parts = []
        this._selectedCategory = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }
    setCategories(categories) {
        this._categories = categories
    }
    setBrands(brands) {
        this._brands = brands
    }
    setParts(parts) {
        this._parts = parts
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get categories() {
        return this._categories
    }
    get brands() {
        return this._brands
    }
    get parts() {
        return this._parts
    }

    get selectedCategory() {
        return this._selectedCategory
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    

}
