import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { assets } from "../assets/frontend_assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(Context);
  // const [visible,setVisible] = useState(false)
  // const location = useLocation()

  // useEffect(()=>{
  //   if(location.pathname.includes('collection')){
  //     setVisible(true)
  //   } 
  //   else{
  //     setVisible(false) 
  //   }
  // },[location])

  return showSearch ? (
    <div className="border-t border-b bg-gray-50 text-center flex items-center justify-center">
      <div className="flex items-center border border-gray-400 rounded-full px-5 py-2 my-5 mx-2 w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
          type="text"
          placeholder="Search"
        />
        <img className="w-4 cursor-pointer" src={assets.search_icon}/>
      </div>
      <img onClick={()=>setShowSearch(false)} className="w-4 cursor-pointer" src={assets.cross_icon}/>
    </div>
  ) : null;
};

export default SearchBar;
