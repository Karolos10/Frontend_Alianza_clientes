export class Cliente {

  constructor(public id: number,
    public sharedKey: string,
    public nombreCompleto: string,
    public email: string,
    public telefono : string,
    public fecha: Date) {

  }
}
