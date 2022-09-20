import { Schema, model } from 'npm:mongoose'

const companySchema = new Schema({
	name: String,
	city: String,
	country: String,
})

export default model('Company', companySchema)
