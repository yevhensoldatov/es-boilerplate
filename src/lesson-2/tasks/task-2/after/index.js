export function tag(literals, ...substitutions) {

   return literals[0]+`${substitutions[0].amount}, and it will be paid in ${substitutions[0].currency}!`;

}
