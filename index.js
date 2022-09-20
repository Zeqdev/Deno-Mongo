import express from 'npm:express'
import './database.js'
import companiesRouter from './routes/companies.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(companiesRouter)

app.get('/', (_req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {
	console.log('Server running on port ' + port)
})
