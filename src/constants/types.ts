export interface ICoin {
    code: string;
    ShortName: string;
    FullName: string;
  }
  
  export interface ICoinDetail {
    code: string;
    ShortName: string;
    FullName: string;
    Ccode: string;
    Mcode: string;
    buying: number;
    selling: number;
    latest: number;
    changeRate: number;
    dayMin: number;
    dayMax: number;
    volume: number;
    lastupdate: string;
  }
  export interface IEmtia {
    code: string;
    ShortName: string;
    FullName: string;
  }
  export interface IEmtiaDetail {
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
  }
  export interface ICurrency {
    code: string;
    ShortName: string;
    FullName: string;
  }

  export interface ICurrencyDetail {
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
  }
  export interface IExhange {
    code: string;
    ShortName: string;
    FullName: string;
    description: string;
  }
  export interface IExchangeDetail {
    code: string;
    ShortName: string;
    FullName: string;
    descriptiom: string;
    MoneyCode1: string;
    MoneyCode2: string;
    buying: number;
    selling: number;
    latest: number;
    changeRate: number;
    dayMin: number;
    dayMax: number;
    lastupdate: string;
  }