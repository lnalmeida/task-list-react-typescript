import {Container} from './style';

import {Item} from '../../types/item'

type ItemProps = {
  item: Item,
  onChange: (itemID: number, itmDone: boolean) => void
}

const ListItem = ({item, onChange}:ItemProps) => {

  return (
  <Container isDone={item.done}>
    <input 
      type="checkbox" 
      checked={item.done} 
      onChange={ e => onChange(item.id, e.target.checked)} 
    />
    <label>{item.title}</label>
  </Container>
)};

export default ListItem;
