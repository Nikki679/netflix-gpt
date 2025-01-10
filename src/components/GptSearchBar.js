import React from "react";
import { useSelector } from "react-redux";
import lang from '../utils/languageContants';

const GptSearchBar = () => {
    const langkey = useSelector((store) => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder={lang[langkey].gptSearchPlaceholder}
          className="col-span-9 p-4 m-4 text-white"
        />
        <button className="bg-red-500 col-span-3 m-4 py-2 px-4">
        {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
