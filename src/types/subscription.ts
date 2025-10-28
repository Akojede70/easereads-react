export interface PayStackWebhookInterface {
//   headers: {
//     'x-paystack-signature': string;
//   };
  event: string; 
  data: {
    reference: string ;
    amount: number | null | string;
    status: 'success' | 'failed' | 'abandoned' | string ;
    channel: 'card' | 'bank' | 'ussd' | string;
    customer: {
      id: number | null;
      email: string | null;
    };
    metadata: {
      type: string; 
      userId: number | null ;
      userName: string | null | undefined;
      subjects: string[];
      program: string | null | undefined;
      itemId: string;
      valuePrice: number | null | undefined | string
      period: 'monthly' | 'yearly' | string | number;
      method: 'payment' | string;
    };
  };
}


export interface SubscriptionHistory {
  subjects: string[];
  duration: string;
  expiresAt: string;
  daysLeft: number;
  totalPaid: number;
  program: string;
  discount?: number | null;
  transactionDate: string;
  method: string;
  status: string;
}
