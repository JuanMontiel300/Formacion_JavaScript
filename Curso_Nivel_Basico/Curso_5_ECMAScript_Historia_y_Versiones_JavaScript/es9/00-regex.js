const regex = /(\d{4})-(\d{2})-(\d{2})/

const matchers = regex.exec('2026-10-09')

console.table(matchers)