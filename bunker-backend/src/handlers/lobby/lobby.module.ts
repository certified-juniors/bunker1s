import {Module} from '@nestjs/common';
import {LobbyController} from "./lobby.controller";
import {LobbyService} from "../../services";

@Module({
    controllers: [LobbyController],
    providers: [LobbyService],
    exports: [LobbyService],
})

export class LobbyModule {
}