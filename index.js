window.onload=function(){
const length = 10;
const tbody = document.querySelector('table > tbody');

Array.from({length}, () => 
{
  const tr = document.createElement('tr');
  Array.from({length}, () => 
  {
    const n = 1 + Math.random() * 100 | 0;
    const td = document.createElement('td');
    td.innerText = n;
    tr.appendChild(td);
  });
    tbody.appendChild(tr);
});

}


