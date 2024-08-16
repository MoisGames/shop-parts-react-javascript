import {makeAutoObservable} from 'mobx'

export default class PartStore {
    constructor() {
        this._categories = []
        this._brands = []
        this._parts = []
        this._selectedCategory = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
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
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }
    setLimit(limit) {
        this._limit = limit
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
        this.setPage(1)
        return this._selectedCategory
    }
    get selectedBrand() {
        this.setPage(1)
        return this._selectedBrand
    }
    get page() {
        return this._page 
    }
    
    get totalCount() {
        return this._totalCount
    }
    
    get limit() {
        return this._limit
    }
    
    

}
