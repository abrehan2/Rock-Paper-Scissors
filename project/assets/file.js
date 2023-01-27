let comp_choice = document.querySelector("#computer-choice");
let user_choice = document.querySelector("#user-choice");
let result = document.querySelector("#result");
let possible_choices = document.querySelectorAll('button');
let user_select;

possible_choices.forEach(choice => {
  choice.addEventListener("click", e => {
  user_select = e.target.id;
  user_choice.innerHTML = user_select;
  generate_computer_choice();
  get_result();
    });
});

function generate_computer_choice()
{
    var arr = ['rock', 'paper', 'scissors'];
    var random_num = Number.parseInt((Math.random() * 3));
    comp_choice.innerHTML = arr[random_num];   
}

function get_result(){

    var comp_result = comp_choice.innerHTML;

// CASE: 1
    if(user_select == 'rock' && comp_result == 'rock')
    {
        result.innerHTML = `Draw`;
    }

else if (user_select == 'rock' && comp_result == 'scissors')
{
    result.innerHTML = `You Win!`;
}

else if (user_select == 'rock' && comp_result == 'paper')
{
    result.innerHTML = `You Lose!`;
}

// CASE: 2
if(user_select == 'paper' && comp_result == 'paper')
{
    result.innerHTML = `Draw`;
}

else if (user_select == 'paper' && comp_result == 'rock')
{
result.innerHTML = `You Win!`;
}

else if (user_select == 'paper' && comp_result == 'scissors')
{
result.innerHTML = `You Lose!`;
}

// CASE: 3
if(user_select == 'scissors' && comp_result == 'scissors')
{
    result.innerHTML = `Draw`;
}

else if (user_select == 'scissors' && comp_result == 'paper')
{
result.innerHTML = `You Win!`;
}

else if (user_select == 'scissors' && comp_result == 'rock')
{
result.innerHTML = `You Lose!`;
}

}
