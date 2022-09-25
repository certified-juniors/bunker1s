class VotingService {
    private votings: { [id: string]: Voting } = {}; // key - lobby id
    // todo
}

class Voting {
    public nicknames: string[] = [];
    constructor(nicknames: string[]) {
        this.nicknames = nicknames;
    }
    
    public vote(who: string, for_who: string) : void {
        // todo
    }

    public getResults(cbForBalagan: (nickname: string) => void) : void {
        // todo
        cbForBalagan("nickname");
    }
}

export default new VotingService();