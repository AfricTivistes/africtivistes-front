import * as React from "react"

import { ImportScript } from '../../services'

const Search = () =>{

  ImportScript("/js/load/search.js")

  return(<>
    <div className="search-box">
      <div className="closebtn">
        <span></span>
        <span></span>
      </div>
      <div className="searchform">
        <form action="#">
          <input type="text" placeholder="Search"/>
            <button type="button"><i className="fa fa-search" aria-label="search" /></button>
            </form>
        </div>
      </div>
  </>)
}

export default Search