export type OrderData = {
  id: string;
  accountType: "free" | "premium";
  amount: number;
  contact: {
    email: string;
    phone: string;
  };
};

function sumOrders(orders: OrderData[]): number {
  let sum: number = 0;
  for (const order of orders) {
    sum += order.amount;
  }
  return sum;
}

export function reportOrders(orders: OrderData[] | null): string {
  const sum = sumOrders(orders!);
  return `Total amount for orders: ${sum}`;
}
