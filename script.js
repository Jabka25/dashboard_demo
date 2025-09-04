
const purchases = [
  {id:35797, text:'Increased speed (01:20)', amount:50},
  {id:36108, text:'Balance replenished (01:20)', amount:40},
  {id:24751, text:'Bought 5 referrals', amount:240},
  {id:45048, text:'KOTOPES bought 5 referrals', amount:500},
];
const payments = [
  {id:11130, text:'BOLOK (01:22)', amount:1.06},
  {id:13841, text:'FIFRAL (01:21)', amount:2731.00},
  {id:71985, text:'SPIRITB87 (01:21)', amount:457.00},
  {id:29468, text:'SERGEY (01:20)', amount:101.00},
];

function renderList(id, items, prefix){
  const el = document.getElementById(id);
  el.innerHTML = '';
  items.forEach(it => {
    const li = document.createElement('li');
    li.innerHTML = `<div>${prefix} ${it.id} — ${it.text}</div><div><strong>${it.amount}</strong></div>`;
    el.appendChild(li);
  });
}

document.getElementById('collectBtn').addEventListener('click', ()=>{
  const main = document.getElementById('mainBalance');
  let val = parseFloat(main.textContent.split(' ')[0]);
  // simulate collecting small profit
  const profit = 0.0012;
  val = (val + profit).toFixed(5);
  main.textContent = val + ' RUR';
  alert('Profit collected: ' + profit + ' RUR (demo)');
});

document.getElementById('increaseBtn').addEventListener('click', ()=>{
  const speedEl = document.getElementById('minerSpeed');
  let val = parseFloat(speedEl.textContent.split(' ')[0]);
  val = (val + 0.05).toFixed(2);
  speedEl.textContent = val + ' MH/s';
  const big = document.getElementById('bigBalance');
  big.textContent = (0.00051 * (val/0.10)).toFixed(5) + ' RUR / Day per Speed';
  alert('Miner speed increased (demo).');
});

renderList('purchases', purchases, '[purchase]');
renderList('payments', payments, '[payment]');
