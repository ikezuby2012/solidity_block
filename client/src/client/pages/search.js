import React from 'react';

import { Search } from "@material-ui/icons";

const SearchPanel = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className="search">
            <header className="search-form">
                <form className={"search-form"}>
                    <button className={"search-form_button"}>
                        <Search className={"search-form_icon"} />
                    </button>
                    <input
                        type="search"
                        className={"search-form_input"}
                        placeholder={`search for drugs`}
                    // ref={searchRef}
                    // onChange={(e) => setValue(e.target.value)}
                    />
                </form>
            </header>
            <main className="search_block">
                {/* not found */}
                <h2 className="search_notText">type a keyword to search...</h2>
            </main>
        </section>
    );
}

export default SearchPanel;
