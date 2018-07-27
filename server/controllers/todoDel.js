const { mysql } = require('../qcloud')

module.exports = async ctx => {
  let id = ctx.request.body.id

  await mysql("Todolist").del().where({ id: id })

  ctx.state.data = "OK"
}