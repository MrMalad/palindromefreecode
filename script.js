const inp = document.getElementById('text-input');
const Btn = document.getElementById('check-btn');
const result = document.getElementById('result');

function check(input)
{
    if(input==='')
   { 
    alert('Please input a value');
    return;
   }
const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
if(lowerCaseStr === [...lowerCaseStr].reverse().join(''))
result.innerText = input+ " is a palindrome";
else
result.innerText = input+ " is not a palindrome";
}
Btn.addEventListener('click', () => {
    check(inp.value);
    inp.value = '';
  });
