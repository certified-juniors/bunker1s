import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {CreateLobbyDTO} from "./lobby.dto";
import { Lobby } from '../../entities';
import {LobbyService} from "../../services";

@Controller('lobby')
export class LobbyController {
    constructor(private readonly lobbyService: LobbyService) {}

    @Post()
    create(@Body() dto: CreateLobbyDTO): Lobby {
        return this.lobbyService.createLobby(dto);
    }

    @Get()
    list(): Lobby[] {
        return this.lobbyService.listLobbies();
    }

    @Get(':id')
    get(@Param('id') id: string): Lobby | undefined {
        return this.lobbyService.getLobby(id);
    }
}