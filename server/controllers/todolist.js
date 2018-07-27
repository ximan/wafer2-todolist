const { mysql } = require('../qcloud')

module.exports = async ctx => {
  ctx.state.data = await mysql("Todolist").select('*')
}