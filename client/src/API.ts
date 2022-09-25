import { io, Socket } from 'socket.io-client';
import { ClientToServerEvents, ServerToClientEvents } from '../shared/events.model';
import Lobby from '../shared/lobby.model';
import Player from '../shared/general/player.model';
import Chac from '../shared/general/chac.model';
import SpecCard from '../shared/general/speccard.model';

const SOCKETURL = 'http://localhost:3000';
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(SOCKETURL);

async function get_lobby_list(): Promise<{
    id: string;
    name: string;
    players: number;
    isPassword: boolean;
}[]> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        socket.on('lobby_list', (data) => {
            resolve(data);
        });
        socket.emit('get_lobby_list');
    });
};

async function create_lobby(name: string, password: string, options: Lobby[ "options" ]): Promise<Lobby> {
    let myLobby: Lobby = {
        name,
        password,
        options
    }
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        socket.on('new_lobby', (lobby) => {
            resolve(lobby);
        });
        socket.emit('create_lobby', name, myLobby );
    });
}

async function join_lobby(name: string, password: string, id: string): Promise<Lobby> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        socket.on('new_lobby', (lobby)=> {
            resolve(lobby);
        })
        socket.emit('join_lobby', name, password, id);
    });
}

function leave_lobby() {
    socket.emit('leave_lobby');
}

//UPDATE LOBBY будет использоваться не только под switch_ready.
async function switch_ready(): Promise<void> {   
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        setTimeout(resolve, 1000);
        socket.emit('switch_ready');
    })
}

async function ready_to_fight (): Promise<void> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        setTimeout(resolve, 1000);
        socket.emit('ready_to_fight');
    })
}

async function open_chac(chac: Chac): Promise<void> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        setTimeout(resolve, 1000);
        socket.emit('open_chac', chac);
    })
}

async function use_speccard(cardid: SpecCard["id"]): Promise<void> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        setTimeout(resolve, 1000);
        socket.emit('use_speccard', cardid);
    })   
}

async function vote(victim: Player["nickname"]): Promise<void> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        setTimeout(resolve, 1000);
        socket.emit('vote', victim);
    })
}

async function im_done(): Promise<void> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        setTimeout(resolve, 1000);
        socket.emit('im_done');
    })
}

async function i_want_discussion(b: boolean): Promise<void> {
    return new Promise((resolve, reject) => {
        socket.on('errormsg', (msg) => {
            reject(msg);
        })
        setTimeout(resolve, 1000);
        socket.emit('i_want_discussion', b);
    })
}

export { get_lobby_list, create_lobby, join_lobby, leave_lobby, switch_ready, ready_to_fight, open_chac, use_speccard, vote, im_done, i_want_discussion, socket };
