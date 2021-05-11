function calcular(){
  var m_pared = document.getElementById("metros_pared").value *100;
  console.log(m_pared);
  var h_pared = document.getElementById("altura_pared").value*1.0;
  var sep_vert = document.getElementById("separacion_vertical").value/10;
  console.log(sep_vert);
  var sep_hor  = document.getElementById("separacion_horizontal").value/10;
  var ancho = document.getElementById("ancho_ladrillo").value*1.0;
  console.log(ancho);
  var alto = document.getElementById("alto_ladrillo").value*1.0;
  var factor_ = document.getElementById("factor_extra").value/100+1;
  var compra_min = document.getElementById("compra_minima").value*1.0;

  var ladrillos_ancho =m_pared/(sep_vert+ancho)
  console.log(ladrillos_ancho);
  var ladrillos_alto = h_pared/(sep_hor+alto)
  var total =ladrillos_alto*ladrillos_ancho*factor_
  var total_sujerido=Math.ceil(total/compra_min)*compra_min


  resultado.innerHTML=Math.ceil(total);
  total_sug.innerHTML=total_sujerido;
}
