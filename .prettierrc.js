module.exports = {
  printWidth: 200, // 一行最多多少个字符
  proseWrap: 'preserve', 	// 使用默认的折行标准 always\never\preserve
  tabWidth: 2, // 指定每个缩进级别的空格数
  useTabs: false, // 使用制表符而不是空格缩进行
  semi: false, // 是否需要分号
  singleQuote: true, // 是否使用单引号
  vueIndentScriptAndStyle: false, // Vue文件脚本和样式标签缩进
  quoteProps: 'as-needed',
  bracketSpacing: true, // 在对象文字中的括号之间打印空格
  trailingComma: 'es5', // 多行时尽可能打印尾随逗号。（例如，单行数组永远不会出现逗号结尾。） 可选值"<none|es5|all>"，默认none
  arrowParens: 'always', // 在单独的箭头函数参数周围包括括号 always：(x) => x \ avoid：x => x
  insertPragma: false,
  requirePragma: false,
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf', // 换行符使用 lf 结尾是 可选值"<auto|lf|crlf|cr>"
  rangeStart: 0 // 这两个选项可用于格式化以给定字符偏移量（分别包括和不包括）开始和结束的代码
}
