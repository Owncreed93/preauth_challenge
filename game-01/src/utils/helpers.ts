export function calculateSubset(numbers: number[], goal: number): number[] {
  let selected_subset: number[] = [];
  let spliced_numbers: number[] = [];
  let sum: number;
  for (let i = 0; i <= numbers.length; i++) {
    spliced_numbers = numbers.slice(i + 1);
    if (spliced_numbers.length == 0) break;
    console.log("This is the filtered spliced array: ", spliced_numbers);
    for (let j = 0; j < spliced_numbers.length; j++) {
      console.log(
        "This is the sum of numbers:",
        numbers[i],
        "+",
        spliced_numbers[j]
      );
      sum = numbers[i] + spliced_numbers[j];
      console.log("This is the sum: ", sum);
      if (sum === goal) {
        selected_subset.push(numbers[i]);
        selected_subset.push(spliced_numbers[j]);
        break;
      }
    }
    if (selected_subset.length !== 0) break;
  }

  return selected_subset;
}
