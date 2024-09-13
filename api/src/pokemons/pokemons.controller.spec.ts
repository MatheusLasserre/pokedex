import { Test, TestingModule } from '@nestjs/testing';
import { PokemonsController } from './pokemons.controller';
import { PokemonsService } from './pokemons.service';

describe('PokemonsController', () => {
  let controller: PokemonsController;
  const mockPokemonsService = {
    getAll: jest.fn(),
    getAllSearch: jest.fn(),
    getByName: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonsController],
      providers: [PokemonsService],
    }).overrideProvider(PokemonsService).useValue(mockPokemonsService).compile();

    controller = module.get<PokemonsController>(PokemonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Should call getAllSearch', async () => {
    const query = "Pikachu";
    controller.getAll(undefined, undefined, query)
    expect(mockPokemonsService.getAllSearch).toHaveBeenCalled();

  })
  it('Should call getAll', async () => {
    const query = "Pikachu";
    controller.getAll(undefined, undefined, undefined)
    expect(mockPokemonsService.getAll).toHaveBeenCalled();

  })
  it('Should call getByName', async () => {
    const name = "Pikachu";
    controller.findOne(name)
    expect(mockPokemonsService.getByName).toHaveBeenCalled();

  })
});
