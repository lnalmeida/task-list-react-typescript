import {useEffect, useState} from 'react'
import { JsxElement } from 'typescript';
import * as C from './App.styles'
import InputTask from './components/InputTask';
import ListItem from './components/ListItem'

import { Item } from './types/item'

function App() {
  const [list, setList] = useState<Item[]>([]);

  useEffect(function (): any {
    var storedList = localStorage.list;
    if(storedList) setList(JSON.parse(storedList));
  },[])

  const handleAddItem = (itemName: string) => {
    let newList = [...list]
    const newItem = {
      id: list.length+1,
      title: itemName,
      done: false
    }
    newList.push(newItem);
    localStorage.list = JSON.stringify(newList);
    setList(newList);
  };

  const handleChangItem = (itemID: number, itemDone: boolean) => {
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === itemID){
        newList[i].done = itemDone;
      }
    }
    setList(newList);
  }



  return (
    <C.Container>
      <C.Content>
        <C.Header>Task List React Typescript</C.Header>

            <InputTask onEnter={handleAddItem} />

            <C.List>
              {list.map((item, index) => (
                <>
                  <ListItem 
                    key={index} 
                    item={item}
                    onChange={handleChangItem}
                  />
                </>
              ))}
            </C.List>
      </C.Content>
    </C.Container>
  )
}

export default App
