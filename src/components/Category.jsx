import React from 'react'
import returnImg from '../assets/icon-back.svg'
function Category({onHandleCategory, categoryNames, onGetCategory}) {
  
  return (
    <div className={`flex flex-col gap-y-[1rem] md:gap-y-[10rem]`}>
      <div className={`flex items-center max-sm:justify-between`}>
        <div onClick={onHandleCategory} className={`flex justify-center items-center rounded-full bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-sh w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] cursor-pointer`} to='/'>
          <img src={returnImg} alt="return home" />
        </div>
        <h1 className={`text-center max-md:text-end xs:w-[100%] md:text-[5rem] max-md:text-[2rem] bg-gradient-to-b from-[#67B6FF] to-[#fff] bg-clip-text text-transparent text-stroke`}>Pick a Category</h1>
      </div>
      <div className={`grid md:grid-cols-3 gap-[2rem]`}>
        {categoryNames.map(categoryName => <CategoryArr onGetCategory={onGetCategory} key={categoryName} categoryName={categoryName} />)}
      </div>
    </div>
  )
}

function CategoryArr({categoryName, onGetCategory}) {
  return (
    <div onClick={ () => onGetCategory(categoryName)} className={`text-[#fff] bg-[#2463ff] py-[1rem] md:py-[3rem] text-center text-[2rem] rounded-[20px] border-t border-t-[0.3rem] border-r border-r-[0.3rem] border-l border-l-[0.3rem] border-[#4277fd] cursor-pointer hover:bg-[#4277fd] hover:border-[#2463ff] uppercase`}>{categoryName}</div>
  )
}

export default Category