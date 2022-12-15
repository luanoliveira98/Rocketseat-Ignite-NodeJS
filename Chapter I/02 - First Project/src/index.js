const { response } = require('express')
const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()

app.use(express.json())

const customers = []

// Middleware
function verifyIfExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers

  const customer = customers.find(customer => customer.cpf === cpf)
  if (!customer) return res.status(400).json({ error: 'Customer not found' })

  req.customer = customer

  return next()
}

app.post('/account', (req, res) => {
  const { cpf, name } = req.body

  const customerAlreadyExists = customers.some(customer => customer.cpf === cpf)
  if (customerAlreadyExists)
    return res.status(400).json({ error: 'Customer already exists' })

  customers.push({
    id: uuidv4(),
    cpf,
    name,
    statement: []
  })

  res.status(201).send()
})

// app.use(verifyIfExistsAccountCPF)

app.get('/statement', verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req
  return res.json(customer.statement)
})

app.post('/deposit', verifyIfExistsAccountCPF, (req, res) => {
  const { description, amount } = req.body
  const { customer } = req

  const statementOperation = {
    description,
    amount,
    type: 'credit',
    created_at: new Date()
  }

  customer.statement.push(statementOperation)

  return res.status(201).send()
})

app.listen(3333)
