import { useState, KeyboardEvent } from 'react';
import {HiDocumentAdd}  from "react-icons/hi";


import {Container} from './style';

type inputTaskProps = {
    onEnter: (itemName:string) => void
}


const InputTask = ({onEnter}:inputTaskProps) => {
  const [task, setTask] = useState('');  

  const handleKeyUp =(e:KeyboardEvent) => {
    if(e.code === 'Enter' && task !== '') {
        onEnter(task);
        setTask('');
    }
  }

  return (
    <Container>

        <HiDocumentAdd size={45} color={'#ccc'}/>
        <input 
            type="text" 
            placeholder='Escreva uma nova tarefa e tecle ENTER para incluir na lista.'
            value={task}
            onChange={e => setTask(e.target.value)}
            onKeyUp={handleKeyUp}
        />

      
    </Container>
  )
}

export default InputTask;
