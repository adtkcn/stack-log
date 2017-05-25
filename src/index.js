class Logger{
  constructor() {
    const stackInfo = (new Error()).stack
    const stackArray = stackInfo.split("\n")
    if (stackArray[0] === "Error") { // 兼容 Android / iOS
      stackArray.shift()
    }
    stackArray.shift();
    stackArray.shift();

    let msgStr = "";
    try { // 优先使用 JSON 序列化,这样输出的日志,往往更有意义.
      msgStr=[];
      for (var i = 0; i < arguments.length; i++) {
        msgStr.push(JSON.stringify(arguments[i]));
      }
      msgStr=msgStr.join(',');
    } catch (e) {
      msgStr = arguments.toString();
    }

    stackArray.unshift(msgStr)
    this.stack = stackArray.join("\n")
  }
}

function log() {
   console.log(new Logger(...arguments).stack)
}

module.exports = log
