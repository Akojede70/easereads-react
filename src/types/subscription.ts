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
