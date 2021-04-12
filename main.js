const confirmation = confirm("გსურთ თუ არა რეგისტრაცია?");


if (confirmation) {
    const userName = prompt("შეიყვანეთ თქვენი სახელი:");
    const userLastName = prompt("შეიყვანეთ თქვენი გვარი:");
    const email =  prompt("შეიყვანეთ თქვენი ელ-ფოსტა:")
    alert(`${userName} ${userLastName}, თქვენ წარმატებით გაიარეთ რეგისტრაცია`);
}else{
    alert("თქვენ უარი განაცხადეთ რეგისტრაციაზე");
}