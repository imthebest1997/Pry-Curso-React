import { AddCategory, GifGrid } from "./components";

import { useState } from "react"

export const GifExpertApp = ()=>{
    
    const [categories, setCategories] = useState(['Dragon Ball', "Chito"]);

    const onAddCategory = (newCategory)=>{
        // categories.push("Valorant");
        // setCategories([...categories]);        

        if( categories.includes(newCategory) ) return;        

        setCategories([newCategory, ...categories]);
    }
        
    return <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // setCategories = { setCategories }
            onNewCategory = { (value) => onAddCategory(value) }
        />

        { 
            categories.map(category => (
                <GifGrid 
                    key={ category } 
                    category={category}/>
            ))
        }            

            {/* Gif Item */}        
    </>
}