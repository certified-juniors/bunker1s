export abstract class BaseCard {
    readonly name: string;

    protected constructor(name: string) {
        this.name = name;
    }
}
