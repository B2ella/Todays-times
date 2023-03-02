import { Icon, Search, InputStyles } from './SearchStyles';
import { ImNewspaper } from 'react-icons/im';
import { useState } from 'react';




const TheSearch = ({SearchArticleTitle}) => {
const [search, setSearch] = useState("")


 const handleSearch = (e) => {
    SearchArticleTitle(e.target.value);}

 const handlePress = (e) => {
        if(e.key === "Enter") {
        } else
        SearchArticleTitle(search)}


   return (
            <Search>

            <InputStyles type="text" placeholder="Type away"  onChange={handleSearch} onKeyDown={handlePress}/>
            <Icon><ImNewspaper/></Icon>
            
            </Search>
        )}

export default TheSearch;