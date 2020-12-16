import React, {useEffect} from 'react';
import './App.scss';
import Field from './Components/Field'
import {useDispatch} from "react-redux";
import {setPlayerPos} from "./redux/actions";

const App: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        window.addEventListener('keydown', event => {
            switch (event.key) {
                case "ArrowUp":
                    dispatch(setPlayerPos(-1, 0))
                    break
                case 'ArrowDown':
                    dispatch(setPlayerPos(1, 0))
                    break
                case 'ArrowLeft':
                    dispatch(setPlayerPos(0, -1))
                    break
                case 'ArrowRight':
                    dispatch(setPlayerPos(0, 1))
            }
        })
    })
  return (
    <div className="App" >
        <Field />
    </div>
  );
}

export default App;
