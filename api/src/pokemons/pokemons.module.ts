import { Module } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { PokemonsController } from './pokemons.controller';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  controllers: [PokemonsController],
  providers: [PokemonsService],
  imports: [HttpModule, CacheModule.register()],
})
export class PokemonsModule {}
