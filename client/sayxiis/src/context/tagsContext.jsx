import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { getAllTags } from '../api/tagService';

const TagsContext = createContext({});

export const useTags = () => {
    const context = useContext(TagsContext);
    return context;
  }; 

function TagsProvider({children}) {
    const [allTag, setAllTag] = useState([]);

    useEffect(() => {
        getAllTags()
        .then((res) => {
            setAllTag(res);
        })
        .catch((error) => {
            console.error('Error fetching tags:', error.message);
        });
    }, []);

  return (
    <TagsContext.Provider value={{ allTag, setAllTag }}>
        {children}
    </TagsContext.Provider>
  )
}

export default TagsProvider