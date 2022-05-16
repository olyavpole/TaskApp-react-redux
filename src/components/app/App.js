
import { useSelector } from 'react-redux';

import List from '../list/List';
import Button from '../button/Button';

import './App.css';

const App = () => {

  const lists = useSelector(state => state.listReducer);

  const data = lists.map(list => {
    return (
      <List title={list.title} cards={list.cards} listID={list.id} key={list.id}/>
    )
  })

  return (
    <>
      <div className="list__wrapper">
        {data}
        <Button type='list'/>
      </div>
    </>
  )
}

export default App;
