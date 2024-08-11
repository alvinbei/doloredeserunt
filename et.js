const fields = new Set(["hour", "minute", "second"]);
const timeUnit = { as: "day" };

if (!fields.has(timeUnit.as)) {
  console.log(`${timeUnit.as} is not in the fields set.`);
  fields.add(timeUnit.as);
}

console.log(fields); // Output: Set { 'hour', 'minute', 'second', 'day' }
