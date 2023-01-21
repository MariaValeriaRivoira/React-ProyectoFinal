const Paginas = ({ func, item, posicion, btnCount }) => {

  for (let i = 1; i < item.length; i++) {
    if (i % 15 === 0) {
      btnCount.push(i)
    }
    if (i === item.length - 1) {
      !!btnCount.find(e => e === item.length) ? '' : btnCount.push(i)
    }
  }

  return (
    <div className="btnPagContainer">
    <button value={'prev'} onClick={func} className="btnPag">Ant</button>
    {
      btnCount.map((e, i) => (
        <button key={i} value={e} className={posicion === (i) ? "btnPag actual" : "btnPag"} onClick={func}>{i + 1}</button>
      ))
    }
    <button value={'next'} onClick={func} className="btnPag">Sig</button>
    </div>
  );
};

export default Paginas;
