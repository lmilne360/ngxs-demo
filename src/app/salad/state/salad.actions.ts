export class AddTopping {
  static readonly type = '[salad] add topping';
  constructor(public readonly payload: string) {}
}

export class StartOver {
  static readonly type = '[salad] start over';
}
