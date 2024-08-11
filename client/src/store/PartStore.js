import {makeAutoObservable} from 'mobx'

export default class PartStore {
    constructor() {
        this._categories = [
            {id:1, name:'Автомобильное масло'}, 
            {id:2, name:'Автозапчасти для авто РФ'},
            {id:3, name:'Автозапчасти для иномарок'},
            {id:4, name:'Аккумуляторы'},
        ]
        this._brands = [
            {id:1, name:'Castrol', categoryId: 1}, 
            {id:2, name:' KOYO', categoryId: 4},
            {id:3, name:'555', categoryId: 2},
            {id:4, name:'Запчасти САС', categoryId: 3},
        ]
        this._parts = [
            {id:341, groups:"Подшипники  KOYO",brands:"KOYO",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"}, 
            {id:342, groups:"ЗАПЧАСТИ САС",brands:"ЗАПЧАСТИ САС",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"},
            {id:343, groups:"CASTROL",brands:"CASTROL",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"},
            {id:344, groups:"ELF",brands:"ELF",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"},
            {id:345, groups:"Подшипники  KOYO",brands:"KOYO",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"}, 
            {id:346, groups:"ЗАПЧАСТИ САС",brands:"ЗАПЧАСТИ САС",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"},
            {id:347, groups:"CASTROL",brands:"CASTROL",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"},
            {id:348, groups:"ELF",brands:"ELF",number_brands:"RNU0727",analogue: "Отсутствует", name_parts: "RNU 0727 PZ  (LAND CR 80-задняя полуось) KOYO (90365-47013) 47-71-27", price: 1122, diksona: 1, semaf: 0,lado: 0,kalinina: 0, img: "https://img.hyperauto.ru/brands/koyo.png"}
        ]
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
