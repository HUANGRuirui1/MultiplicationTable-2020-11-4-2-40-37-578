export class MultiplicationTable {
  public render(start: number, end: number): string{
    const expressions  = ''
    if (!this.isValidRange(start, end)){
      return ''
    }
    if (!this.isValidScope(start, end)){
      return 'invalid scope!'
    }
    return expressions
  }

  private isValidRange(start : number, end : number){
    return start <= end
  }

  private isValidScope(start : number, end : number){
    return !((start < 1 || start > 10) || (end < 1 || end > 10))
  }
}
