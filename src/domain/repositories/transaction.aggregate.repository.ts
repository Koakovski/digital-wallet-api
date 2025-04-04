import { TransactionAggregate } from '../aggregates/transaction.aggregate';
import { Paginated, PaginationRequest } from '../base/paginated';
import { TransactionUserRole } from '../entities/transaction.entity';

export interface TransactionAggregateRepository {
  findById(id: string): Promise<TransactionAggregate | null>;
  create(aggregate: TransactionAggregate): Promise<TransactionAggregate>;
  update(aggregate: TransactionAggregate): Promise<TransactionAggregate>;
  findPaginatedOfUser(
    params: TransactionAggregateFindPaginatedOfUserParams,
  ): Promise<Paginated<TransactionAggregate>>;
}

export const TransactionAggregateRepository = Symbol(
  'TransactionAggregateRepository',
);

export type TransactionAggregateFindPaginatedOfUserParams = {
  userId: string;
  role?: TransactionUserRole;
  receiverIds?: string[];
  paginationRequest?: PaginationRequest;
};
