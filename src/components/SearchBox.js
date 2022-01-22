const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input
                type="search" 
                className="pa3 ba b--green bg-lightest-blue"
                placeholder="search robots" 
                onChange={searchChange}
                />
        </div>
    )
}

export default SearchBox;