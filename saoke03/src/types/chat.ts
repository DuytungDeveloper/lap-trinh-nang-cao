export type Chat = {
  active?: any;
  seen?: boolean;
  avatar: string;
  name: string;
  text: string;
  time: string;
  textCount: number;
  dot: number;
};

export type ThongKeBankCode = { bankCode: string, color: string, count: number }
export type ThongKeDate = { total_credit: number, timestamp: number, date_time: Date, highest_credit: number, total_transaction: number }
export type ThongKeCredit = {
  data: {
    total_transaction: number,
    credit: number,
    percent: number,
    color?: string
  }[], total: number
}

export type ThongKeCommon = {
  totalCredit: number,
  totalRecord: number,
  allMoney: number,
  allBank: number,
}