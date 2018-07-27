const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var todo = {
    name: ctx.request.body.name,
    complete: ctx.request.body.complete
  }

  await mysql("Todolist").insert(todo)

  ctx.state.data = "OK"
}