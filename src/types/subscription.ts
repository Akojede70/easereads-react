export interface PayStackWebhookInterface {
//   headers: {
//     'x-paystack-signature': string;
//   };
  event: string; 
  data: {
    reference: string ;
    amount: number ;
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
      valuePrice: number;
      period: 'monthly' | 'yearly' | string;
      method: 'payment' | string;
    };
  };
}
