export interface IItem {
  code: string;
  ShortName: string;
  FullName: string;
}

export type IExhange = IItem & {
  description: string;
};

interface IDetail {
  code: string;
  ShortName: string;
  FullName: string;
  buying: number;
  selling: number;
  latest: number;
  changeRate: number;
  dayMin: number;
  dayMax: number;
  lastupdate: string;
  routeName: string;
}

export type ICoinDetail = IDetail & {
  Ccode: string;
  Mcode: string;
  volume: number;
};

export type IExchangeDetail = IDetail & {
  descriptiom: string;
  MoneyCode1: string;
  MoneyCode2: string;
};

export type IEmtiaDetail = IDetail;
export type ICurrencyDetail = IDetail;

export type IAllDetails = ICoinDetail &
  IEmtiaDetail &
  ICurrencyDetail &
  IExchangeDetail;
