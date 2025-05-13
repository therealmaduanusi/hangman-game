import React from 'react'
import returnImg from '../assets/icon-back.svg'
function Category({categories,onHandleCategory, onGetCategory}) {
  let categoryNames = []
  // Loop through categories obj keys
  for (const category in categories) {
    categoryNames.push(category) // add the each key at the end of the "categoryArr"
    // console.log(category);
  }
  console.log(categoryNames);
  
  
  return (
    <section className={`min-h-[100dvh] flex flex-col justify-center gap-y-[2rem] md:px-[4rem] max-md:p-[1rem]`}>
      <div className={`flex items-center justify-between`}>
        <div onClick={onHandleCategory} className={`flex justify-center items-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh w-[94px] h-[94px] max-md:h-[64px] max-md:w-[64px] cursor-pointer`} to='/'>
          <img src={returnImg} alt="return home" />
        </div>
        <h1 className={`text-center max-md:text-end md:w-[100%] xl:text-[10rem] text-[3.4rem] bg-gradient-to-b from-[#67B6FF] to-[#fff] bg-clip-text text-transparent text-stroke`}>Pick a Category</h1>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem]`}>
        {categoryNames.map(categoryName => <CategoryArr key={categoryName} onGetCategory={onGetCategory} categoryName={categoryName} />)}
      </div>
    </section>
  )
}

function CategoryArr({categoryName, onGetCategory}) {
  return (
    <div onClick={ () => onGetCategory(categoryName)} className={`text-[#fff] bg-[#2463ff] py-[1rem] md:py-[3rem] w-[384p] text-center text-[2rem] rounded-[20px] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd] cursor-pointer hover:bg-[#4277fd] hover:border-[#2463ff] uppercase`}>{categoryName}</div>
  )
}

export default Category