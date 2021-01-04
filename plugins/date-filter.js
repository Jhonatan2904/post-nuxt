import Vue from 'vue'

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
]

const filterData = value => {
  return FormData(value)
}

function FormData(inputDate){
  const date = new Date(inputDate)
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const formatDate = day + " "+ months[month] + " " + year
  return formatDate
}

Vue.filter('date', filterData)
