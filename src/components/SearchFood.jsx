// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from "react";

// Iteration 5
function SearchFood({filter}) {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  }
  const submitHandler = (e) => {
      e.preventDefault();
      filter(search);
      setSearch("");
  }
  return (
    <div>
    <Divider>Search</Divider>

    <form className="w-50 mx-auto mt-5 mb-3" onSubmit={submitHandler}>
            <div className="mb-3">
                <Input value={search} onChange={searchHandler} type="text" className="form-control"  aria-describedby="emailHelp" placeholder="Search for food"/>
            </div>
            <button type="submit" className="btn btn-primary">Search for food</button>
        </form>
    </div>
  );
}

export default SearchFood;
