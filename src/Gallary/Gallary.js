import React, {useEffect, useState} from 'react'
import './Gallary.css';
import { Tree } from '../Tree/Tree';

export const Gallary = (props) => {
    const [trees, setTrees] = useState(null);
    
    useEffect(() => {
        const fetchTree = async () => 
            await fetch("/ecosia-frontend-developer/trees.json")
            .then(response => response.json())
            .then(trees => setTrees(trees))
        fetchTree()
      }, []);

    return trees && trees.trees.map((tree, index) => (
        <Tree key={index} {...tree} ></Tree>
    ))
}
