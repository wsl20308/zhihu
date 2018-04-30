const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const { ObjectId, Mixed } = Schema.Types

var QuestionUser = new Schema({
	question_id: {
		type: ObjectId,
		ref: 'Question'
	},
	user_id: {
		type: ObjectId,
		ref: 'User'
	},
	vote: {
		unique: false,
	    required: true,
		type: Number,
		default: 0
	},
	meta: {
	    createdAt: {
	      type: Date,
	      default: Date.now()
	    },
	    updatedAt: {
	      type: Date,
	      default: Date.now()
	    }
  	}
})
module.exports = QuestionUser