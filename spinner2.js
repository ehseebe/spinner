let spinnerDashes = "\r|   \r/   \r-   \r\\   \r|   \r/   \r-   \r\\   \r|   \r/   \r-   \r\\   "
//let spinnerDashes = "\r| \r/ \r- \r\\ \r| \r/ \r- \r\\ \r| \r/ \r- \r\\ "

const loFiSpinner = (spinner) => {
  let delay = 0;
  for (let dash of spinner) {
    setTimeout(() => process.stdout.write(dash), delay);
    delay += 50;
  }
  setTimeout(() => process.stdout.write('\n'), (delay + 50 * spinner.length - 1));
}

console.log(loFiSpinner(spinnerDashes))
