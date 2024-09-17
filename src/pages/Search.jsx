import { useState } from "react"

export function Search() {
    const [searchResults, setSearchResults] = useState([])
    
    return (
        <section className="search-page" >
            <h2>Search</h2>
            <form>
                <div className="search-input">
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1710508377/icons/search_icsjot_ag7qif.svg" alt="" />
                    <input type="text" placeholder="Search Doctorate" />
                </div>
            </form>
            {searchResults.length > 0 && <div className="search-results">
                <h4>Chapters</h4>
            </div> }
        </section>
    )
}