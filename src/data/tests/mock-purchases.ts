import { SavePurchases } from '@/domain/usecases';
import faker from 'faker';

export const mockPurchases = (): Array<SavePurchases.Params> => [
  {
    id: faker.random.uuid(),
    date: faker.date.recent(),
    Value: faker.random.number(),
  },
  {
    id: faker.random.uuid(),
    date: faker.date.recent(),
    Value: faker.random.number(),
  },
];
