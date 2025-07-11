import {IsOptional, IsString} from "class-validator";

export class CreateLobbyDTO {
    @IsString()
    hostName: string;

    @IsOptional()
    @IsString()
    lobbyName: string;
}