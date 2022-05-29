import type { RequestEvent } from '@sveltejs/kit';
import type { NewTransaction, NewTransactionResponse } from '$mock/api/models/expense_model';
import { mockNewTransaction } from '$mock/api/expense/expenses';

/** @type {import('./[id]').RequestHandler} */
export async function post({ request }: RequestEvent): Promise<NewTransactionResponse> {
	const body: NewTransaction = await request.json();
	return mockNewTransaction({ newTransaction: body });
}
