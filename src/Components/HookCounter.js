import React, { useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1'

const HookCounter = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [songs, setSong] = useState([{"id":"1", "name":"Yellow"},{"id":"2", "name":"a sky full of stars"}])
    const handleChange = (event) => {
        setName(event.target.value)
    }
    const [newSong, setNewSong] = useState("")


    const addSong = () => {
        setSong([...songs,{"id":uuid(), "name":newSong}])

    }
    const handleSongChange = (event) => {
        setNewSong(event.target.value)
    }
    useEffect(() => {
        console.log("UseEffect hook ran",newSong)
    }, [newSong])
return <>
<input type="text" value = {name} onChange = {handleChange} />
<button onClick={() => setCount(count + 1)}>Click me {count}</button>
{songs.map(song => <h1 key ={song.id}>{song.name}</h1>)}
<input type="text" value = {newSong} onChange = {handleSongChange}></input>
<button onClick ={addSong}>Add</button></>
}

export default HookCounter