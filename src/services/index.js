import { useEffect } from 'react'

/*export const useImportScript = resourceUrl => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = true;
        if (window.jQuery) {
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            }
        }
    }, [resourceUrl]);
}
*/

export const useImportScript = resourceUrl => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = resourceUrl;
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        }
    }, [resourceUrl]);
}

export const flatListToHierarchical = (
    data = [],
    { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
) => {
    const tree = []
    const childrenOf = {}
    data.forEach(item => {
        const newItem = { ...item }
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
        childrenOf[id] = childrenOf[id] || []
        newItem[childrenKey] = childrenOf[id]
        parentId
            ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
            : tree.push(newItem)
    })
    return tree
}
