/*
 * @LastEditTime: 2024-08-01 17:21:49
 * @Description:
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});
// 虚拟属性name，表示作者全名
AuthorSchema.virtual("name").get(() => {
  return this.family_name + "," + this.first_name;
});
// 虚拟属性lifespan，表示作者寿命
AuthorSchema.virtual("lifespan").get(function () {
  return (
    this.date_of_death.getYear() - this.date_of_birth.getYear()
  ).toString();
});
// 虚拟属性url，表示作者url
AuthorSchema.virtual("url").get(() => {
  return "/catalog/author/" + this._id;
});

// 到处Author模型
module.exports = mongoose.model("Author", AuthorSchema);
