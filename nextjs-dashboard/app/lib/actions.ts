"use server";

import { z } from "zod";
import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  await sql`INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})`;

  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

/**
 * > new Date()
    2025-02-22T02:38:17.181Z

    > new Date().toISOString()
    '2025-02-22T02:38:23.548Z'

    > new Date().toString()
    'Sat Feb 22 2025 11:39:46 GMT+0900 (Japan Standard Time)'

    > new Date().toISOString().split('T')
    [ '2025-02-22', '02:38:36.315Z' ]

    > new Date().toISOString().split('T')[0]
    '2025-02-22'
 */
