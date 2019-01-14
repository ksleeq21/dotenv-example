const { parsed, error } = require('dotenv').config()
if (error) {
  console.log('dotenv error', error)
  throw error
} else {
  console.log('Loaded env variables')
  Object.keys(parsed).forEach(k => {
    console.log(`${k}: ${parsed[k]}`)
  })
  console.log('\nMachine-specific env variables')
  Object.keys(parsed).forEach(k => {
    console.log(`${k}: ${process.env[k]}`)
  })
  console.log('\nOverride ALREADY_SET_VAR with loaded variable')
  process.env.ALREADY_SET_VAR = parsed.ALREADY_SET_VAR
  console.log(`process.env.ALREADY_SET_VAR=${process.env.ALREADY_SET_VAR}`)
}
