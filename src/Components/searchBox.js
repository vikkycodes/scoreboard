

const SearchBox = ({quary, onChange}) => {
    return (  
        <input 
         type="text"
         value={quary}
         name="search"
         onChange={e => onChange(e.target.value)} 
        />
    );
}
 
export default SearchBox;