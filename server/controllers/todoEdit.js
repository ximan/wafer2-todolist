const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let id = ctx.request.body.id;
  let complete = ctx.request.body.complete;

  await mysql("Todolist").update({ complete: complete }).where({ id: id })

  ctx.state.data = await mysql("Todolist").select('*')
}