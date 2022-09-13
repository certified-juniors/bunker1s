interface ClientToServerEvents {
    check_me: (s: string) => void;
    join_lobby: (nickname: string, s: string) => void;
    create_lobby: (s: string) => void;
    leave_lobby: () => void;
    switch_ready: () => void;
    ready_to_fight: () => void;
    open_chac: () => void;
    use_speccard: (cardid: number) => void;
    vote: (victimid: number) => void;
    im_done: () => void;
}

interface ServerToClientEvents {
    // TODO
}

export { ClientToServerEvents, ServerToClientEvents };