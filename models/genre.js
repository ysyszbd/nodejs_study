/*
 * @LastEditTime: 2024-08-01 18:08:06
 * @Description:
 */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Genre = new Schema({
  name: { type: String, required: true },
});
Genre.virtual("url").get(() => {
  return "/catalog/book/" + this._id;
});
module.exports = mongoose.model("Genre", Genre);
