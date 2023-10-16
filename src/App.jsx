import { useState } from "react";
import Title from "./Title";
import menu from './data'
import Menu from "./Menu";
import CategoriesBtn from "./CategoriesBtn";
const tempTitle=menu.map((item)=>item.category);
const tempSet=new Set(tempTitle);
const allCategories=['all',...tempSet]
//console.log(allCategories);
const App = () => {
  const [menuItems,setMenuItems]=useState(menu);
  //console.log(menuItems);
  const[categories,setCategories]=useState(allCategories);
  
  const filterItems=(category)=>{
    if(category=='all'){
      setMenuItems(menu);
      return;
    }else{
      const newItems=menu.filter((item)=>item.category===category);
    setMenuItems(newItems);
    }
    
  }



  return (
    <main>
      <section className="menu">
       <Title text={'Our-Menu'}/>
       <CategoriesBtn categories={categories} filterItems={filterItems}/>
       <Menu items={menuItems}/>
      </section>
    </main>
  )
};
export default App;
