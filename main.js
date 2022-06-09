{
  let search_svg = document.querySelector("SVG");
  let input = search_svg.nextSibling;
  let sort_svg = search_svg.cloneNode(1);
  let info_svg = search_svg.cloneNode(1);
  search_svg.firstChild.setAttribute("d","M21+22A7+7+0 1 1+22+21ZL29+29");
  sort_svg.firstChild.setAttribute("d","M9+24L12+27L15+24M12+10V26M15+11H28M17+15H28M19+19H28M21+23H28");
  info_svg.firstChild.setAttribute("d","M20+13V15M20+17V24M21+9A10+10+0 1 1+20+9Z");
  input.after( sort_svg, info_svg );
  let table = document.getElementsByTagName("table")[0];
  let tr = document.createElement( "tr" );
  let td = document.createElement( "th" );
  td.style.width = ((( table.getBoundingClientRect().width - 1 ) / 4 +.5) | 0) + "PX";
  td.style.border = "1PX SOLID #000";
  td.style.padding = "10PX 0";
  tr.append( td, td.cloneNode(), td.cloneNode(), td.cloneNode() );
  let CC = l[0]+l[1]+l[2]+l[3]+l[4]+l[5]+l[6]+l[7]+l[8]+l[9]+l[10]+l[11]+l[12]+l[13]+l[14];
  let CT = l[15]+l[16]+l[17]+l[18]+l[19]+l[20]+l[21]+l[22]+l[23]+l[24]+l[25]+l[26]+l[27]+l[28]+l[29];
  let TT = l[30]+l[31]+l[32]+l[33]+l[34]+l[35]+l[36]+l[37]+l[38]+l[39]+l[40]+l[41]+l[42]+l[43]+l[44];
  for( let i = 0; i < t.length; ) {
    let r = tr.cloneNode(1);
    for ( let rc = r.children,j = 0; j < 4; ++i,++j ) {
      rc[j].textContent = n[t[i]];
      if ( t[i] < CC + CT + TT ) {
        rc[j].style.background = t[i] < CC ? "#EAA" : t[i] < CC+CT ? "#ED9" : "#ADA";
      }
    }
    table.append( r );
  }
  //table lengthの方法を変えたほうがいいかも
}