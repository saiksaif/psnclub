import React, { useState, useParams } from 'react'

const Search = () => {
  const [searchKey, setSearchKey] = useState("");

  // get the searchKeyVal variable from the URL parameters
  const searchKeyVal = useParams().searchKey;

  return (
    <div>
      Search {searchKeyVal}
    </div>
  )
}

export default Search