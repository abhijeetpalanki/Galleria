import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="flex justify-center w-1/2 transition-all duration-[400ms] ease-in-out">
      <div className="w-[70%] m-[0_auto] text-center transition-all duration-[400ms] ease-in-out focus-within:w-full">
        <input
          type="text"
          placeholder="Search..."
          className="py-[0.6rem] px-8 bg-[#4f6877] outline-none border-none rounded-[50px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] w-full text-white placeholder:text-white/60"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Search;
