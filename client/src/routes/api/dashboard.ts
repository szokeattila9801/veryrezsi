import type { GetExpensesRequestData, GetExpensesResponse } from '$mock/api/models/expense_model';

import { mockGetExpenses } from '$mock/api/expense/expenses';

export async function getExpenses(data: GetExpensesRequestData): Promise<GetExpensesResponse> {
	return mockGetExpenses({ userId: data.userId });
}
