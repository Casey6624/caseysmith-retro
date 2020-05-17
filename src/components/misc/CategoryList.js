import React from "react"
import "./CategoryList.css"

export default function CategoryList({ categories }){

    if(categories){
        return(
                <ul className="list-container">
                    {categories.map(({ name }) => (<h1 className={`list-item ${name.toLowerCase()}`}>{name}</h1>))}
                </ul>
        ) 
    }

return null

}