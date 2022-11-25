import { z } from 'zod';

export const createBudgetSchema = z.object({
    body: z.object({
        amount: z.number({
            required_error: "amount cannot be empty"
        }),

        month: z.enum([
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ]),

    })
});

export type createBudgetInput = z.TypeOf<typeof createBudgetSchema>;