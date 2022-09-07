import React from 'react';

const RoomsList = () => {

    return (
        <div className='RoomsList'>
            <div className='RoomsListInnerContainer'>
                <h1 className='RoomsListHeading'>Rooms List</h1>
                <div className='RoomsListContainer'>
                    <div className='RoomsSearc'>
                        <input placeholder='Search Rooms' className='RoomsListInput' type='text' />
                        <button className='SearchButton'>Search</button>
                    </div>
                    <div className='RoomsListContainerInner'>
                        <button><h3>Room 1</h3><p>5/14</p></button>
                        <button><h3>Room 2</h3><p>5/14</p></button>
                        <button><h3>Room 3</h3><p>5/14</p></button>
                        <button><h3>Room 4</h3><p>5/14</p></button>
                        <button><h3>Room 5</h3><p>5/14</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomsList;