import { useEffect } from 'react';
import { createContext, useContext, useState, ReactNode } from 'react';
import { getAllTags } from '../api/tagService';
import { TagsContextType, Tag } from '../Interfaces';

const TagsContext = createContext<TagsContextType | undefined>(undefined);

export const useTags = () => {
    const context = useContext(TagsContext);
    if (!context) {
      throw new Error("useTags must be used within an TagsProvider");
    }
    return context;
  }; 

function TagsProvider({ children }: {children: ReactNode}) {
    const [allTag, setAllTag] = useState<Tag | null>(null);

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