export class MultiplicationTable {
  public render(start: number, end: number): string{
    if (!this.isValidRange(start, end)){
      return ''
    }
    if (!this.isValidScope(start, end)){
      return 'invalid scope!'
    }
    return this.generateExpressionsString(this.buildExpressions(start, end))
  }

  private buildExpressions(start: number, end: number) : Expression[][]{
    const expressions: Expression[][] = []
    for (let i = 0; i <= end - start; i++) {
      expressions.push([])
      for (let j = 0; j <= i; j++) {
        expressions[i].push(new Expression(start + j, start + i))
      }
    }
    return expressions
  }

  private isValidRange(start : number, end : number) : boolean{
    return start <= end
  }

  private isValidScope(start : number, end : number) : boolean{
    return !((start < 1 || start > 10) || (end < 1 || end > 10))
  }

  private generateExpressionsString(expressions : Expression[][]) : string{
    let str = ''
    const maxLength : number[] = []
    for (let k = 0; k < expressions.length; k ++){
      const thisExpression = expressions[expressions.length - 1][k]
      const thisExpressionLength : number = thisExpression.factor1.toString().length + thisExpression.factor2.toString().length + thisExpression.product.toString().length + 4
      maxLength.push(thisExpressionLength)
    }
    for (let i = 0; i < expressions.length; i++) {
      for (let j = 0; j <= i; j++) {
        const thisString  = `${expressions[i][j].factor1}*${expressions[i][j].factor2}=${expressions[i][j].product}`
        str += thisString
        if (j !== i){
          str += '  '
          if (thisString.length + 2 < maxLength[j]){
            for (let m = 0; m < maxLength[j] - thisString.length - 2; m ++){
              str += ' '
            }
          }
        }
      }
      if (i !== expressions.length - 1){
        str += '\n'
      }
    }
    str = str.trimEnd()
    return str
  }
}
class Expression{
  constructor(number1 : number, number2 :number) {
    this.factor1 = number1
    this.factor2 = number2
    this.product = this.factor1 * this.factor2
  }
  factor1 : number
  factor2 : number
  product : number
}
