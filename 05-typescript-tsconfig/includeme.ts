console.clear();

function getInitials(firstname: string, surname: string) {
  return firstname.charAt(0) + surname.charAt(0);
}

getInitials("Shell", "Recharge");

console.log("You ran the file successfully")