let configuration = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
}

let printCard = function() {
  console.log(this.frontContent)
  console.log(this.insideContent)
  // Wow! Elegant! And notice the arrow function's `this` is the same
  // this that printCard has by virtue of configuration being passed
  // in as a thisArg
  this.signatories.forEach(s => console.log(`${this.closing[s]}, ${s}`)
  )
}

printCard.call(configuration)

function createEmployeeRecord(row){
  return {
      firstName: row[0],
      familyName: row[1],
      title: row[2],
      payPerHour: row[3],
      timeInEvents: [],
      timeOutEvents: [],
  }
}

let createEmployees = function(employeeRowData) {
  return employeeRowData.map(function(row){
      return createEmployeeRecord(row)
  })
}

let createTimeInEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}


let createTimeOutEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}


let hoursWorkedOnDate = function(soughtDate){
  let inEvent = this.timeInEvents.find(function(e) {
     return e.date === soughtDate
  })

  let outEvent = this.timeOutEvents.find(function(e){
     return e.date === soughtDate
  })

  return (outEvent.hour - inEvent.hour) / 100
}


let wagesEarnedOnDate = function(dateSought){
  let hours = hoursWorkedOnDate.call(this, dateSought)
 return (hours * this.payPerHour)

}

let calculatePayroll = function(arrays){
  return arrays.reduce(function(memo, rec){
      return memo + allWagesFor.call(rec)
  }, 0)
}

let createEmployeeRecords = function(arrays){
  return arrays.map(function(row){
       return createEmployeeRecord(row)
   })
}

let findEmployeebyFirstName = function(srcArray, firstName){
  return srcArray.find(function(employee) {
       return employee.firstName === firstName
   })
} 